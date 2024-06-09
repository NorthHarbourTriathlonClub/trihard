import { DayOfWeek } from '@/constants/date-time';

export const trainingTypes = [
  'Swim',
  'Bike',
  'Run',
  'Triathlon',
  'Swim + Bike',
  'Swim + Run',
  'Bike + Run',
  'Zwift',
] as const;

export const trainingLocations = [
  'Takapuna Boating Club',
  'Birkenhead Pool',
  'Milford Marina Reserve',
  'Albany Hill',
  'Sunset Road',
  'Online',
] as const;

export const coaches = [
  'Stephen Farrell',
  'Laura Quilter',
  'Billy Bowman',
  'Mike Trees',
  'Jane Powell',
  'Simone Ackermann',
] as const;

export const trainingStartTimes = [
  // monday
  'Monday @ 6:00 AM',
  'Monday @ 5:00 PM',

  // tuesday
  'Tuesday @ 6:00 AM',
  'Tuesday @ 5:15 PM',
  'Tuesday @ 6:30 PM',

  // wednesday
  'Wednesday @ 6:00 AM',
  'Wednesday @ 6:15 PM',

  // thursday
  'Thursday @ 6:00 AM',
  'Thursday @ 5:15 PM',
  'Thursday @ 6:30 PM',

  // saturday
  'Saturday @ 7:00 AM',

  // sunday
  'Sunday @ 7:00 AM',
  'Sunday @ 8:00 AM',
];

export const amPm = ['AM', 'PM'] as const;
export type AmPm = (typeof amPm)[number];

export const timesOfDay = [
  '5:00',
  '5:15',
  '6:00',
  '6:15',
  '6:30',
  '7:00',
  '8:00',
] as const;
export type TimeOfDay = (typeof timesOfDay)[number];

export type TrainingSchedule = `${DayOfWeek} @ ${TimeOfDay} ${AmPm}`;

export const paymentMethods = ['Bank Transfer', 'Cash'] as const;
export type PaymentMethod = (typeof paymentMethods)[number];
