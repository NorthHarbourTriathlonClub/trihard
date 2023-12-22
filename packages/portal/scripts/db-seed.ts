import * as f from '@ngneat/falso';

const seedDb = async () => {
  console.log(`Seeding database`);
  console.log(`firstName => ${f.randFirstName()}`);
};

seedDb();
