import { SignInAthleteWithConcessionCardForm } from '@/features/forms/sign-in-athlete-with-concession-card-form';
import {
  SignInAthleteModal,
  SignInAthleteModalProps,
} from '@/features/modals/sign-in-athlete-modal';
import {
  Button,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';

export type SignInOption = {
  optionLabel: string;
  formTitle: string;
  form: React.ReactNode;
};
export const signInOptions: SignInOption[] = [
  {
    optionLabel: '💳 With Concession Card',
    formTitle: 'Sign-in Athlete with concession card',
    form: <SignInAthleteWithConcessionCardForm />,
  },
  {
    optionLabel: '💵 One-off Session (Without Concession Card)',
    formTitle: 'Sign-in athlete as a one-off training',
    form: <SignInAthleteWithConcessionCardForm />,
  },
  {
    optionLabel: '🗓️ With Fortnightly Payment',
    formTitle: 'Sign-in athlete who pays fortnightly',
    form: <SignInAthleteWithConcessionCardForm />,
  },
];

export const SignInAthleteDropdownButton = () => {
  const [modalProps, setModalProps] = useState<SignInAthleteModalProps>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openModal = (args: SignInAthleteModalProps) => {
    setModalProps(args);
    onOpen();
  };
  return (
    <>
      <Dropdown isDismissable={false}>
        <DropdownTrigger>
          <Button variant={'shadow'} color={'secondary'}>
            Sign-in Athlete
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions">
          {signInOptions.map((d, _i) => (
            <DropdownItem
              key={_i}
              onClick={() =>
                openModal({
                  modalHeaderText: d.formTitle as string,
                  isOpen,
                  onClose,
                  form: d.form,
                })
              }
            >
              {d.optionLabel}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <SignInAthleteModal
        modalHeaderText={modalProps?.modalHeaderText as string}
        isOpen={isOpen}
        onClose={onClose}
        form={modalProps?.form}
      />
    </>
  );
};
