import { z } from 'zod';

export const SignInWithConcessionCardArgsSchema = z.object({
  trainingSessionId: z.string(),
  athleteId: z.string(),
});
export type SignInWithConcessionCardArgs = z.infer<
  typeof SignInWithConcessionCardArgsSchema
>;
