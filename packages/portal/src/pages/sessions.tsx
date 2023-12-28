// import { api } from '@/utils/api';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { TrainingSessionsTable } from '@/features/tables/training-sessions-table';
import { Center, Flex, Spacer } from '@chakra-ui/layout';
import { Button } from '@nextui-org/react';
// import { Spinner } from '@nextui-org/react';

const SessionsPage = () => {
  // const { data, isError, isInitialLoading } =
  //   api.trainingSessionRoutes.findMany.useQuery({
  //     take: 10,
  //   });
  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'95%'}>
        <p>Training Sessions</p>
        <Flex marginY={8}>
          <Spacer />
          <Spacer />
          <Button color={'primary'}>New</Button>
        </Flex>
        <TrainingSessionsTable />
      </Center>
      {/* {isInitialLoading ? <Spinner /> : null}
      {isError ? <p>Error loading data</p> : null}
      <p>Data: {JSON.stringify(data)}</p> */}
    </>
  );
};

export default SessionsPage;
