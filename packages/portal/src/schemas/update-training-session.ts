import { AmPm } from '@/constants/forms';
import { mergeTimeAmPmIntoDate } from '@/schemas/create-training-session';
import { WhereUniuqeSchema } from '@/schemas/prisma';
import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingSessionUpdateInputSchema = z.object({
  type: z.string({ required_error: 'Please provided a value' }),
  location: z.string({ required_error: 'Please provided a value' }),
  coachFullName: z.string({ required_error: 'Please provided a value' }),
  startTime: z.date({ required_error: 'Please provided a value' }),
});
export type TrainingSessionUpdateInput = z.infer<
  typeof TrainingSessionUpdateInputSchema
>;

export const TrainingSessionUpdateArgsSchema = z.object({
  where: WhereUniuqeSchema,
  data: TrainingSessionUpdateInputSchema,
});

export const FormTrainingSessionUpdateInputSchema = z.object({
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
export type FormTrainingSessionUpdateInput = z.infer<
  typeof FormTrainingSessionUpdateInputSchema
>;

export const formPayloadToApiPayload = (
  args: FormTrainingSessionUpdateInput,
): TrainingSessionUpdateInput => {
  const { type, location, coachFullName, date, timeOfDay, amOrPm } = args;

  const startTime = mergeTimeAmPmIntoDate({ date, timeOfDay, amOrPm });

  return {
    type,
    location,
    coachFullName,
    startTime,
  };
};

export const apiPayloadToFormPayload = (
  args: Prisma.TrainingSessionUpdateInput,
): FormTrainingSessionUpdateInput => {
  const { type, location, coachFullName, startTime, ...rest } = args;
  const { date, timeOfDay, amOrPm } = extractTimeAmPmFromDate(
    startTime as Date,
  );
  return {
    type: type as string,
    location: location as string,
    coachFullName: coachFullName as string,
    date,
    timeOfDay,
    amOrPm,
    ...rest,
  };
};

export type BrokenDownDate = {
  date: Date;
  timeOfDay: string;
  amOrPm: AmPm;
};
export const extractTimeAmPmFromDate = (date: Date) => {
  const extractedDate = new Date(date.toDateString());

  // Extracting timeOfDay
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const extractedTimeOfDay = `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;

  // Extracting amOrPm
  const amOrPm = hours < 12 ? 'AM' : 'PM';

  return {
    date: extractedDate,
    timeOfDay: extractedTimeOfDay,
    amOrPm: amOrPm as AmPm,
  };
};
