import { useRouter } from 'next/router';
import { Button } from '@nextui-org/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import { api } from '@/utils/api';
import { SkeletonCard } from '@/components/SkeletonCard';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { useEffect, useState } from 'react';
import { isAvailable } from '@/utils/helpers';
import { UpdateAthleteForm } from '@/features/forms/update-athlete-form';
import { AthleteUpdateInput } from '@/schemas/update-athlete';

const EditAthletePage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const idIsAvailable = isAvailable(id);

  const [initialFormValues, setInitialFormValues] =
    useState<AthleteUpdateInput>();

  const { data, isInitialLoading, isError, error } =
    api.athleteRoutes.findOne.useQuery(
      {
        where: { id },
      },
      {
        enabled: idIsAvailable,
      },
    );

  useEffect(() => {
    if (isAvailable(data)) {
      setInitialFormValues(data as AthleteUpdateInput);
    }
  }, [data]);

  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <Flex mt={20} direction={'column'} w={'90%'}>
          <Flex mb={9}>
            <Button onClick={() => router.back()}>
              <ArrowBackIcon />
            </Button>
          </Flex>
          <Text className={'text-lg font-semibold'} mb={9}>
            Update Athlete Info
          </Text>
          <Spacer />
          {!idIsAvailable || isInitialLoading || data === undefined ? (
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
