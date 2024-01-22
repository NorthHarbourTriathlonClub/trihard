import { Training } from '@/constants/forms';

export const summerMondaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Monday',
      hour: 6,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Swim',
    trainingLocation: 'Birkenhead Pool',
  },
  {
    time: {
      dayOfWeek: 'Monday',
      hour: 5,
      minute: 0,
      amPm: 'PM',
    },
    trainingType: 'Run',
    trainingLocation: 'Milford Marina Reserve',
  },
];

export const summerTuesdaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Tuesday',
      hour: 6,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Swim',
    trainingLocation: 'Birkenhead Pool',
  },
  {
    time: {
      dayOfWeek: 'Tuesday',
      hour: 5,
      minute: 15,
      amPm: 'PM',
    },
    trainingType: 'Swim',
    trainingLocation: 'Birkenhead Pool',
  },
  {
    time: {
      dayOfWeek: 'Tuesday',
      hour: 6,
      minute: 30,
      amPm: 'PM',
    },
    trainingType: 'Bike',
    trainingLocation: 'Birkenhead',
  },
];

export const summerWednesdaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Wednesday',
      hour: 6,
      minute: 30,
      amPm: 'AM',
    },
    trainingType: 'Swim',
    trainingLocation: 'Takapuna Boating Club',
  },
];

export const summerThursdaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Thursday',
      hour: 6,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Swim',
    trainingLocation: 'Birkenhead Pool',
  },
  {
    time: {
      dayOfWeek: 'Thursday',
      hour: 5,
      minute: 15,
      amPm: 'PM',
    },
    trainingType: 'Swim',
    trainingLocation: 'Birkenhead Pool',
  },
  {
    time: {
      dayOfWeek: 'Thursday',
      hour: 6,
      minute: 30,
      amPm: 'PM',
    },
    trainingType: 'Bike',
    trainingLocation: 'Birkenhead',
  },
];

export const summerSaturdaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Saturday',
      hour: 7,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Triathlon',
    trainingLocation: 'Takapuna Boating Club',
  },
];

export const summerSundaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Sunday',
      hour: 7,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Bike',
    trainingLocation: 'Albany Hill',
  },
  {
    time: {
      dayOfWeek: 'Sunday',
      hour: 8,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Bike',
    trainingLocation: 'Sunset Road',
  },
];

export const summerTrainingWeeklySchedule: Training[] = [
  ...summerMondaySessions,
  ...summerTuesdaySessions,
  ...summerWednesdaySessions,
  ...summerThursdaySessions,
  ...summerSaturdaySessions,
  ...summerSundaySessions,
];
