import { AddIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from '@nextui-org/react';

export const SignInAthleteModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color={'secondary'}>
        <AddIcon />
        Add athlete to this training
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Signing in Athlete
              </ModalHeader>
              <ModalBody>test</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
