import { ResultAsync, ok, err } from 'neverthrow';
import { TrainingSession } from '@prisma/client';
import { prisma } from '@/server/db';

export type AddAthleteToTrainingSessionArgs = {
  trainingSessionId: string;
  athleteId: string;
};
export const addAthleteToTrainingSession = async (
  args: AddAthleteToTrainingSessionArgs,
): Promise<ResultAsync<TrainingSession, unknown>> => {
  const { trainingSessionId, athleteId } = args;
  try {
    const operation = await prisma.trainingSession.update({
      where: {
        id: trainingSessionId,
      },
      data: {
        athleteIds: {
          push: athleteId,
        },
      },
    });
    return ok<TrainingSession>(operation);
  } catch (e) {
    return err(e);
  }
};
