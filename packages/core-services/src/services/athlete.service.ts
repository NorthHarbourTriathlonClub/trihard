import { z } from 'zod';
import { IdSchema } from './common.service';

export const SignInToTrainingArgsSchema = z.object({
  athleteId: IdSchema,
  trainingSessionId: IdSchema,
});
export type SignInToTrainingArgs = z.infer<typeof SignInToTrainingArgsSchema>;
export const signInToTraining = (args: SignInToTrainingArgs) => {
  return;
};
