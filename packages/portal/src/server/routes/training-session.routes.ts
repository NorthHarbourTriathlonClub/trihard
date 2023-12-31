import { prisma } from '@/server/db';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { TrainingSessionCreateArgsSchema } from '@/schemas/create-training-session';
import { TrainingSessionFindManyArgsSchema } from '@/schemas/find-many-training-sessions';
import { TrainingSessionUpdateArgsSchema } from '@/schemas/update-training-session';
import { FindUnuqueSchema } from '@/schemas/prisma';

export const trainingSessionRoutes = createTRPCRouter({
  create: publicProcedure
    .input(TrainingSessionCreateArgsSchema)
    .mutation(async ({ input }) => {
      return await prisma.trainingSession.create(input);
    }),
  findMany: publicProcedure
    .input(TrainingSessionFindManyArgsSchema)
    .query(async ({ input }) => {
      return await prisma.trainingSession.findMany(input);
    }),
  update: publicProcedure
    .input(TrainingSessionUpdateArgsSchema)
    .mutation(async ({ input }) => {
      return await prisma.trainingSession.update(input);
    }),
  findOne: publicProcedure.input(FindUnuqueSchema).query(async ({ input }) => {
    return await prisma.trainingSession.findUnique(input);
  }),
});
