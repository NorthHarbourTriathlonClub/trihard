import { AthleteFindManyArgs } from '@/schemas/find-many-athletes';
import { api } from '@/utils/api';

export const useAthletes = (args: AthleteFindManyArgs) => {
  const { data, isLoading, error } = api.athleteRoutes.findMany.useQuery(args);
  return {
    data,
    isLoading,
    error,
  };
};
