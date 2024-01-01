import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Spacer,
  Spinner,
} from '@nextui-org/react';
import { Flex, Text } from '@chakra-ui/layout';
import Datepicker from 'tailwind-datepicker-react';
import { toast } from 'react-toastify';
import { api } from '@/utils/api';
import {
  FormTrainingSessionCreateInput,
  FormTrainingSessionCreateInputSchema,
  formPayloadToApiPayload,
} from '@/schemas/create-training-session';
import {
  amPm,
  coaches,
  timesOfDay,
  trainingLocations,
  trainingTypes,
} from '@/constants/forms';

export type CreateTrainingSessionFormProps = {
  onClose: () => void;
};
export const CreateTrainingSessionForm = (
  props: CreateTrainingSessionFormProps,
) => {
  const { onClose } = props;
  const { register, handleSubmit, reset, setValue, formState } =
    useForm<FormTrainingSessionCreateInput>({
      resolver: zodResolver(FormTrainingSessionCreateInputSchema),
    });

  const { mutateAsync, isLoading } =
    api.trainingSessionRoutes.create.useMutation();

  const { trainingSessionRoutes } = api.useUtils();
  const onSubmit: SubmitHandler<FormTrainingSessionCreateInput> = async (
    data,
  ) => {
    const transformedPayload = formPayloadToApiPayload(data);

    await mutateAsync(
      {
        data: transformedPayload,
      },
      {
        onSuccess: () => {
          toast.success('Training session created!', {
            position: 'bottom-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
          onClose();
          trainingSessionRoutes.findMany.refetch({
            take: 5,
            orderBy: {
              startTime: 'desc',
            },
          });
        },
        onError: () => {
          toast.error(
            `Failed to create training session, please try again later. `,
            {
              position: 'bottom-center',
              autoClose: 8000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            },
          );
          onClose();
        },
      },
    );
  };

  const onInvalid = (errors: unknown) => console.error(errors);

  // datepicker logic
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (state: boolean) => {
    setTimeout(() => {
      setShow(state);
    }, 300);
  };
  const { onChange: onDateChange, ...dateRegister } = register('date');

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <Flex direction={'column'} gap={6}>
        <Autocomplete
          {...register('type')}
          label="Select the training type"
          errorMessage={formState.errors.type?.message}
          isRequired
          isDisabled={isLoading}
        >
          {trainingTypes.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Autocomplete
          {...register('location')}
          label="Pick the location"
          errorMessage={formState.errors.location?.message}
          isRequired
          isDisabled={isLoading}
        >
          {trainingLocations.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Autocomplete
          {...register('coachFullName')}
          label="Who's the coach?"
          errorMessage={formState.errors.coachFullName?.message}
          isRequired
          isDisabled={isLoading}
        >
          {coaches.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        {/* need to convert date picker into own component */}
        <Spacer />
        <Text>Training time details</Text>
        <Datepicker
          {...dateRegister}
          options={{
            clearBtn: true,
            defaultDate: new Date(),
          }}
          onChange={(date) => {
            setValue('date', date);
            onDateChange({ target: date });
          }}
          show={show}
          setShow={handleClose}
        />
        {formState.errors.date?.message !== undefined ? (
          <p className="text-xs text-red-600">
            {formState.errors.date?.message}
          </p>
        ) : null}

        <Autocomplete
          label="Training start time"
          isRequired
          {...register('timeOfDay')}
          isDisabled={isLoading}
        >
          {timesOfDay.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Autocomplete
          label="AM or PM"
          isRequired
          {...register('amOrPm')}
          isDisabled={isLoading}
        >
          {amPm.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

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
            {isLoading ? <Spinner /> : 'Create'}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
