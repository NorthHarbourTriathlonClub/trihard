import { z } from 'zod';
import { err, ok } from 'neverthrow';
import { ConcessionCardCreateInputSchema } from '@/schemas/create-concession-card';
import * as AthleteRepository from '@/server/repositories/athlete.repository';

export const CreateConcessionCardForAthleteArgsSchema = z.object({
  athleteId: z.string(),
  concessionCard: ConcessionCardCreateInputSchema,
});
export type CreateConcessionCardForAthleteArgs = z.infer<
  typeof CreateConcessionCardForAthleteArgsSchema
>;
export const createConcessionCardForAthlete = async (
  args: CreateConcessionCardForAthleteArgs,
) => {
  const { athleteId, concessionCard } = args;

  // insert ConcessionCard on Athlete.concessionCards[]
  const result = await AthleteRepository.update({
    where: { id: athleteId },
    data: { concessionCards: { push: concessionCard } },
  });
  if (result.isErr()) {
    return err(
      new Error(
        `Sorry, we couldn't create a new concession card for this athlete`,
      ),
    );
  }

  return ok<CreateConcessionCardForAthleteArgs>(args);
};
