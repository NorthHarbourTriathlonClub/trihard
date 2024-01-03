import { athleteRoutes } from '@/server/routes/athlete.routes';
import { trainingSessionRoutes } from '@/server/routes/training-session.routes';
import { createTRPCRouter } from '@/server/trpc';

export const appRouter = createTRPCRouter({
  athleteRoutes,
  trainingSessionRoutes,
});

export type AppRouter = typeof appRouter;
