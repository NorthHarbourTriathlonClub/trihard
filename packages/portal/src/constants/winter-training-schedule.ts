import { Training } from '@/constants/forms';

export const winterMondaySessions: Training[] = [
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

export const winterTuesdaySessions: Training[] = [
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

export const winterWednesdaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Wednesday',
      hour: 6,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Swim',
    trainingLocation: 'Birkenhead Pool',
  },
];

export const winterThursdaySessions: Training[] = [
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

export const winterSaturdaySessions: Training[] = [
  {
    time: {
      dayOfWeek: 'Saturday',
      hour: 7,
      minute: 0,
      amPm: 'AM',
    },
    trainingType: 'Triathlon',
    trainingLocation: 'Birkenhead Pool',
  },
];

export const winterSundaySessions: Training[] = [
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

export const winterTrainingWeeklySchedule: Training[] = [
  ...winterMondaySessions,
  ...winterTuesdaySessions,
  ...winterWednesdaySessions,
  ...winterThursdaySessions,
  ...winterSaturdaySessions,
  ...winterSundaySessions,
];
