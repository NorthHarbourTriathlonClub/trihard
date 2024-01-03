import { NavBarResponsive } from '@/components/NavBarResponsive';
import { AthleteCard } from '@/features/cards/athlete-card';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Center, Flex } from '@chakra-ui/layout';
import { Button } from '@nextui-org/react';
import { Athlete } from '@prisma/client';

const AthletesPage = () => {
  const data: Partial<Athlete> = {
    id: 'test',
  };

  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <p className={'text-lg font-semibold'}>Athletes</p>
        <Flex marginY={8} gap={8}></Flex>

        <Flex direction={'column'} gap={9} mb={9} width={'95%'}>
          <AthleteCard data={data} />
          <AthleteCard data={data} />
          <AthleteCard data={data} />
        </Flex>

        <Button variant={'bordered'}>
          <PlusSquareIcon /> Load More
        </Button>
      </Center>
    </>
  );
};

export default AthletesPage;
