import { Button } from '@nextui-org/react';
import { NavBarResponsive } from '@/components/NavBarResponsive';
import { Center, Flex } from '@chakra-ui/layout';
import Link from 'next/link';
import { routes } from '@/constants/routes';

const Index = () => {
  return (
    <div>
      <NavBarResponsive />
      <Flex minH={'80vh'} align={'center'} justify={'center'}>
        <Center gap={8}>
          {routes.map((d, _i) => (
            <Link key={_i} href={d.path}>
              <Button color={'primary'}>{d.label}</Button>
            </Link>
          ))}
        </Center>
      </Flex>
    </div>
  );
};

export default Index;
