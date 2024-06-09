import { z } from 'zod';

export const SignInWithConcessionCardArgsSchema = z.object({
  trainingSessionId: z.string(),
  athleteId: z.string(),
  cardNumber: z.number({
    description: `This field refers to cardNumber of ConcessionCard collection/Model`,
    invalid_type_error: `Concession Card Number needs to a number`,
  }),
});
export type SignInWithConcessionCardArgs = z.infer<
  typeof SignInWithConcessionCardArgsSchema
>;
