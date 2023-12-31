import { prisma } from '@/server/db';
import { TrainingSessionCreateArgsSchema } from '@/schemas/create-training-session';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { TrainingSessionFindManyArgsSchema } from '@/schemas/find-many-training-sessions';

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
