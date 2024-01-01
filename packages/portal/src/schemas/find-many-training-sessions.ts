import { z } from 'zod';
import { OrderSchema } from '@/schemas/prisma';

export const TrainingSessionFindManyArgsSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
  orderBy: z
    .object({
      createdAt: OrderSchema.optional(),
      updatedAt: OrderSchema.optional(),
      startTime: OrderSchema.optional(),
    })
    .optional(),
});
