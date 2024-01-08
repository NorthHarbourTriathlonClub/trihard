import { Flex } from '@chakra-ui/layout';

/**
 * The trainingSessionId is fixed - minimises user-interaction
 * Prompt user to select an athlete -> we get athleteId
 * Prompt user to select ConcessionCard based on athleteId
 */
export const SignInAthleteWithConcessionCardForm = () => {
  const trainingSessionId = window.localStorage.getItem(
    'trainingSessionId',
  ) as string;
  console.log(`trainingSessionId: ${trainingSessionId}`);

  return (
    <form>
      <Flex direction={'column'} gap={6}>
        SignInAthleteWithConcessionCardForm
      </Flex>
    </form>
  );
};
