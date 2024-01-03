import { useEffect, useState } from 'react';
import { TrainingSession } from '@prisma/client';
import { useRouter } from 'next/router';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Center, Flex } from '@chakra-ui/layout';
import { Button, Chip } from '@nextui-org/react';
import { SkeletonCards } from '@/components/SkeletonCards';
import * as H from '@/utils/helpers';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { api } from '@/utils/api';
import { AthleteCard } from '@/features/cards/athlete-card';
import { isUnavailable } from '@/utils/helpers';
import { SignInAthleteModal } from '@/features/modals/sign-in-athlete-modal';
import { TrainingSessionInfoModal } from '@/features/modals/training-session-info-modal';

const SessionAthletesPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const idIsUnavailable = isUnavailable(id);

  const [trainingSession, setTrainingSession] = useState<TrainingSession>();
  const {
    data: dataTrainingSession,
    isInitialLoading: isInitialLoadingTrainingSession,
    error: errorTrainingSession,
  } = api.trainingSessionRoutes.findOne.useQuery(
    {
      where: { id },
    },
    {
      enabled: !idIsUnavailable,
    },
  );

  // update local trainingSession whenever id becomes available
  useEffect(() => {
    if (!isUnavailable(dataTrainingSession)) {
      setTrainingSession(dataTrainingSession as TrainingSession);
    }
  }, [dataTrainingSession]);

  const { data, isError, isInitialLoading, error } =
    api.athleteRoutes.findManyByIds.useQuery(
      {
        where: {
          id: {
            in: trainingSession?.athleteIds as string[],
          },
        },
      },
      {
        enabled: trainingSession?.athleteIds !== undefined,
      },
    );
  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <p className={'text-lg font-semibold'}>
          Athletes who attended this training
        </p>
        <Flex marginY={8} gap={8}>
          <Button onClick={() => router.back()}>
            <ArrowBackIcon />
          </Button>
          <TrainingSessionInfoModal data={trainingSession as TrainingSession} />
        </Flex>
        <Flex mb={8}>
          <SignInAthleteModal />
        </Flex>

        {isInitialLoadingTrainingSession || isInitialLoading ? (
          <Center flexDirection={'column'} width={'90%'} gap={9}>
            <SkeletonCards count={3} />
          </Center>
        ) : null}

        {errorTrainingSession ? (
          <p>Error: {JSON.stringify(errorTrainingSession.message)}</p>
        ) : null}

        {isError ? <p>Error: {JSON.stringify(error.message)}</p> : null}

        {data !== undefined && H.arrayIsEmpty(data) ? (
          <Chip color={'warning'}>
            No Athletes Found for this training session
          </Chip>
        ) : null}

        {data !== undefined && data.length > 0 && isInitialLoading === false ? (
          <Flex direction={'column'} gap={9} mb={9}>
            {data.map((d, _i) => (
              <AthleteCard key={_i} data={d} />
            ))}
          </Flex>
        ) : null}
      </Center>
    </>
  );
};

export default SessionAthletesPage;
