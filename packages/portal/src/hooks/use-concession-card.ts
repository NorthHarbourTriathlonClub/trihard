import { ConcessionCardFindManyArgs } from '@/schemas/find-many-concession-cards';
import { api } from '@/utils/api';

export const useConcessionCards = (args: ConcessionCardFindManyArgs) => {
  const { data, isLoading, error } =
    api.concessionCardRoutes.findMany.useQuery(args);
  return {
    data,
    isLoading,
    error,
  };
};
