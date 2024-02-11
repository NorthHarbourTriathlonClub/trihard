import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { ConcessionCardFindManyArgsSchema } from '@/schemas/find-many-concession-cards';

export const concessionCardRoutes = createTRPCRouter({
  findMany: publicProcedure
    .input(ConcessionCardFindManyArgsSchema)
    .query(() => {
      return [];
    }),
});
