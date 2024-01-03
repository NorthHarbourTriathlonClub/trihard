import { Athlete } from '@prisma/client';

export const hasPreferredName = (args: Athlete) => {
  return (
    args.preferredName?.length !== undefined && args.preferredName?.length > 0
  );
};
