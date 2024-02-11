import { useRouter } from 'next/router';
import { ArrowBackIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Center, Flex } from '@chakra-ui/layout';
import { Button } from '@nextui-org/react';
import { SkeletonCards } from '@/components/SkeletonCards';
import * as H from '@/utils/helpers';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { api } from '@/utils/api';
import { AthleteCreateModal } from '@/features/modals/athlete-create-modal';
import { AthleteCard } from '@/features/cards/athlete-card';

const AthletesPage = () => {
  const router = useRouter();
  const { data, isError, isInitialLoading, error } =
    api.athleteRoutes.findMany.useQuery({
      orderBy: {
        createdAt: 'desc',
      },
    });
  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <p className={'text-lg font-semibold'}>Athletes</p>
        <Flex marginY={8} gap={8}>
          <Button onClick={() => router.back()}>
            <ArrowBackIcon />
          </Button>
          <AthleteCreateModal />
        </Flex>
        {isInitialLoading ? (
          <Center flexDirection={'column'} width={'90%'} gap={9}>
            <SkeletonCards count={3} />
          </Center>
        ) : null}

        {isError ? <p>Error: {JSON.stringify(error.message)}</p> : null}

        {data !== undefined && H.arrayIsEmpty(data) ? (
          <p>No Athletes Found</p>
        ) : null}

        {data !== undefined && data.length > 0 && isInitialLoading === false ? (
          <Flex direction={'column'} gap={9} mb={9}>
            {/* {JSON.stringify(data)} */}
            {data.map((d, _i) => (
              <AthleteCard key={_i} data={d} />
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

export default AthletesPage;
