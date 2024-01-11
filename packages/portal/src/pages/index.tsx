import { Button } from '@nextui-org/react';
import { Center, Flex } from '@chakra-ui/layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { routes } from '@/constants/routes';
import { NavBarResponsive } from '@/components/NavBarResponsive';

const Index = () => {
  return (
    <div>
      <NavBarResponsive />
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        direction={'column'}
      >
        <Center gap={8} flexDirection={'column'}>
          {routes.map((d, _i) => (
            <Link key={_i} href={d.path}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { x: -((_i + 1) * 100), opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button color={'primary'} radius={'full'} size={'lg'}>
                  {d.label}
                </Button>
              </motion.div>
            </Link>
          ))}
        </Center>
      </Flex>
    </div>
  );
};

export default Index;
