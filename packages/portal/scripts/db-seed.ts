import * as f from '@ngneat/falso';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const seedDb = async () => {
  console.log(`Seeding database`);
  await createMembers();
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

seedDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
