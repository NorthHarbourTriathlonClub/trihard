import { prisma } from '@/server/db';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';

export const TrainingSessionCreateArgsSchema = z.object({
  data: z.object({
    coachFullName: z.string(),
    type: z.string(),
    location: z.string(),
    startTime: z.date(),
  }),
});
export const TrainingSessionFindManyArgsSchema = z.object({
  take: z.number(),
  skip: z.number().optional(),
});

// routes
export const trainingSessionRoutes = createTRPCRouter({
  createTrainingSession: publicProcedure
    .input(TrainingSessionCreateArgsSchema)
    .mutation(async ({ input }) => {
      return await prisma.trainingSession.create(input);
    }),
  findMany: publicProcedure
    .input(TrainingSessionFindManyArgsSchema)
    .query(async ({ input }) => {
      return await prisma.trainingSession.findMany(input);
    }),
});