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

const EditTrainingSession = () => {
  const { query } = useRouter();
  const id = query.id as string;
  const idIsUnavailable = isUnavailable(id);

  const [initialFormValues, setInitialFormValues] =
    useState<FormTrainingSessionUpdateInput>();

  const { data, isInitialLoading, isError, error } =
    api.trainingSessionRoutes.findOne.useQuery(
      {
        where: {
          id,
        },
      },
      {
        enabled: idIsUnavailable,
      },
    );

  useEffect(() => {
    if (data !== undefined && data !== null)
      setInitialFormValues(apiPayloadToFormPayload(data));
  }, [data]);

  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <Flex mt={120} direction={'column'} w={'90%'}>
          <Text className={'text-lg font-semibold'} mb={9}>
            Edit Training Session
          </Text>
          <Spacer />
          {idIsUnavailable || isInitialLoading || data === undefined ? (
            <SkeletonCard />
          ) : null}

          {data !== undefined &&
          isInitialLoading === false &&
          initialFormValues !== undefined ? (
            <UpdateTrainingSessionForm
              id={id}
              initialValues={initialFormValues}
            />
          ) : null}

          {isError ? <p>Error: {JSON.stringify(error.message)}</p> : null}

          <Spacer />
        </Flex>
      </Center>
    </>
  );
};

export default EditTrainingSession;
