import { daysOfWeek } from '@/constants/date-time';

/**
 * Takes in a date object, returns string in format of:
 * YYYY-MM-DD
 * @example
 * ```ts
 * const d = formatDateToYYYYMMDD(new Date('2023-01-01'));
 * // d equals '2023-01-01'
 * ```
 */
export const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Takes in a date object, returns string in format of:
 * YYYY-MM-DD (Day of the week)
 * @example
 * ```ts
 * const d = formatDateToYYYYMMDDWithDay(new Date('2023-01-01'));
 * // d equals '2023-01-01 (Sunday)'
 * ```
 */
export const formatDateToYYYYMMDDWithDay = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dayOfWeek = getDayOfWeek(date);
  return `${year}-${month}-${day} (${dayOfWeek})`;
};

export const getDayOfWeek = (date: Date): string => {
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};

export const getTimeOfDay = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const timeString = `${displayHours}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${amOrPm}`;
  return timeString;
};

export const arrayIsEmpty = <T>(args: T[]): boolean => {
  return args.length === 0;
};

// eslint-disable-next-line
export const isUnavailable = (args: any): boolean => {
  return args === undefined || args === null;
};
