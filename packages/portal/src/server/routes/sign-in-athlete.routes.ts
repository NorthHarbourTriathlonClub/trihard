import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import * as Service from '@/server/services/sign-in-athlete.service';
import { SignInWithConcessionCardArgsSchema } from '@/schemas/sign-in-athlete';

export const signInAthleteRoutes = createTRPCRouter({
  withConcessionCard: publicProcedure
    .input(SignInWithConcessionCardArgsSchema)
    .mutation(async ({ input }) => {
      const result = await Service.signInWithConcessionCard(input);
      if (result.isErr()) throw result.error;
      return result.value;
    }),
});
