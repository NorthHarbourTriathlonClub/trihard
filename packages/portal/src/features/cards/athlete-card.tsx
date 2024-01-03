import { hasPreferredName } from '@/services/athlete.service';
import { EditIcon } from '@chakra-ui/icons';
import { Button, Card, CardBody, Spacer } from '@nextui-org/react';
import { Athlete } from '@prisma/client';
import Link from 'next/link';

export type AthleteCardProps = {
  data: Athlete;
};
export const AthleteCard = (props: AthleteCardProps) => {
  const { data } = props;
  return (
    <Card
      className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full"
      radius="lg"
    >
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <div className="flex flex-col">
            <span className="text-white">{data.email}</span>
            <span className="text-white text-lg font-semibold">
              {data.firstName}{' '}
              {hasPreferredName(data) ? `(${data.preferredName})` : null}{' '}
              {data.lastName}
            </span>
          </div>
          <Link href={`/athletes/edit/${data.id}`}>
            <Button variant={'light'}>
              <EditIcon /> Edit
            </Button>
          </Link>
        </div>
        <Spacer />
        <Spacer />
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="text-medium text-white">
                {data.trainingSessionsAttendedIds?.length}
              </span>
            </div>
            <span className="text-white text-sm">Trainings attended</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
