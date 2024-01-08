import { z } from 'zod';

export const ConcessionCardFindManyArgsSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
  where: z.object({
    athleteId: z.object({
      equals: z.string(),
    }),
  }),
});
export type ConcessionCardFindManyArgs = z.infer<
  typeof ConcessionCardFindManyArgsSchema
>;
