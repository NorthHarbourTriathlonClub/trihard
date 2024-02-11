import { athleteRoutes } from '@/server/routes/athlete.routes';
import { signInAthleteRoutes } from '@/server/routes/sign-in-athlete.routes';
import { trainingSessionRoutes } from '@/server/routes/training-session.routes';
import { createTRPCRouter } from '@/server/trpc';

export const appRouter = createTRPCRouter({
  athleteRoutes,
  trainingSessionRoutes,
  signInAthleteRoutes,
});

export type AppRouter = typeof appRouter;
