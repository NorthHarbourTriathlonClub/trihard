import { memberRoutes } from '@/server/routes/member.routes';
import { trainingSessionRoutes } from '@/server/routes/training-session.routes';
import { createTRPCRouter } from '@/server/trpc';

export const appRouter = createTRPCRouter({
  memberRoutes,
  trainingSessionRoutes,
});

export type AppRouter = typeof appRouter;
