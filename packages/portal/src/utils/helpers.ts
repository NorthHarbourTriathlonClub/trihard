import { daysOfWeek } from '@/constants/date-time';

export const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
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

// eslint-disable-next-line
export const arrayIsEmpty = <T>(args: T[]): boolean => {
  return args.length === 0;
};
