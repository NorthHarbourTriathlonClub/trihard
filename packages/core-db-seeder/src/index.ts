import { Prisma, PrismaClient } from '@core/db';
import { randFirstName, randLastName, randNumber } from '@ngneat/falso';
import {
  coachesDemo,
  emailProviders,
  nzMobileNumberprefix,
  weeklyTrainingSchedule,
} from '@core/domain';

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
  seedTrainingSessions();
};

const seedAthletes = async () => {
  const inputs: Prisma.AthleteCreateInput[] = Array.from(
    { length: 100 },
    () => {
      const firstName = randFirstName({ withAccents: false });
      const lastName = randLastName({ withAccents: false });
      const email = `${firstName.toLowerCase()}-${lastName.toLowerCase()}@${
        emailProviders[randNumber({ min: 0, max: emailProviders.length - 1 })]
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
  const inputs: Prisma.TrainingSessionCreateInput[] = weeklyTrainingSchedule[
    `Winter`
  ].map((item): Prisma.TrainingSessionCreateInput => {
    return {
      ...item,
      createdBy,
      updatedBy,
      date: new Date(),
      coachFullName:
        coachesDemo[randNumber({ min: 0, max: coachesDemo.length - 1 })],
    };
  });

  await prisma.trainingSession
    .createMany({ data: inputs })
    .then((e) => {
      console.log(`Created ${e?.count} TrainingSessions in db`);
    })
    .catch((e) => {
      console.log(`Failed to create TrainingSessions to db. ${e?.message}`);
    });
};

seedDb();
