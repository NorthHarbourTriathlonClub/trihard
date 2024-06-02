import { Prisma } from '@core/db';

export const create = (args: Prisma.AthleteCreateArgs) => {
  // ckeck db if training session with specified key attributes already exist
  // reject request if it does
};
