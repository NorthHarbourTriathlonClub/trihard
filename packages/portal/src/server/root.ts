import { athleteRoutes } from '@/server/routes/athlete.routes';
import { signInAthleteRoutes } from '@/server/routes/sign-in-athlete.routes';
import { trainingSessionRoutes } from '@/server/routes/training-session.routes';
import { createTRPCRouter } from '@/server/trpc';
import { concessionCardRoutes } from '@/server/routes/concession-card.routes';

export const appRouter = createTRPCRouter({
  athleteRoutes,
  trainingSessionRoutes,
  signInAthleteRoutes,
  concessionCardRoutes,
});

export type AppRouter = typeof appRouter;
