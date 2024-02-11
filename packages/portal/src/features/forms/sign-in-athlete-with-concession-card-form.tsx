import { Flex } from '@chakra-ui/layout';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Spinner,
} from '@nextui-org/react';
import { Athlete } from '@prisma/client';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAthletes } from '@/hooks/use-athletes';
import {
  SignInWithConcessionCardArgsSchema,
  SignInWithConcessionCardArgs,
} from '@/schemas/sign-in-athlete';
import { api } from '@/utils/api';

export type SignInAthleteWithConcessionCardFormProps = {
  onClose: () => void;
};
export const SignInAthleteWithConcessionCardForm = (
  props: SignInAthleteWithConcessionCardFormProps,
) => {
  const { onClose } = props;
  const trainingSessionId = window.localStorage.getItem(
    'trainingSessionId',
  ) as string;

  const { handleSubmit, reset, setValue, formState } =
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

  const { data: dataAthletes, isLoading: isLoadingAthletes } = useAthletes({
    select: { id: true, firstName: true, lastName: true },
  });
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  // set athletes as local state, making it always available as a []
  useEffect(() => {
    if (dataAthletes !== undefined && isLoadingAthletes === false) {
      setAthletes(() => dataAthletes);
    }
  }, [dataAthletes, isLoadingAthletes]);

  const { mutateAsync, isLoading } =
    api.signInAthleteRoutes.withConcessionCard.useMutation();

  const { trainingSessionRoutes } = api.useUtils();

  const onSubmit: SubmitHandler<SignInWithConcessionCardArgs> = async (
    data,
  ) => {
    await mutateAsync(data, {
      onSuccess: () => {
        toast.success('Athlete signed in!', {
          position: 'bottom-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
        onClose();
        trainingSessionRoutes.findOne.refetch({
          where: { id: trainingSessionId },
        });
      },
      onError: (e) => {
        toast.error(
          `Failed to sign in athlete, please try again later. Error: ${e.message}`,
          {
            position: 'bottom-center',
            autoClose: 20000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          },
        );
      },
    });
  };

  const onInvalid = (errors: unknown) => console.error(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <Flex direction={'column'} gap={6}>
        <Autocomplete
          label="Which athlete are you signing in?"
          errorMessage={formState.errors.athleteId?.message}
          isInvalid={formState.errors.athleteId?.message !== undefined}
          isRequired
          isDisabled={isLoading || isLoadingAthletes}
          defaultItems={athletes}
          onSelectionChange={(e) => {
            setValue('athleteId', e as string);
          }}
        >
          {(athlete) => (
            <AutocompleteItem
              key={athlete.id}
              value={athlete.id}
              textValue={`${athlete.firstName} ${athlete.lastName}`}
            >
              {athlete.firstName} {athlete.lastName}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Flex my={8}>
          <Button color={'secondary'} isDisabled>
            Create a new concession card for this athlete
          </Button>
        </Flex>
        <Flex gap={9} justifyContent={'flex-end'}>
          <Button
            color="warning"
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
