import { Prisma, TrainingSession } from '@core/db';
import { ResultAsync, err, fromPromise, ok } from 'neverthrow';
import { db } from './db.service';
import { getDayOfWeek, isMonday } from './common.service';
import { Season, weeklyTrainingSchedule } from '@core/domain';
import { addDays } from 'date-fns';

export const create = async (
  dto: Prisma.TrainingSessionCreateInput,
): Promise<ResultAsync<TrainingSession, Error>> => {
  // ckeck db if training session with specified key attributes already exist
  // reject request if it already does, no point creating duplicates

  const { date, dayOfWeek, hour, minute, amPm, type, location, season } = dto;
  const identicalTrainingSessions = await fromPromise(
    db.trainingSession.findMany({
      where: {
        date,
        dayOfWeek,
        hour,
        minute,
        amPm,
        type,
        location,
        season,
      },
    }),
    (e) => e,
  );

  if (identicalTrainingSessions.isOk()) {
    if (identicalTrainingSessions.value.length === 0) {
      // zero identical TrainingSession found in db
      // good to go -> create a new TrainingSession using specified input

      const result = await fromPromise(
        db.trainingSession.create({ data: dto }),
        (e) => e,
      );

      if (result.isErr()) {
        const message = `Failed to create item in db. Error: ${JSON.stringify(
          result.error,
        )}`;
        return err(new Error(message));
      }
      return ok<TrainingSession>(result.value);
    }

    if (identicalTrainingSessions.value.length > 0) {
      const count = identicalTrainingSessions.value.length;
      const msg1 = `We found ${count} record(s) of TrainingSession(s) using the identical properties.`;
      const msg2 = `This means we're unable to create yet another identical TrainingSession for you using the payload you provided.`;
      const message = [msg1, msg2].join(` `);
      return err(new Error(message));
    }
  }

  if (identicalTrainingSessions.isErr()) {
    const msg1 = `Failed to create training session.`;
    const msg2 = `We're unable to decide whether we can create a brand new training session.`;
    const msg3 = `This is because we couldn't look up the database checking if a similar training session already exists.`;
    const msg4 = `Error: ${JSON.stringify(identicalTrainingSessions.error)}`;
    const message = [msg1, msg2, msg3, msg4].join(` `);
    return err(new Error(message));
  }

  // default return if none of prev conditions are met
  return err(new Error(`Unable to create item`));
};

export type CreateWeeklyTrainingScheduleDto = {
  /**
   * Start date of the week, it has to be a MONDAY
   */
  weekStartDate: Date;

  season: Season;
};
/**
 * Create a training schedule for the whole week,
 * given a start date
 *
 * The training schedule created for the week will
 * include the start date provided plus the following 6 days,
 * which comes down to 7 days
 */
export const createWeeklyTrainingSchedule = async (
  dto: CreateWeeklyTrainingScheduleDto,
): Promise<ResultAsync<TrainingSession[], Error>> => {
  const { weekStartDate } = dto;

  // validate if `weekStartDate` is a monday
  if (isMonday(weekStartDate) === false) {
    const msg1 = `Unable to create weekly training schedule.`;
    const msg2 = `Please make sure the date you provided as "weekStartDate" is a Monday`;
    const msg3 = `You provided ${weekStartDate}, which is a ${getDayOfWeek(
      weekStartDate,
    )}.`;
    const message = [msg1, msg2, msg3].join(` `);
    return err(new Error(message));
  }

  // carry on creating the schedule if `weekStartDate` provided is indeed a Monday

  // generate inputs
  const inputs = generateWeeklyTrainingData(dto);

  // construct functions from executing prisma transactions
  const transactions = inputs.map((data) =>
    db.trainingSession.create({ data }),
  );

  const result = await fromPromise(db.$transaction(transactions), (e) => e);

  if (result.isErr()) {
    const message = `Failed to create training sessions. Error: ${JSON.stringify(
      result.error,
    )}`;
    return err(new Error(message));
  }

  return ok<TrainingSession[]>(result.value);
};

/**
 * Given `weekStartDate` as a start date, assuming it's a Monday,
 * create an array of `Prisma.TrainingSessionCreateInput` based on
 * the season specified & `weeklyTrainingSchedule` from `@core/domain`
 * package, to be used for creating `TrainingSessions` in the db
 */
export const generateWeeklyTrainingData = (
  dto: CreateWeeklyTrainingScheduleDto,
): Prisma.TrainingSessionCreateInput[] => {
  const { weekStartDate, season } = dto;
  const inputs: Prisma.TrainingSessionCreateInput[] = weeklyTrainingSchedule[
    season
  ].map((item): Prisma.TrainingSessionCreateInput => {
    if (item?.dayOfWeek === `Monday`) {
      return {
        ...item,
        date: weekStartDate,
      };
    }

    if (item?.dayOfWeek === `Tuesday`) {
      return {
        ...item,
        date: addDays(weekStartDate, 1),
      };
    }

    if (item?.dayOfWeek === `Wednesday`) {
      return {
        ...item,
        date: addDays(weekStartDate, 2),
      };
    }

    if (item?.dayOfWeek === `Thursday`) {
      return {
        ...item,
        date: addDays(weekStartDate, 3),
      };
    }

    if (item?.dayOfWeek === `Friday`) {
      return {
        ...item,
        date: addDays(weekStartDate, 4),
      };
    }

    if (item?.dayOfWeek === `Saturday`) {
      return {
        ...item,
        date: addDays(weekStartDate, 5),
      };
    }

    if (item?.dayOfWeek === `Sunday`) {
      return {
        ...item,
        date: addDays(weekStartDate, 6),
      };
    }

    // by default, return an input with an date in the past ()
    return {
      ...item,
      date: new Date(0),
    };
  });

  // filter out `TrainingSessionCreateInput`s where their date is created
  // using `new Date(0)`, because it's not a valid date

  return inputs.filter((item) => {
    const date = item?.date as Date;
    return date?.getTime() !== 0;
  });
};
