import { z } from 'zod';

export const OrderSchema = z.enum(['asc', 'desc']);

export const WhereUniuqeSchema = z.object({
  id: z.string(),
});

export const FindUniqueSchema = z.object({
  where: WhereUniuqeSchema,
});
