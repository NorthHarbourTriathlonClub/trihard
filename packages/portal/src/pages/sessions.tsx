import { PlusSquareIcon } from '@chakra-ui/icons';
import { Center, Flex } from '@chakra-ui/layout';
import { Button } from '@nextui-org/react';
import { TrainingSessionFilterModal } from '@/features/modals/training-session-filter-modal';
import { TrainingSessionCreaeModal } from '@/features/modals/training-session-create-modal';
import { SkeletonCards } from '@/components/SkeletonCards';
import * as H from '@/utils/helpers';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { TrainingSessionCard } from '@/features/cards/training-session-card';
import { api } from '@/utils/api';

const SessionsPage = () => {
  const { data, isError, isInitialLoading, error } =
    api.trainingSessionRoutes.findMany.useQuery({
      take: 5,
    });
  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <p className='text-lg font-semibold'>Training Sessions</p>
        <Flex marginY={8} gap={8}>
          <TrainingSessionFilterModal />
          <TrainingSessionCreaeModal />
        </Flex>
        {isInitialLoading ? (
          <Center flexDirection={'column'} width={'90%'} gap={9}>
            <SkeletonCards count={3} />
          </Center>
        ) : null}

        {isError ? <p>Error: {JSON.stringify(error.message)}</p> : null}

        {data !== undefined && H.arrayIsEmpty(data) ? (
          <p>No Training Sessions Found</p>
        ) : null}

        {data !== undefined && data.length > 0 && isInitialLoading === false ? (
          <Flex direction={'column'} gap={9} mb={9}>
            {data.map((d, _i) => (
              <TrainingSessionCard key={_i} data={d} />
            ))}
          </Flex>
        ) : null}

        {data !== undefined && H.arrayIsEmpty(data) === false ? (
          <Flex mb={9}>
            <Button variant={'bordered'}>
              <PlusSquareIcon /> Load More
            </Button>
          </Flex>
        ) : null}
      </Center>
    </>
  );
};

export default SessionsPage;
