import { EditIcon } from '@chakra-ui/icons';
import { Button, Card, CardBody } from '@nextui-org/react';
import { TrainingSession } from '@prisma/client';
import Link from 'next/link';
import * as H from '@/utils/helpers';

export type TrainingSessionCardProps = {
  data: TrainingSession;
};
export const TrainingSessionCard = (props: TrainingSessionCardProps) => {
  const { data } = props;
  return (
    <Card
      className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full"
      radius="lg"
    >
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <div className="flex flex-col">
            <span className="text-white">{H.getDayOfWeek(data.startTime)}</span>
            <span className="text-white text-lg">
              {H.formatDateToYYYYMMDD(data.startTime)} @{' '}
              {H.getTimeOfDay(data.startTime)}
            </span>
          </div>
          <Link href={`/sessions/edit/${data.id}`}>
            <Button variant={'light'}>
              <EditIcon /> Edit
            </Button>
          </Link>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-lg font-semibold">
            {data.type} @ {data.location}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="text-medium text-white">
                {data.coachFullName}
              </span>
            </div>
            <span className="text-white text-sm">Was the coach</span>
          </div>
          <div>
            <div>
              <span className="text-medium text-white">
                {data.athleteIds.length}
              </span>
            </div>
            <span className="text-white text-sm">People showed up</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
