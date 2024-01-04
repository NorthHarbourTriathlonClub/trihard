import { useRouter } from 'next/router';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { UpdateTrainingSessionForm } from '@/features/forms/update-training-session-form';
import { Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import { api } from '@/utils/api';
import { SkeletonCard } from '@/components/SkeletonCard';
import {
  FormTrainingSessionUpdateInput,
  apiPayloadToFormPayload,
} from '@/schemas/update-training-session';
import { useEffect, useState } from 'react';
import { isUnavailable } from '@/utils/helpers';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@nextui-org/react';

const EditTrainingSession = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const idIsUnavailable = isUnavailable(id);

  const [initialFormValues, setInitialFormValues] =
    useState<FormTrainingSessionUpdateInput>();

  const { data, isInitialLoading, isError, error } =
    api.trainingSessionRoutes.findOne.useQuery(
      {
        where: { id },
      },
      {
        enabled: !idIsUnavailable,
      },
    );

  useEffect(() => {
    if (isInitialLoading === false && data !== undefined && data !== null) {
      setInitialFormValues(() => apiPayloadToFormPayload(data));
    }
  }, [data]);

  return (
    <>
      <NavBarResponsive />

      <Center flexDirection={'column'} width={'100%'}>
        <Flex mt={60} direction={'column'} w={'90%'}>
          <Flex mb={9}>
            <Button onClick={() => router.back()}>
              <ArrowBackIcon />
            </Button>
          </Flex>
          <Text className={'text-lg font-semibold'} mb={9}>
            Update Training Session
          </Text>
          <Spacer />
          <Spacer />
          {idIsUnavailable || isInitialLoading || data === undefined ? (
            <SkeletonCard />
          ) : null}

          {initialFormValues !== undefined ? (
            <UpdateTrainingSessionForm
              id={id}
              initialValues={initialFormValues}
            />
          ) : null}

          {isError ? <p>Error: {JSON.stringify(error.message)}</p> : null}
        </Flex>
      </Center>
    </>
  );
};

export default EditTrainingSession;
