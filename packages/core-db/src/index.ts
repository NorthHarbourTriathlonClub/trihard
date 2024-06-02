import { Prisma, PrismaClient } from '@prisma/client';

/**
 * exports all type definitions that '@prisma/client' contains (but does not export)
 *
 * Purpose: allows apps & packages that use '@core/db' to access the same
 * types provided by '@prisma/client'
 */
export * from '../node_modules/@prisma/client/index';

export { Prisma, PrismaClient };
