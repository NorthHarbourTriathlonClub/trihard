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
  amPm,
  coaches,
  timesOfDay,
  trainingLocations,
  trainingTypes,
} from '@/constants/forms';
import {
  FormTrainingSessionUpdateInput,
  FormTrainingSessionUpdateInputSchema,
  formPayloadToApiPayload,
} from '@/schemas/update-training-session';

export type UpdateTrainingSessionFormProps = {
  id: string;
  initialValues: FormTrainingSessionUpdateInput;
};
export const UpdateTrainingSessionForm = (
  props: UpdateTrainingSessionFormProps,
) => {
  const { id, initialValues } = props;
  const { register, handleSubmit, reset, setValue, formState } =
    useForm<FormTrainingSessionUpdateInput>({
      resolver: zodResolver(FormTrainingSessionUpdateInputSchema),
      defaultValues: initialValues,
    });

  const { mutateAsync, isLoading } =
    api.trainingSessionRoutes.update.useMutation();

  const onSubmit: SubmitHandler<FormTrainingSessionUpdateInput> = async (
    data,
  ) => {
    const transformedPayload = formPayloadToApiPayload(data);

    await mutateAsync({
      where: { id },
      data: transformedPayload,
    })
      .then(() => {
        toast.success('Training session updated!', {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .catch(() => {
        toast.error(
          `Failed to update training session, please try again later. `,
          {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          },
        );
      });
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
          <Button
            color="warning"
            variant="solid"
            onPress={() => reset()}
            isDisabled={isLoading}
          >
            Reset
          </Button>
          <Button color="primary" type={'submit'} isDisabled={isLoading}>
            {isLoading ? <Spinner /> : 'Create'}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
