import * as f from '@ngneat/falso';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const seedDb = async () => {
  console.log(`Seeding database`);
  await createTrainingSessions();
};

export const createMembers = async () => {
  let members: Prisma.MemberCreateManyInput[] = [];
  for (let i = 1; i <= 50; i++) {
    const firstName = f.randFirstName();
    const lastName = f.randLastName();
    const member: Prisma.MemberCreateManyInput = {
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}-${lastName.toLowerCase()}-${i}@testing.com`,
    };
    members = [...members, member];
  }
  const created = await prisma.member.createMany({
    data: members,
  });
  console.log(`Number of members created: ${created.count}`);
};

export const trainingTypes = [
  'Swim',
  'Bike',
  'Run',
  'Triathlon',
  'Zwift',
] as const;
export const trainingLocations = [
  'Takapuna Boating Club',
  'Birkenhead Pool',
  'Online',
] as const;

/**
 * Randomly create DateTime of the following time of day:
 * - 6 AM
 * - 7 AM
 * - 9 AM
 * - 5:30 PM
 */
export const createStartTime = () => {
  const nztOffset = 13; // UTC offset for New Zealand Time

  // Array of possible hours
  const possibleHours = [6, 7, 9, 17];

  // Randomly select an hour from the array
  const randomHour =
    possibleHours[Math.floor(Math.random() * possibleHours.length)];

  const startTime = new Date();

  // Set the selected hour in NZT
  startTime.setUTCHours(randomHour - nztOffset);
  startTime.setUTCMinutes(randomHour === 17 ? 30 : 0); // Set minutes to 30 if the hour is 5:30 PM

  return startTime;
};

export const createTrainingSessions = async () => {
  let trainingSessions: Prisma.TrainingSessionCreateManyInput[] = [];
  for (let i = 1; i <= 50; i++) {
    const coachFullName = f.randFullName();

    const typeIndex = f.randNumber({
      max: trainingTypes.length - 1,
    });
    const type = trainingTypes[typeIndex];

    const locationIndex = f.randNumber({
      max: trainingLocations.length - 1,
    });
    const location = trainingLocations[locationIndex];

    const startTime = createStartTime();
    const trainingSession: Prisma.TrainingSessionCreateManyInput = {
      coachFullName,
      type,
      location,
      startTime,
    };
    trainingSessions = [...trainingSessions, trainingSession];
  }
  const created = await prisma.trainingSession.createMany({
    data: trainingSessions,
  });
  console.log(`Number of trainingSessions created: ${created.count}`);
};

seedDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
