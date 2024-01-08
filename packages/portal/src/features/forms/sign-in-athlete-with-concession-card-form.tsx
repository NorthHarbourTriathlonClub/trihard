import {
  SignInWithConcessionCardArgsSchema,
  SignInWithConcessionCardArgs,
} from '@/schemas/sign-in-athlete';
import { api } from '@/utils/api';
import { Flex } from '@chakra-ui/layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Spinner } from '@nextui-org/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

/**
 * The trainingSessionId is fixed - minimises user-interaction
 * Prompt user to select an athlete -> we get athleteId
 * Prompt user to select ConcessionCard based on athleteId
 */
export const SignInAthleteWithConcessionCardForm = () => {
  const trainingSessionId = window.localStorage.getItem(
    'trainingSessionId',
  ) as string;
  console.log(`trainingSessionId: ${trainingSessionId}`);

  const { register, handleSubmit, reset, setValue, formState } =
    useForm<SignInWithConcessionCardArgs>({
      resolver: zodResolver(SignInWithConcessionCardArgsSchema),
    });

  // Set default values on component mount
  useEffect(() => {
    setValue(
      'trainingSessionId' as keyof SignInWithConcessionCardArgs,
      trainingSessionId,
    );
  }, [setValue, trainingSessionId]);

  const { mutateAsync, isLoading } =
    api.signInAthleteRoutes.withConcessionCard.useMutation();

  const onSubmit: SubmitHandler<SignInWithConcessionCardArgs> = async (
    data,
  ) => {
    await mutateAsync(data);
  };

  const onInvalid = (errors: unknown) => console.error(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <Flex direction={'column'} gap={6}>
        <Input
          {...register('trainingSessionId')}
          label={'Training Session ID (Pre-filled)'}
          defaultValue={trainingSessionId}
          errorMessage={formState.errors.trainingSessionId?.message as string}
          isRequired
          isDisabled
        />
        <Input
          {...register('athleteId')}
          label={'Athlete to sign-in'}
          errorMessage={formState.errors.athleteId?.message as string}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('concessionCardId')}
          label={'Choose concession card'}
          errorMessage={formState.errors.concessionCardId?.message as string}
          isRequired
          isDisabled={isLoading}
        />
        <Flex gap={9} justifyContent={'flex-end'} my={8}>
          <Button
            color="warning"
            variant="solid"
            onPress={() => reset()}
            isDisabled={isLoading}
          >
            Clear
          </Button>
          <Button color="primary" type={'submit'} isDisabled={isLoading}>
            {isLoading ? <Spinner size={'sm'} color={'warning'} /> : 'Sign-in'}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
