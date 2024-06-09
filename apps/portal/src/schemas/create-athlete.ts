import { z } from 'zod';

export const AthleteCreateInputSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must contain more than 2 characters'),
  lastName: z.string(),
  email: z.string().email('Please provide a valid email'),
  preferredName: z.string().optional(),
  mobile: z.string().optional(),
});
export type AthleteCreateInput = z.infer<typeof AthleteCreateInputSchema>;

export const AthleteCreateArgsSchema = z.object({
  data: AthleteCreateInputSchema,
});
export type AthleteCreateArgs = z.infer<typeof AthleteCreateArgsSchema>;
