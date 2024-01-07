import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import * as SignInAthleteService from '@/server/services/sign-in-athlete.service';
import { SignInWithConcessionCardArgsSchema } from '@/server/services/sign-in-athlete.service';

export const signInAthleteRoutes = createTRPCRouter({
  withConcessionCard: publicProcedure
    .input(SignInWithConcessionCardArgsSchema)
    .mutation(async ({ input }) => {
      const result = await SignInAthleteService.signInWithConcessionCard(input);
      if (result.isErr()) throw result.error;
      return result.value;
    }),
});
