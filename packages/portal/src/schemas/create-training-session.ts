import { z } from 'zod';

export const TrainingSessionCreateInputSchema = z.object({
  type: z.string({ required_error: 'Please provided a value' }),
  location: z.string({ required_error: 'Please provided a value' }),
  coachFullName: z.string({ required_error: 'Please provided a value' }),
  startTime: z.date({ required_error: 'Please provided a value' }),
  finishTime: z.date().optional(),
  createdBy: z.string().optional(),
});
export type TrainingSessionCreateInput = z.infer<
  typeof TrainingSessionCreateInputSchema
>;

export const TrainingSessionCreateArgsSchema = z.object({
  data: TrainingSessionCreateInputSchema,
});
