import { ConcessionCard } from '@prisma/client';
import { ResultAsync, ok, err } from 'neverthrow';
import { prisma } from '@/server/db';

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
      },
    });
    return ok<ConcessionCard>(operation);
  } catch (e) {
    return err(e);
  }
};
