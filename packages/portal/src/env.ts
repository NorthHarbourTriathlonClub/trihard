import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'test', 'production']),
    CLERK_SECRET_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },
  runtimeEnv: {
    // server-side
    DATABASE_URL: process.env['DATABASE_URL'],
    NODE_ENV: process.env['NODE_ENV'],
    CLERK_SECRET_KEY: process.env['CLERK_SECRET_KEY'],

    // client-side
    NEXT_PUBLIC_APP_URL: process.env['NEXT_PUBLIC_APP_URL'],
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env['NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
  },
  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
});
