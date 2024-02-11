import { z } from 'zod';

export const ConcessionCardCreateInputSchema = z.object({
  cardNumber: z.number(),
  seniority: z.string(),
  paymentAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string(),
  athleteId: z.string(),
  trainingSessionIds: z.string().array().optional(),
  numTrainingsAllowed: z.number(),
  numTrainingsLeft: z.number(),
  issuanceDate: z.date(),
  expiryDate: z.date(),
});
export type ConcessionCardCreateInputSchema = z.infer<
  typeof ConcessionCardCreateInputSchema
>;
