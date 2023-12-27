import { memberRoutes } from '@/server/routes/member.routes';
import { createTRPCRouter } from '@/server/trpc';

export const appRouter = createTRPCRouter({
  memberRoutes,
});

export type AppRouter = typeof appRouter;
