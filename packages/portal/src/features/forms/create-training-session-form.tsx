import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from '@nextui-org/react';
import { Flex } from '@chakra-ui/layout';
import Datepicker from 'tailwind-datepicker-react';
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
import { useState } from 'react';
// import { SeperateDateTimePicker } from '@/features/datetime/seperate-date-time-picker';
import * as H from '@/utils/helpers';

export type CreateTrainingSessionFormProps = {
  onClose: () => void;
};
export const CreateTrainingSessionForm = (
  props: CreateTrainingSessionFormProps,
) => {
  const { onClose } = props;
  const { register, handleSubmit, reset, control, formState } =
    useForm<FormTrainingSessionCreateInput>({
      resolver: zodResolver(FormTrainingSessionCreateInputSchema),
    });

  const { mutateAsync } =
    api.trainingSessionRoutes.createTrainingSession.useMutation();

  const onSubmit: SubmitHandler<FormTrainingSessionCreateInput> = async (
    data,
  ) => {
    // console.log(`touchedFields ==> ${JSON.stringify(touchedFields)}`);
    const transformedPayload = formPayloadToApiPayload(data);
    // console.log(`isDirty ==> ${isDirty}`);

    await mutateAsync({
      data: transformedPayload,
    })
      .then(() => {
        console.log(`Created`);
        onClose();
      })
      .catch((e) => {
        console.log(`Failed, error: ${e}`);
        onClose();
      });
  };

  // datepicker logic
  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatepickerInputField, setShowDatepickerInputField] =
    useState(false);
  // const handleChange = (selectedDate: Date) => {
  //   setSelectedDate(selectedDate);
  // };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={'column'} gap={6}>
        <Autocomplete
          {...register('type')}
          label="Select the training type"
          errorMessage={formState.errors.type?.message}
          onError={() => console.log(`FIELD error - type`)}
          isRequired
        >
          {trainingTypes.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Autocomplete
          {...register('location')}
          label="Select the location"
          errorMessage={formState.errors.location?.message}
          isRequired
          onError={() => console.log(`FIELD error - type`)}
        >
          {trainingLocations.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Autocomplete
          {...register('coachFullName')}
          label="Select the coach"
          errorMessage={formState.errors.coachFullName?.message}
          isRequired
          onError={() => console.log(`FIELD error - type`)}
        >
          {coaches.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        {/* <SeperateDateTimePicker
          label="Date of training"
          formMethods={{ register, setValue, formState }}
        /> */}
        {/* datepicker */}
        <Input
          label={'Date of training'}
          onClick={() => {
            setShow(true);
            setShowDatepickerInputField(!showDatepickerInputField);
          }}
          value={H.formatDateToYYYYMMDDWithDay(selectedDate)}
          readOnly
          isRequired
          // {...register('date')}
          // errorMessage={formState.errors.date?.message}
        />
        {showDatepickerInputField ? (
          <Controller
            control={control}
            name={'date'}
            render={({ field }) => {
              return (
                <div>
                  <Datepicker
                    {...register('date')}
                    show={show}
                    setShow={handleClose}
                    onChange={(date) => {
                      setSelectedDate(date);
                      field.onChange(date);
                      handleClose(false);
                    }}
                  />
                </div>
              );
            }}
          />
        ) : null}

        <Autocomplete
          label="Training start time"
          isRequired
          {...register('timeOfDay')}
        >
          {timesOfDay.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Autocomplete label="AM or PM" isRequired {...register('amOrPm')}>
          {amPm.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Flex gap={9} justifyContent={'flex-end'} my={8}>
          <Button color="danger" onPress={onClose}>
            Cancel
          </Button>
          <Button color="warning" variant="solid" onPress={() => reset()}>
            Clear
          </Button>
          <Button color="primary" type={'submit'}>
            Create
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
