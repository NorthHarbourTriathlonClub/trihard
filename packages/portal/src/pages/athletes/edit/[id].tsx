import { useRouter } from 'next/router';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import { api } from '@/utils/api';
import { SkeletonCard } from '@/components/SkeletonCard';
import { useEffect, useState } from 'react';
import { isUnavailable } from '@/utils/helpers';
import { UpdateAthleteForm } from '@/features/forms/update-athlete-form';
import { AthleteUpdateInput } from '@/schemas/update-athlete';

const EditAthletePage = () => {
  const { query } = useRouter();
  const id = query.id as string;
  const idIsUnavailable = isUnavailable(id);

  const [initialFormValues, setInitialFormValues] =
    useState<AthleteUpdateInput>();

  const { data, isInitialLoading, isError, error } =
    api.athleteRoutes.findOne.useQuery(
      {
        where: { id },
      },
      {
        enabled: !idIsUnavailable,
      },
    );

  useEffect(() => {
    if (isInitialLoading === false && data !== undefined && data !== null) {
      setInitialFormValues(data as AthleteUpdateInput);
    }
  }, [data]);

  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <Flex mt={120} direction={'column'} w={'90%'}>
          <Text className={'text-lg font-semibold'} mb={9}>
            Uodate Athlete Info
          </Text>
          <Spacer />
          {idIsUnavailable || isInitialLoading || data === undefined ? (
            <SkeletonCard />
          ) : null}

          {initialFormValues !== undefined ? (
            <UpdateAthleteForm id={id} initialValues={initialFormValues} />
          ) : null}

          {isError ? <p>Error: {JSON.stringify(error.message)}</p> : null}

          <Spacer />
        </Flex>
      </Center>
    </>
  );
};

export default EditAthletePage;
