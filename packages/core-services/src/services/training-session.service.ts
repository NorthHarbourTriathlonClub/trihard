import { Prisma, TrainingSession } from '@core/db';
import { ResultAsync, err, fromPromise, ok } from 'neverthrow';
import { db } from './db.service';
import { getDayOfWeek, isMonday } from './common.service';

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
) => {
  const { weekStartDate } = dto;

  // validate if `weekStartDate` is a monday
  if (isMonday(weekStartDate) === false) {
    const msg1 = `Unable to create weekly training schedule.`;
    const msg2 = `Please make sure the date you provided as "weekStartDate" is a Monday`;
    const msg3 = `You provided ${weekStartDate}, which is a ${getDayOfWeek(
      weekStartDate,
    )}.`;
    const message = [msg1, msg2, msg3].join(` `);
    return new Error(message);
  }
};
