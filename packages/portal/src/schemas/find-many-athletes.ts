import { OrderSchema } from '@/schemas/prisma';
import { z } from 'zod';

export const AthleteFindManyArgsSchema = z.object({
  take: z.number(),
  skip: z.number().optional(),
  orderBy: z
    .object({
      createdAt: OrderSchema.optional(),
      updatedAt: OrderSchema.optional(),
    })
    .optional(),
});
