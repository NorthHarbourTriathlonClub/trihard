import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { prisma } from '@/server/db';
import { ConcessionCardFindManyArgsSchema } from '@/schemas/find-many-concession-cards';

export const concessionCardRoutes = createTRPCRouter({
  findMany: publicProcedure
    .input(ConcessionCardFindManyArgsSchema)
    .query(async ({ input }) => {
      return await prisma.concessionCard.findMany(input);
    }),
});
