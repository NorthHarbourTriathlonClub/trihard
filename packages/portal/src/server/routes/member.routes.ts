import { prisma } from '@/server/db';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';

export const MemberCreateArgsSchema = z.object({
  data: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
  }),
});
export const MemberFindManyArgsSchema = z.object({
  take: z.number(),
  skip: z.number().optional(),
});

// routes
export const memberRoutes = createTRPCRouter({
  createMember: publicProcedure
    .input(MemberCreateArgsSchema)
    .mutation(async ({ input }) => {
      return await prisma.member.create(input);
    }),
  findMany: publicProcedure
    .input(MemberFindManyArgsSchema)
    .query(async ({ input }) => {
      return await prisma.member.findMany(input);
    }),
});
