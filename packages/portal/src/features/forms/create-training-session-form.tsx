import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from '@nextui-org/react';
import { Flex } from '@chakra-ui/layout';
import { api } from '@/utils/api';
import {
  TrainingSessionCreateInput,
  TrainingSessionCreateInputSchema,
} from '@/schemas/create-training-session';
import { coaches, trainingLocations, trainingTypes } from '@/constants/forms';

export type CreateTrainingSessionFormProps = {
  onClose: () => void;
};
export const CreateTrainingSessionForm = (
  props: CreateTrainingSessionFormProps,
) => {
  const { onClose } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TrainingSessionCreateInput>({
    resolver: zodResolver(TrainingSessionCreateInputSchema),
  });

  const { mutateAsync } =
    api.trainingSessionRoutes.createTrainingSession.useMutation();

  const onSubmit: SubmitHandler<TrainingSessionCreateInput> = async (data) => {
    console.log(data);
    await mutateAsync({
      data,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={'column'} gap={6}>
        <Autocomplete
          {...register('type')}
          label="Select the training type"
          errorMessage={errors.type?.message}
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
          errorMessage={errors.location?.message}
          isRequired
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
          errorMessage={errors.coachFullName?.message}
          isRequired
        >
          {coaches.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Input
          label={'Start Time'}
          {...register('startTime')}
          errorMessage={errors.startTime?.message}
        />
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
