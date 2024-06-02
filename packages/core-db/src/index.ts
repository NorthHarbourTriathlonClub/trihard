import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

export * from './generated/zod-prisma-types/index';
