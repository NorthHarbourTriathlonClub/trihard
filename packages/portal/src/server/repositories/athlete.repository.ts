import { prisma } from '@/server/db';
import { Athlete, Prisma } from '@prisma/client';
import { ResultAsync, ok, err } from 'neverthrow';

export const findOne = async (
  args: Prisma.AthleteFindUniqueArgs,
): Promise<ResultAsync<Athlete, unknown>> => {
  const result = await ResultAsync.fromPromise(
    prisma.athlete.findUnique(args),
    (e) => e,
  );
  if (result.isErr()) {
    return err(result.error);
  }
  return ok<Athlete>(result.value as Athlete);
};

export const update = async (
  args: Prisma.AthleteUpdateArgs,
): Promise<ResultAsync<Athlete, unknown>> => {
  const result = await ResultAsync.fromPromise(
    prisma.athlete.update(args),
    (e) => e,
  );
  if (result.isErr()) {
    return err(result.error);
  }
  return ok<Athlete>(result.value as Athlete);
};
