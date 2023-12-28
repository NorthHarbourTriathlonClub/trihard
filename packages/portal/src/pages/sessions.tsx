import { api } from '@/utils/api';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { Spinner } from '@nextui-org/react';

const SessionsPage = () => {
  const { data, isError, isInitialLoading } =
    api.trainingSessionRoutes.findMany.useQuery({
      take: 10,
    });
  return (
    <>
      <NavBarResponsive />
      <h1>Sessions Page</h1>
      {isInitialLoading ? <Spinner /> : null}
      {isError ? <p>Error loading data</p> : null}
      <p>Data: {JSON.stringify(data)}</p>
    </>
  );
};

export default SessionsPage;
