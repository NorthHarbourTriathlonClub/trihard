import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { TrainingSession } from '@prisma/client';
import * as H from '@/utils/helpers';
import Link from 'next/link';

export type TrainingSessionInfoModalProps = {
  data: TrainingSession;
};
export const TrainingSessionInfoModal = (
  props: TrainingSessionInfoModalProps,
) => {
  const { data } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color={'warning'} fullWidth>
        <ViewIcon />
        Session Info
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                🏊 🚴 🏃 Training Session Info
              </ModalHeader>
              <ModalBody>
                <p>
                  <strong>Date</strong>:{' '}
                  {H.formatDateToYYYYMMDDWithDay(data.startTime)}
                </p>
                <p>
                  <strong>Time of day</strong>: {H.getTimeOfDay(data.startTime)}
                </p>
                <p>
                  <strong>Training type</strong>: {data.type}
                </p>
                <p>
                  <strong>Coach</strong>: {data.coachFullName}
                </p>
                <p>
                  <strong>Created at</strong>:{' '}
                  {`${H.formatDateToYYYYMMDD(
                    data.createdAt,
                  )} @ ${data.createdAt.toLocaleTimeString()}`}
                </p>
                <p>
                  <strong>Created by</strong>: {data.createdBy}
                </p>
                <p>
                  <strong>Updated at</strong>:{' '}
                  {`${H.formatDateToYYYYMMDD(
                    data.updatedAt,
                  )} @ ${data.updatedAt.toLocaleTimeString()}`}
                </p>
                <p>
                  <strong>Updated by</strong>: {data.updatedBy}
                </p>
              </ModalBody>
              <ModalFooter>
                <Link href={`/sessions/edit/${data.id}`}>
                  <Button color="primary" onPress={onClose}>
                    <EditIcon /> Edit
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
