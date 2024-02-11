export const trainingTypes = ['Swim', 'Bike', 'Run', 'Zwift', 'Brick'] as const;
export type Training = (typeof trainingTypes)[number];

export const trainingLocations = [
  'Takapuna Boating Club',
  'Takapuna Athletic Club',
  'Birkenhead Pool',
  'Milford Marina Reserve',
  'Albany Hill',
  'Sunset Road',
  'Online',
] as const;
export type TrainingLocation = (typeof trainingLocations)[number];

export const coaches = [
  'Stephen Farrell',
  'Laura Quilter',
  'Billy Bowman',
  'Mike Trees',
  'Jane Powell',
  'Simone Ackermann',
] as const;

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Saturday',
  'Sunday',
] as const;
export type DayOfWeek = (typeof daysOfWeek)[number];

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

export const paymentMethods = ['Bank Transfer', 'Cash'] as const;
export type PaymentMethod = (typeof paymentMethods)[number];

export const paymentStatuses = ['Pending', 'Received'] as const;
export type PaymentStatus = (typeof paymentStatuses)[number];

export type WeeklySession = {
  day: DayOfWeek;
  startTime: TimeOfDay;
  amOrPm: AmPm;
  type: Training;
  location: TrainingLocation;
};

export const seniorities = ['Junior', 'Senior'] as const;
export type Seniority = (typeof seniorities)[number];

export type Pricing = {
  seniority: Seniority;
  amount: number;
};

/** Concession Card */
export const consessionCardPrices: Pricing[] = [
  {
    seniority: 'Junior',
    amount: 90,
  },
  {
    seniority: 'Senior',
    amount: 110,
  },
];

/** Fortnightly unlimited sessions */
export const FortnightlySessionsPrices: Pricing[] = [
  {
    seniority: 'Junior',
    amount: 65,
  },
  {
    seniority: 'Senior',
    amount: 80,
  },
];

export type CasualSessionPricing = {
  seniority?: Seniority;
  amount: number;
  membership: 'Member' | 'Non-member';
};

/** Casual Individual Sessions */
export const casualIndividualSessionPrices: CasualSessionPricing[] = [
  {
    seniority: 'Junior',
    amount: 12,
    membership: 'Member',
  },
  {
    seniority: 'Senior',
    amount: 15,
    membership: 'Member',
  },
  {
    amount: 20,
    membership: 'Non-member',
  },
];

/** Casual Saturday Sessions */
export const casualSaturdaySessionPrices: CasualSessionPricing[] = [
  {
    membership: 'Member',
    seniority: 'Senior',
    amount: 25,
  },
  {
    membership: 'Member',
    seniority: 'Junior',
    amount: 20,
  },
  {
    membership: 'Non-member',
    amount: 30,
  },
];

export const summerWeeklySessions: WeeklySession[] = [
  // Monday sessions
  {
    day: 'Monday',
    startTime: '6:00',
    amOrPm: 'AM',
    type: 'Swim',
    location: 'Birkenhead Pool',
  },
  {
    day: 'Monday',
    startTime: '5:00',
    amOrPm: 'PM',
    type: 'Run',
    location: 'Takapuna Athletic Club',
  },

  // Tuesday sessions
  {
    day: 'Tuesday',
    startTime: '6:00',
    amOrPm: 'AM',
    type: 'Swim',
    location: 'Birkenhead Pool',
  },
  {
    day: 'Tuesday',
    startTime: '5:15',
    amOrPm: 'PM',
    type: 'Swim',
    location: 'Birkenhead Pool',
  },
  {
    day: 'Tuesday',
    startTime: '6:30',
    amOrPm: 'PM',
    type: 'Bike',
    location: 'Birkenhead Pool',
  },

  // Wednesday Sessions
  {
    day: 'Wednesday',
    startTime: '6:30',
    amOrPm: 'AM',
    type: 'Swim',
    location: 'Takapuna Boating Club',
  },

  // Thursday Sessions
  {
    day: 'Thursday',
    startTime: '6:00',
    amOrPm: 'AM',
    type: 'Swim',
    location: 'Birkenhead Pool',
  },
  {
    day: 'Thursday',
    startTime: '5:15',
    amOrPm: 'PM',
    type: 'Swim',
    location: 'Birkenhead Pool',
  },
  {
    day: 'Thursday',
    startTime: '6:30',
    amOrPm: 'PM',
    type: 'Bike',
    location: 'Online',
  },

  // Saturday Sessions
  {
    day: 'Saturday',
    startTime: '7:00',
    amOrPm: 'AM',
    type: 'Brick',
    location: 'Takapuna Boating Club',
  },

  // Sunday Sessions
  {
    day: 'Sunday',
    startTime: '7:00',
    amOrPm: 'AM',
    type: 'Bike',
    location: 'Albany Hill',
  },
  {
    day: 'Sunday',
    startTime: '8:00',
    amOrPm: 'AM',
    type: 'Bike',
    location: 'Sunset Road',
  },
];
