import { ConcessionCard } from '@prisma/client';
import { ResultAsync, ok, err } from 'neverthrow';
import { prisma } from '@/server/db';
import { ConcessionCardFindManyArgs } from '@/schemas/find-many-concession-cards';

export type AddTrainingSessionToConcessionCardArgs = {
  concessionCardId: string;
  trainingSessionId: string;
};
export const addTrainingSessionToConcessionCard = async (
  args: AddTrainingSessionToConcessionCardArgs,
): Promise<ResultAsync<ConcessionCard, unknown>> => {
  const { concessionCardId, trainingSessionId } = args;
  try {
    const operation = await prisma.concessionCard.update({
      where: { id: concessionCardId },
      data: {
        trainingSessionIds: {
          push: trainingSessionId,
        },
        numTrainingsAvailable: {
          decrement: 1,
        },
      },
    });
    return ok<ConcessionCard>(operation);
  } catch (e) {
    return err(e);
  }
};

export const findMany = async (
  args: ConcessionCardFindManyArgs,
): Promise<ResultAsync<ConcessionCard[], unknown>> => {
  try {
    const operation = await prisma.concessionCard.findMany(args);
    return ok<ConcessionCard[]>(operation);
  } catch (e) {
    return err(e);
  }
};
