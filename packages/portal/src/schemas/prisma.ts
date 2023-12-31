import { z } from 'zod';

export const OrderSchema = z.enum(['asc', 'desc']);
