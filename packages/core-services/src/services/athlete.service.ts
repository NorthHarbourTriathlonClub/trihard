import { z } from 'zod';

/**
 * Useful for validating IDs that are strings
 *
 * During CRUD operations, we must use an ID that's
 * not an empty string, and does not contain any
 * space characters, because our database doesn't
 * accept IDs with the above attributes in the first
 * place, therefore we need to validate the IDs before
 * we make a trip to the database to save costs
 */
export const IdSchema = z
  .string()
  .min(2, { message: `IDs must contain more than 2 characters` })
  .regex(/^\S*$/, `IDs must not contain spaces`);

export const SignInToTrainingArgsSchema = z.object({
  athleteId: IdSchema,
  trainingSessionId: IdSchema,
});
export type SignInToTrainingArgs = z.infer<typeof SignInToTrainingArgsSchema>;
export const signInToTraining = (args: SignInToTrainingArgs) => {
  return;
};
