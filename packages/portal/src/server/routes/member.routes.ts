import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';

export const CreateMemberSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});
export const memberRoutes = createTRPCRouter({
  createMember: publicProcedure
    .input(CreateMemberSchema)
    .output(CreateMemberSchema)
    .mutation(async ({ input }) => {
      return input;
    }),
});
