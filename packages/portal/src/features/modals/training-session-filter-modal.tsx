import { SearchIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

export const TrainingSessionFilterModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color={'secondary'}>
        <SearchIcon />
        Filter
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Filter Training sessions
              </ModalHeader>
              <ModalBody>
                <p>
                  <strong>Note: </strong>This feature is currently under development, but we promise
                  that we'll deliver it sooner than Mingyang's arrival time to
                  morning swim sessions.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
