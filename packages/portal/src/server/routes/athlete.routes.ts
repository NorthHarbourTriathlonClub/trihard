import { prisma } from '@/server/db';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';

export const AthleteCreateArgsSchema = z.object({
  data: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
  }),
});
export const AthleteFindManyArgsSchema = z.object({
  take: z.number(),
  skip: z.number().optional(),
});

// routes
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
