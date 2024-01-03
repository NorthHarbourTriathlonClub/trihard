// route - session-sign-in-with-consession-card
export type SignInWithConcessionCardArgs = {
  trainingSessionId: string;
  athleteId: string;
  concessionCardId: string;
};
/**
 * Route - session-sign-in-WITH-concession-card
 */
export const signInWithConcessionCard = (
  args: SignInWithConcessionCardArgs,
) => {
  // Update ConcessionCard (using concessionCardId) - add trainingSessionId into trainingSessionIds[]
  // Update TrainingSession (using trainingSessionId) - add athleteId into athleteIds[]
  return args;
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
