import { Prisma, PrismaClient, TrainingSession } from '@prisma/client';
import { randFirstName, randLastName, randNumber } from '@ngneat/falso';

const nzMobileNumberprefix = [`021`, `022`, `026`, `027`, `028`] as const;
const emailProviders = [
  `gmail.com`,
  `outlook.com`,
  `protonmail.com`,
  `yahoo.com`,
] as const;

export const trainingTypes = [
  `Swim`,
  `Bike`,
  `Run`,
  `Brick`,
  `Swim + Bike`,
  `Swim + Run`,
  `Bike + Run`,
  `Zwift`,
] as const;

export const trainingLocations = [
  `Takapuna Boating Club`,
  `Birkenhead Pool`,
  `Milford Marina Reserve`,
  `Albany Hill`,
  `Sunset Road`,
  `Online`,
] as const;

export const coachesDemo = [
  `Steven Farrell`,
  `Lauren Quilter`,
  `Baron Bowman`,
  `Sophia Ackerman`,
] as const;

export const seasons = [`Summer`, `Winter`] as const;
export type Season = (typeof seasons)[number]

const randNzPhoneNumber = () => {
  const prefix =
    nzMobileNumberprefix[
      randNumber({ min: 0, max: nzMobileNumberprefix.length })
    ];
  const rest = Array.from({ length: 7 }, () =>
    randNumber({ min: 0, max: 10 }),
  ).join('');
  return `${prefix}${rest}`;
};

const createdBy = `System Admin`;
const updatedBy = `System Admin`;

const prisma = new PrismaClient();

const seedDb = async () => {
  seedAthletes();
};

const seedAthletes = async () => {
  const inputs: Prisma.AthleteCreateInput[] = Array.from(
    { length: 100 },
    () => {
      const firstName = randFirstName({ withAccents: false });
      const lastName = randLastName({ withAccents: false });
      const email = `${firstName.toLowerCase()}-${lastName.toLowerCase()}@${
        emailProviders[randNumber({ min: 0, max: emailProviders.length })]
      }`;
      const mobile = randNzPhoneNumber();

      const data: Prisma.AthleteCreateInput = {
        firstName,
        lastName,
        email,
        mobile,
        createdBy,
        updatedBy,
      };

      return data;
    },
  );

  console.log(`Generated athletes input data, adding them into db...`);

  await prisma.athlete
    .createMany({
      data: inputs,
    })
    .then((e) => {
      console.log(`Created ${e.count} athletes in db`);
    })
    .catch((e) => {
      console.log(`Failed to create athletes to db. ${JSON.stringify(e)}`);
    });
};

const seedTrainingSessions = async () => {
  const inputs: Prisma.TrainingSessionCreateInput[] = Array.from(
    { length: 100 },
    () => {
      const type =
        trainingTypes[randNumber({ min: 0, max: trainingTypes.length })];
      const coachFullName =
        coachesDemo[randNumber({ min: 0, max: coachesDemo.length })];

      const startTime = new Date(`2024-07-01`);

      const location =
        trainingLocations[
          randNumber({ min: 0, max: trainingLocations.length })
        ];

      const data: Prisma.TrainingSessionCreateInput = {
        type,
        coachFullName,
        startTime,
        location,
        createdBy,
        updatedBy,
      };

      return data;
    },
  );

  await prisma.trainingSession
    .createMany({ data: inputs })
    .then(() => {
      console.log(`Created TrainingSessions in db`);
    })
    .catch((e) => {
      console.log(
        `Failed to create TrainingSessions to db. ${JSON.stringify(e)}`,
      );
    });
};
seedTrainingSessions();

// seedDb();

type CreateTrainingScheduleArgs = {
  season: Season;
  numberOfWeeksOfSessionsRequired: number;
  startDate: Date;
}
const createWinterTrainingSchedule = (args: CreateTrainingScheduleArgs): Prisma.TrainingSessionCreateInput[] => {
  
  const inputs: Prisma.TrainingSessionCreateInput[] = Array.from({ length: 10 }, () => {
    const type =
        trainingTypes[randNumber({ min: 0, max: trainingTypes.length })]
      const coachFullName =
        coachesDemo[randNumber({ min: 0, max: coachesDemo.length })]

      const startTime = new Date(`2024-07-01`)

      const location =
      trainingLocations[
        randNumber({ min: 0, max: trainingLocations.length })
      ];

    return {
        type,
        coachFullName,
        startTime,
        location,
        createdBy,
        updatedBy,
    }
  })
  return inputs;
}