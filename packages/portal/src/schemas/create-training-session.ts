import { z } from 'zod';

/**
 * Used for passing data to API / tRPC router
 */
export const TrainingSessionCreateInputSchema = z.object({
  type: z.string({ required_error: 'Please provided a value' }),
  location: z.string({ required_error: 'Please provided a value' }),
  coachFullName: z.string({ required_error: 'Please provided a value' }),
  startTime: z.date({ required_error: 'Please provided a value' }),
});
export type TrainingSessionCreateInput = z.infer<
  typeof TrainingSessionCreateInputSchema
>;

export const TrainingSessionCreateArgsSchema = z.object({
  data: TrainingSessionCreateInputSchema,
});

/**
 * Used for passing data for form-validation
 */
export const FormTrainingSessionCreateInputSchema = z.object({
  type: z.string({ required_error: 'Please provided a value' }),
  location: z.string({ required_error: 'Please provided a value' }),
  coachFullName: z.string({ required_error: 'Please provided a value' }),

  // Broken-down fields for 'startTime'
  date: z.date({ required_error: 'Please specify the date of the training' }),
  timeOfDay: z.string({
    required_error: 'Please specify the time of training',
  }),
  amOrPm: z.string({
    required_error: 'Please indicate whether the training is in AM or PM',
  }),
});
export type FormTrainingSessionCreateInput = z.infer<
  typeof FormTrainingSessionCreateInputSchema
>;

/**
 * Converts the broken-down payload FormTrainingSessionCreateInputSchema
 * back into TrainingSessionCreateInputSchema, so that
 * we combine the broken-down fields of 'startTime'
 *
 * In essence, the values of `date, timeOfDay, amOrPm` from
 * `FormTrainingSessionCreateInputSchema` will be used to construct a
 * single `startTime` for `TrainingSessionCreateInputSchema`
 */
export const formPayloadToApiPayload = (
  args: FormTrainingSessionCreateInput,
): TrainingSessionCreateInput => {
  const { type, location, coachFullName, date, timeOfDay, amOrPm } = args;

  const startTime = mergeTimeAmPmIntoDate({ date, timeOfDay, amOrPm });

  return {
    type,
    location,
    coachFullName,
    startTime,
  };
};

export type MergeTimeAmPmIntoDateArgs = {
  date: Date;
  timeOfDay: string;
  amOrPm: string;
};
/**
 * Mapping the values of `date, timeOfDay, amOrPm` from
 * `FormTrainingSessionCreateInputSchema` to construct a
 * single `startTime` for `TrainingSessionCreateInputSchema`
 *
 * @example
 * ```ts
 * const args: MergeTimeAmPmIntoDateArgs = {
 *   date: new Date('2023-01-01'),
 *   timeOfDay: '10:45',
 *   amOrPm: 'PM',
 * };
 * mergeTimeAmPmIntoDate(args);
 * // returns `Sun Jan 01 2023 22:45:00 GMT+1300 (New Zealand Daylight Time)`
 * ```
 */
export const mergeTimeAmPmIntoDate = (args: MergeTimeAmPmIntoDateArgs) => {
  const { date, timeOfDay, amOrPm } = args;
  // Parse the time string to get hours and minutes
  const [hoursString, minutesString] = timeOfDay.split(':');
  let hours = parseInt(hoursString, 10);

  // Adjust hours for PM if necessary
  if (amOrPm.toLowerCase() === 'pm' && hours < 12) {
    hours += 12;
  }

  // Create a new Date object with the specified date and time
  const newDate = new Date(date);
  newDate.setHours(hours, parseInt(minutesString, 10), 0, 0);

  return newDate;
};
