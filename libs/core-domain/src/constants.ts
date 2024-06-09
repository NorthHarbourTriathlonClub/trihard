import { AmPm } from '@core/db';

export const nzMobileNumberprefix = [
  `021`,
  `022`,
  `026`,
  `027`,
  `028`,
] as const;

export const emailProviders = [
  `gmail.com`,
  `outlook.com`,
  `protonmail.com`,
  `yahoo.com`,
] as const;

export const trainingTypes = [
  `Swim`,
  `Bike`,
  `Run`,
  `Brick`,
  `Swim + Bike`,
  `Swim + Run`,
  `Bike + Run`,
  `Zwift`,
] as const;
export type TrainingType = (typeof trainingTypes)[number];

export const trainingLocations = [
  `Takapuna Boating Club`,
  `Takapuna Athletic Club`,
  `Birkenhead Pool`,
  `Milford Marina Reserve`,
  `Albany Hill`,
  `Sunset Road`,
  `Online`,
] as const;
export type TrainingLocation = (typeof trainingLocations)[number];

export const coachesDemo = [
  `Steven Farrell`,
  `Lauren Quilter`,
  `Baron Bowman`,
  `Sophia Ackerman`,
] as const;

export const coaches = [
  `Stephen Farrell`,
  `Laura Quilter`,
  `Billy Bowman`,
  `Mike Trees`,
  `Jane Powell`,
  `Simone Ackermann`,
] as const;
export type Coach = (typeof coaches)[number];

/**
 * The ORDER of strings in this array is VERY important
 *
 * We rely on their indeces to look-up the english-version
 * of day of week using numbers ranging from 0-6
 */
export const daysOfWeek = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
] as const;
export type DayOfWeek = (typeof daysOfWeek)[number];

export const seasons = [`Summer`, `Winter`] as const;
export type Season = (typeof seasons)[number];

/** Strongly typed variation of `TrainingSession` from db schema */
export type Training = {
  date?: Date;
  dayOfWeek: DayOfWeek;
  type: TrainingType;
  location: TrainingLocation;
  coachFullName?: Coach;
  hour: number;
  minute: number;
  amPm: AmPm;
};

/** Weekly training schedule by season */
type TrainingSchedule = Record<Season, Training[]>;

/** Used for creating training sessions in bulk */
export const weeklyTrainingSchedule: TrainingSchedule = {
  Summer: [
    // monday
    {
      dayOfWeek: `Monday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Monday`,
      type: `Run`,
      location: `Takapuna Athletic Club`,
      hour: 5,
      minute: 0,
      amPm: `PM`,
    },

    // tuesday
    {
      dayOfWeek: `Tuesday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Tuesday`,
      type: `Bike`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 30,
      amPm: `PM`,
    },

    // wednesday
    {
      dayOfWeek: `Wednesday`,
      type: `Swim`,
      location: `Takapuna Boating Club`,
      hour: 6,
      minute: 30,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Wednesday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `PM`,
    },

    // thursday
    {
      dayOfWeek: `Thursday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Thursday`,
      type: `Bike`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 30,
      amPm: `PM`,
    },

    // friday - no trainings

    // sataurday
    {
      dayOfWeek: `Saturday`,
      type: `Brick`,
      location: `Takapuna Boating Club`,
      hour: 7,
      minute: 0,
      amPm: `AM`,
    },

    // sunday
    {
      dayOfWeek: `Sunday`,
      type: `Bike`,
      location: `Albany Hill`,
      hour: 7,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Sunday`,
      type: `Bike`,
      location: `Sunset Road`,
      hour: 8,
      minute: 0,
      amPm: `AM`,
    },
  ],
  Winter: [
    // monday
    {
      dayOfWeek: `Monday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Monday`,
      type: `Run`,
      location: `Takapuna Athletic Club`,
      hour: 5,
      minute: 0,
      amPm: `PM`,
    },

    // tuesday
    {
      dayOfWeek: `Tuesday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Tuesday`,
      type: `Bike`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 30,
      amPm: `PM`,
    },

    // wednesday
    {
      dayOfWeek: `Wednesday`,
      type: `Swim`,
      location: `Takapuna Boating Club`,
      hour: 6,
      minute: 30,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Wednesday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `PM`,
    },

    // thursday
    {
      dayOfWeek: `Thursday`,
      type: `Swim`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Thursday`,
      type: `Bike`,
      location: `Birkenhead Pool`,
      hour: 6,
      minute: 30,
      amPm: `PM`,
    },

    // friday - no trainings

    // sataurday
    {
      dayOfWeek: `Saturday`,
      type: `Brick`,
      location: `Birkenhead Pool`,
      hour: 7,
      minute: 0,
      amPm: `AM`,
    },

    // sunday
    {
      dayOfWeek: `Sunday`,
      type: `Bike`,
      location: `Albany Hill`,
      hour: 7,
      minute: 0,
      amPm: `AM`,
    },
    {
      dayOfWeek: `Sunday`,
      type: `Bike`,
      location: `Sunset Road`,
      hour: 8,
      minute: 0,
      amPm: `AM`,
    },
  ],
};
