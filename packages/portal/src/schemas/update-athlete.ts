import { WhereUniuqeSchema } from '@/schemas/prisma';
import { z } from 'zod';

export const AthleteUpdateInputSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must contain more than 2 characters'),
  lastName: z.string().min(2, 'Last name must contain more than 2 characters'),
  email: z.string().email('Please provide a valid email'),
  preferredName: z.string().optional(),
  mobile: z.string().optional(),
});
export type AthleteUpdateInput = z.infer<typeof AthleteUpdateInputSchema>;

export const AthleteUpdateArgsSchema = z.object({
  where: WhereUniuqeSchema,
  data: AthleteUpdateInputSchema,
});
export type AthleteUpdateArgs = z.infer<typeof AthleteUpdateArgsSchema>;
