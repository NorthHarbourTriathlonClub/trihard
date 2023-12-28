import { Button } from '@nextui-org/react';
import { NavBarResponsive } from '@/components/NavBarResponsive';

const Index = () => {
  return (
    <div>
      <NavBarResponsive />
      <Button color="primary">Training Sessions</Button>
      <Button color="primary">Members</Button>
      <Button color="primary">Payments</Button>
    </div>
  );
};

export default Index;
