import { api } from '@/utils/api';

const Sessions = () => {
  const { data, isLoading, isError } =
    api.trainingSessionRoutes.findMany.useQuery({
      take: 10,
    });
  return (
    <>
      <h1>Sessions Page</h1>
      <p>isLoading: {isLoading}</p>
      <p>isError: {isError}</p>
      <p>Data: {JSON.stringify(data)}</p>
    </>
  );
};

export default Sessions;
