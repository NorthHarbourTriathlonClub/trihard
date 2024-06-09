import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react';

export type SignInAthleteModalProps = {
  modalHeaderText: string;
  isOpen: boolean;
  onClose: () => void;
  form: React.ReactNode;
};
export const SignInAthleteModal = (props: SignInAthleteModalProps) => {
  const { modalHeaderText, isOpen, onClose, form } = props;
  const { onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader>{modalHeaderText}</ModalHeader>
          <ModalBody>{form}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
