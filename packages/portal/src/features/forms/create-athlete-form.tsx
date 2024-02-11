import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Spinner } from '@nextui-org/react';
import { Flex } from '@chakra-ui/layout';
import { toast } from 'react-toastify';
import { api } from '@/utils/api';
import {
  AthleteCreateInput,
  AthleteCreateInputSchema,
} from '@/schemas/create-athlete';

export type CreateAthleteFormProps = {
  onClose: () => void;
};
export const CreateAthleteForm = (props: CreateAthleteFormProps) => {
  const { onClose } = props;
  const { register, handleSubmit, reset, formState } =
    useForm<AthleteCreateInput>({
      resolver: zodResolver(AthleteCreateInputSchema),
    });
  const { mutateAsync, isLoading } = api.athleteRoutes.create.useMutation();

  const { athleteRoutes } = api.useUtils();
  const onSubmit: SubmitHandler<AthleteCreateInput> = async (data) => {
    await mutateAsync(
      {
        data,
      },
      {
        onSuccess: () => {
          toast.success('Athlete created!', {
            position: 'bottom-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
          onClose();
          athleteRoutes.findMany.refetch({
            take: 5,
            orderBy: {
              updatedAt: 'desc',
            },
          });
        },
        onError: () => {
          toast.error(`Failed to create athlete, please try again later. `, {
            position: 'bottom-center',
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          onClose();
        },
      },
    );
  };

  const onInvalid = (errors: unknown) => console.error(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <Flex direction={'column'} gap={6}>
        <Input
          {...register('firstName')}
          label="First name"
          errorMessage={formState.errors.firstName?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('lastName')}
          label="Last name"
          errorMessage={formState.errors.lastName?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('email')}
          label="Email"
          errorMessage={formState.errors.email?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('preferredName')}
          label="Preferred name"
          errorMessage={formState.errors.preferredName?.message}
          isDisabled={isLoading}
        />
        <Input
          {...register('mobile')}
          label="Mobile"
          errorMessage={formState.errors.mobile?.message}
          isDisabled={isLoading}
        />

        <Flex gap={9} justifyContent={'flex-end'} my={8}>
          <Button color="danger" onPress={onClose} isDisabled={isLoading}>
            Cancel
          </Button>
          <Button
            color="warning"
            variant="solid"
            onPress={() => reset()}
            isDisabled={isLoading}
          >
            Clear
          </Button>
          <Button color="primary" type={'submit'} isDisabled={isLoading}>
            {isLoading ? <Spinner size={'sm'} color={'warning'} /> : 'Create'}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
