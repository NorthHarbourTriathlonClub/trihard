import { ResultAsync, err, ok } from 'neverthrow';
import * as TrainingSessionRepository from '@/server/repositories/training-session.repository';
import * as ConcessionCardRepository from '@/server/repositories/concession-card.repository';
import { SignInWithConcessionCardArgs } from '@/schemas/sign-in-athlete';
import { prisma } from '@/server/db';

export const signInWithConcessionCard = async (
  args: SignInWithConcessionCardArgs,
): Promise<ResultAsync<SignInWithConcessionCardArgs, unknown>> => {
  const { trainingSessionId, athleteId, cardNumber } = args;

  const concessionCards = await prisma.concessionCard.findMany({
    where: {
      cardNumber,
    },
  });
  const concessionCard = concessionCards[0];

  const addTrainingSessionToConcessionCard =
    await ConcessionCardRepository.addTrainingSessionToConcessionCard({
      concessionCardId: concessionCard.id,
      trainingSessionId,
    });
  if (addTrainingSessionToConcessionCard.isErr()) {
    return err(addTrainingSessionToConcessionCard.error);
  }

  const addAthleteToTrainingSession =
    await TrainingSessionRepository.addAthleteToTrainingSession({
      trainingSessionId,
      athleteId,
    });
  if (addAthleteToTrainingSession.isErr()) {
    return err(addAthleteToTrainingSession.error);
  }

  return ok(args);
};

export type SignInWithoutConcessionCardArgs = {
  trainingSessionId: string;
  athleteId: string;
  individualSessionPaymentId: string;
};
/**
 * Route - session-sign-in-WITHOUT-concession-card
 */
export const signInWithoutConcessionCard = (
  args: SignInWithoutConcessionCardArgs,
) => {
  // Update TrainingSession using trainingSessionId by:
  // - Make TrainingSession.athletes =  [..., args.athleteId]
  // Update IndividualSessionPayment (using individualSessionPaymentId) by:
  // - Make IndividualSessionPayment.trainingSessionId = args.trainingSessionId
  // - Make IndividualSessionPayment.athleteId = args.athleteId
  return args;
};
