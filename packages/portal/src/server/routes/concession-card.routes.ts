import { CreateConcessionCardForAthleteArgsSchema } from '@/server/services/concession-card.service';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import * as Service from '@/server/services/concession-card.service';

export const concessionCardRoutes = createTRPCRouter({
  createConcessionCardForAthlete: publicProcedure
    .input(CreateConcessionCardForAthleteArgsSchema)
    .mutation(async ({ input }) => {
      const result = await Service.createConcessionCardForAthlete(input);
      if (result.isErr()) throw result.error;
      return result.value;
    }),
});
