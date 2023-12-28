import { Button, Input } from '@nextui-org/react';
import { NavBarResponsive } from '@/components/NavBarResponsive';

const Index = () => {
  return (
    <div>
      <NavBarResponsive />
      <Button color="primary">Click me</Button>
      <Input type="email" label="Email" />
    </div>
  );
};

export default Index;
