import { CreateConcessionCardForm } from '@/features/forms/create-concession-card-form';
import { AddIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from '@nextui-org/react';

export type ConcessionCardCreateModalProps = {
  buttonText: string;
};
export const ConcessionCardCreateModal = (
  props: ConcessionCardCreateModalProps,
) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color={'secondary'}>
        <AddIcon />
        {props.buttonText}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Create a New Concession Card</ModalHeader>
              <ModalBody>
                <CreateConcessionCardForm onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
