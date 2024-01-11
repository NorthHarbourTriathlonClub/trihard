import { OrderSchema } from '@/schemas/prisma';
import { z } from 'zod';

export const AthleteFindManyArgsSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
  select: z
    .object({
      id: z.boolean().optional(),
      firstName: z.boolean().optional(),
      lastName: z.boolean().optional(),
      email: z.boolean().optional(),
      preferredName: z.boolean().optional(),
    })
    .optional(),
  orderBy: z
    .object({
      createdAt: OrderSchema.optional(),
      updatedAt: OrderSchema.optional(),
    })
    .optional(),
});
export type AthleteFindManyArgs = z.infer<typeof AthleteFindManyArgsSchema>;
