import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Spinner, Tooltip } from '@nextui-org/react';
import { Flex } from '@chakra-ui/layout';
import { toast } from 'react-toastify';
import { api } from '@/utils/api';
import {
  AthleteUpdateInput,
  AthleteUpdateInputSchema,
} from '@/schemas/update-athlete';

export type UpdateAthleteFormProps = {
  id: string;
  initialValues: AthleteUpdateInput;
};
export const UpdateAthleteForm = (props: UpdateAthleteFormProps) => {
  const { id, initialValues } = props;
  const { register, handleSubmit, reset, setValue, formState } =
    useForm<AthleteUpdateInput>({
      resolver: zodResolver(AthleteUpdateInputSchema),
    });

  const { athleteRoutes } = api.useUtils();

  // Set default values on component mount
  useEffect(() => {
    Object.entries(initialValues).forEach(([fieldName, defaultValue]) => {
      setValue(fieldName as keyof AthleteUpdateInput, defaultValue);
    });
  }, [setValue, initialValues]);

  const { mutateAsync, isLoading } = api.athleteRoutes.update.useMutation();

  const onSubmit: SubmitHandler<AthleteUpdateInput> = async (data) => {
    await mutateAsync(
      {
        where: { id },
        data,
      },
      {
        onSuccess: () => {
          toast.success('Athlete updated!', {
            position: 'bottom-center',
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
          athleteRoutes.findMany.refetch({
            take: 5,
            orderBy: {
              updatedAt: 'desc',
            },
          });
        },
        onError: () => {
          toast.error(
            `Failed to update athlete info, please try again later. `,
            {
              position: 'bottom-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            },
          );
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
          defaultValue={initialValues.firstName}
          errorMessage={formState.errors.firstName?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('lastName')}
          label="Last name"
          defaultValue={initialValues.lastName}
          errorMessage={formState.errors.lastName?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('email')}
          label="Email"
          defaultValue={initialValues.email}
          errorMessage={formState.errors.email?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('preferredName')}
          label="Preferred name"
          defaultValue={initialValues.preferredName}
          errorMessage={formState.errors.preferredName?.message}
          isDisabled={isLoading}
        />
        <Input
          {...register('mobile')}
          label="Mobile"
          defaultValue={initialValues.mobile}
          errorMessage={formState.errors.mobile?.message}
          isDisabled={isLoading}
        />
        <Flex gap={9} justifyContent={'flex-end'} my={8}>
          <Tooltip
            content={
              'Clicking this button will set all the form details back to the version before you made edits'
            }
            placement={'bottom'}
          >
            <Button
              color="warning"
              variant="solid"
              onPress={() => reset()}
              isDisabled={isLoading}
            >
              Reset
            </Button>
          </Tooltip>
          <Button color="primary" type={'submit'} isDisabled={isLoading}>
            {isLoading ? <Spinner size={'sm'} color='warning' /> : 'Update'}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
