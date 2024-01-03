import { prisma } from '@/server/db';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { AthleteCreateArgsSchema } from '@/schemas/create-athlete';
import { AthleteFindManyArgsSchema } from '@/schemas/find-many-athletes';

export const athleteRoutes = createTRPCRouter({
  create: publicProcedure
    .input(AthleteCreateArgsSchema)
    .mutation(async ({ input }) => {
      return await prisma.athlete.create(input);
    }),
  findMany: publicProcedure
    .input(AthleteFindManyArgsSchema)
    .query(async ({ input }) => {
      return await prisma.athlete.findMany(input);
    }),
});
