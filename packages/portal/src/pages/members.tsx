import { NavBarResponsive } from '@/components/NavBarResponsive';
import { MemberCard } from '@/features/cards/member-card';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Center, Flex } from '@chakra-ui/layout';
import { Button } from '@nextui-org/react';
import { Member } from '@prisma/client';

const MembersPage = () => {
  const data: Partial<Member> = {
    id: 'test',
  };

  return (
    <>
      <NavBarResponsive />
      <Center flexDirection={'column'} width={'100%'}>
        <p className="text-lg font-semibold">Members</p>
        <Flex marginY={8} gap={8}></Flex>

        <Flex direction={'column'} gap={9} mb={9} width={'95%'}>
          <MemberCard data={data} />
          <MemberCard data={data} />
          <MemberCard data={data} />
        </Flex>

        <Button variant={'bordered'}>
          <PlusSquareIcon /> Load More
        </Button>
      </Center>
    </>
  );
};

export default MembersPage;
