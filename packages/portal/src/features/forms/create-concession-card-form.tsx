import {
  paymentMethods,
  paymentStatuses,
  seniorities,
} from '@/constants/forms';
import { ConcessionCardCreateInputSchema } from '@/schemas/create-concession-card';
import { api } from '@/utils/api';
import { Flex } from '@chakra-ui/layout';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from '@nextui-org/react';
import { useForm } from 'react-hook-form';

export type CreateConcessionCardFormProps = {
  onClose?: () => void;
};

export const CreateConcessionCardForm = (
  props: CreateConcessionCardFormProps,
) => {
  const { onClose } = props;
  const { register, formState } = useForm<ConcessionCardCreateInputSchema>({
    resolver: zodResolver(ConcessionCardCreateInputSchema),
  });

  const { isLoading } =
    api.concessionCardRoutes.createConcessionCardForAthlete.useMutation();

  return (
    <form>
      <Flex direction={'column'} gap={6}>
        <Input
          {...register('cardNumber')}
          label="Card Number"
          errorMessage={formState.errors.cardNumber?.message}
          isRequired
          isDisabled={isLoading}
          type="number"
        />

        <Autocomplete
          {...register('seniority')}
          label="Junior or Senior"
          errorMessage={formState.errors.seniority?.message}
          isRequired
          isDisabled={isLoading}
        >
          {seniorities.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Input
          {...register('paymentAmount')}
          label="Payment Amount"
          errorMessage={formState.errors.paymentAmount?.message}
          isRequired
          isDisabled={isLoading}
          type="number"
        />

        <Autocomplete
          {...register('paymentMethod')}
          label="Payment Method"
          errorMessage={formState.errors.paymentMethod?.message}
          isRequired
          isDisabled={isLoading}
        >
          {paymentMethods.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Autocomplete
          {...register('paymentStatus')}
          label="Payment Status"
          errorMessage={formState.errors.paymentStatus?.message}
          isRequired
          isDisabled={isLoading}
        >
          {paymentStatuses.map((d, _i) => (
            <AutocompleteItem key={_i} value={d}>
              {d}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Input
          {...register('numTrainingsAllowed')}
          label="Number of Trainings on this card"
          errorMessage={formState.errors.numTrainingsAllowed?.message}
          isRequired
          isDisabled={isLoading}
          type="number"
        />
        <Input
          {...register('issuanceDate')}
          label="Issuance Date"
          errorMessage={formState.errors.issuanceDate?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Input
          {...register('expiryDate')}
          label="Expiry Date"
          errorMessage={formState.errors.expiryDate?.message}
          isRequired
          isDisabled={isLoading}
        />
        <Flex gap={9} justifyContent={'flex-end'} my={8}>
          <Button color="danger" onPress={onClose} isDisabled={isLoading}>
            Cancel
          </Button>
          <Button color="warning" variant="solid" isDisabled={isLoading}>
            Clear
          </Button>
          <Button color="primary" type={'submit'} isDisabled={isLoading}>
            Create
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
