import { ResultAsync, err, ok } from 'neverthrow';
import * as TrainingSessionRepository from '@/server/repositories/training-session.repository';
import { SignInWithConcessionCardArgs } from '@/schemas/sign-in-athlete';
import * as AthleteRepository from '@/server/repositories/athlete.repository';
import { ConcessionCard } from '@prisma/client';

export const signInWithConcessionCard = async (
  args: SignInWithConcessionCardArgs,
): Promise<ResultAsync<SignInWithConcessionCardArgs, unknown>> => {
  const { trainingSessionId, athleteId } = args;

  // find/validate trainingSessionId
  const trainingSession = await TrainingSessionRepository.findOne({
    where: {
      id: trainingSessionId,
    },
    select: {
      id: true,
    },
  });
  if (trainingSession.isErr()) {
    return err(trainingSession.error);
  }

  // find/validate athleteId
  const athlete = await AthleteRepository.findOne({
    where: { id: athleteId },
    select: { id: true, concessionCards: true },
  });
  if (athlete.isErr()) {
    return err(athlete.error);
  }

  // find/validate concession card
  const today = new Date();
  const { concessionCards: currentConcessionCards } = athlete.value;
  const validConcessionCard = currentConcessionCards.find(
    (card: ConcessionCard) => {
      return today >= card.issuanceDate && today <= card.expiryDate;
    },
  );
  if (validConcessionCard === undefined) {
    return err(
      new Error(
        `Sorry, we couldn't find any valid concession cards for the athlete you're trying to sign in`,
      ),
    );
  }

  // connect concession card with training session
  const updatedConcessionCards = currentConcessionCards.map(
    (card: ConcessionCard) => {
      if (card.id === validConcessionCard.id) {
        return {
          ...card,
          numTrainingsLeft: card.numTrainingsLeft - 1,
          trainingSessionIds: [
            ...card.trainingSessionIds, // keep original trainingSessionId(s)
            trainingSessionId, // add new trainingSessionId
          ],
        } as ConcessionCard;
      }
      return card;
    },
  );
  const includeTrainingSessionIntoConcessionCard =
    await AthleteRepository.update({
      where: { id: athleteId },
      data: {
        concessionCards: updatedConcessionCards, // new list of concession cards
      },
    });
  if (includeTrainingSessionIntoConcessionCard.isErr()) {
    return err(
      new Error(
        `Sorry, we couldn't sign-in the athlete you're trying to sign in for the session`,
      ),
    );
  }

  return ok<SignInWithConcessionCardArgs>(args);
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
