import { z } from 'zod';

export const ConcessionCardFindManyArgsSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
  where: z
    .object({
      athleteId: z
        .object({
          equals: z.string(),
        })
        .optional(),
      cardNumber: z
        .object({
          equals: z.number(),
        })
        .optional(),
    })
    .optional(),
  select: z
    .object({
      id: z.boolean().optional(),
      cardNumber: z.boolean().optional(),
    })
    .optional(),
});
export type ConcessionCardFindManyArgs = z.infer<
  typeof ConcessionCardFindManyArgsSchema
>;
