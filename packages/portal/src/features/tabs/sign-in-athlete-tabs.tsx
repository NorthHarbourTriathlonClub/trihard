import { Tabs, Tab } from '@nextui-org/react';
import { CreateAthleteForm } from '@/features/forms/create-athlete-form';
import { CreateTrainingSessionForm } from '@/features/forms/create-training-session-form';

export const SignInAthleteTabs = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color={'secondary'}
        variant="bordered"
        radius="full"
      >
        <Tab
          key={'concession-card'}
          title={<span>With concession card</span>}
          children={<CreateAthleteForm onClose={() => console.log('')} />}
        />
        <Tab
          key={'no-concession-card'}
          title={<span>Without concession card</span>}
          children={
            <CreateTrainingSessionForm onClose={() => console.log('')} />
          }
        />
      </Tabs>
    </div>
  );
};
