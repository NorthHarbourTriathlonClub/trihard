import { SignInAthleteWithConcessionCardForm } from '@/features/forms/sign-in-athlete-with-concession-card-form';
import {
  Button,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
} from '@nextui-org/react';

export type SignInOption = {
  label: string;
  component?: React.ReactNode;
};
export const signInOptions: SignInOption[] = [
  {
    label: '💳 With Concession Card',
    component: <SignInAthleteWithConcessionCardForm />,
  },
  {
    label: '💵 One-off Session (Without Concession Card)',
  },
  {
    label: '🗓️ With Fortnightly Payment',
  },
];

export const SignInAthleteDropdownButton = () => {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant={'shadow'} color={'secondary'}>
            Sign-in Athlete
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {signInOptions.map((d, _i) => (
            <DropdownItem key={_i}>{d.label}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
