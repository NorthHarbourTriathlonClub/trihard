import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TrainingSessionScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy',
  'archived',
  'archivedAt',
  'startTime',
  'coachFullName',
  'type',
  'location',
  'season',
  'details',
  'athleteIds',
]);

export const AthleteScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy',
  'archived',
  'archivedAt',
  'firstName',
  'lastName',
  'preferredName',
  'email',
  'mobile',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// TRAINING SESSION SCHEMA
/////////////////////////////////////////

export const TrainingSessionSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  createdBy: z.string().nullable(),
  updatedAt: z.coerce.date(),
  updatedBy: z.string().nullable(),
  archived: z.boolean(),
  archivedAt: z.coerce.date().nullable(),
  startTime: z.coerce.date(),
  coachFullName: z.string().nullable(),
  type: z.string(),
  location: z.string(),
  season: z.string().nullable(),
  details: z.string().nullable(),
  athleteIds: z.string().array(),
});

export type TrainingSession = z.infer<typeof TrainingSessionSchema>;

/////////////////////////////////////////
// TRAINING SESSION PARTIAL SCHEMA
/////////////////////////////////////////

export const TrainingSessionPartialSchema = TrainingSessionSchema.partial();

export type TrainingSessionPartial = z.infer<
  typeof TrainingSessionPartialSchema
>;

// TRAINING SESSION OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const TrainingSessionOptionalDefaultsSchema =
  TrainingSessionSchema.merge(
    z.object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      archived: z.boolean().optional(),
    }),
  );

export type TrainingSessionOptionalDefaults = z.infer<
  typeof TrainingSessionOptionalDefaultsSchema
>;

/////////////////////////////////////////
// ATHLETE SCHEMA
/////////////////////////////////////////

export const AthleteSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  createdBy: z.string().nullable(),
  updatedAt: z.coerce.date(),
  updatedBy: z.string().nullable(),
  archived: z.boolean(),
  archivedAt: z.coerce.date().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  preferredName: z.string().nullable(),
  email: z.string(),
  mobile: z.string().nullable(),
});

export type Athlete = z.infer<typeof AthleteSchema>;

/////////////////////////////////////////
// ATHLETE PARTIAL SCHEMA
/////////////////////////////////////////

export const AthletePartialSchema = AthleteSchema.partial();

export type AthletePartial = z.infer<typeof AthletePartialSchema>;

// ATHLETE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const AthleteOptionalDefaultsSchema = AthleteSchema.merge(
  z.object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    archived: z.boolean().optional(),
  }),
);

export type AthleteOptionalDefaults = z.infer<
  typeof AthleteOptionalDefaultsSchema
>;

// ATHLETE RELATION SCHEMA
//------------------------------------------------------

export type AthleteRelations = {
  concessionCards: ConcessionCard[];
  fortnightlyPayments: FortnightlyPayment[];
  casualindividualSessionPayments: CasualIndividualSessionPayment[];
  casualSaturdaySessionPayments: CasualSaturdaySessionPayment[];
};

export type AthleteWithRelations = z.infer<typeof AthleteSchema> &
  AthleteRelations;

export const AthleteWithRelationsSchema: z.ZodType<AthleteWithRelations> =
  AthleteSchema.merge(
    z.object({
      concessionCards: z.lazy(() => ConcessionCardSchema).array(),
      fortnightlyPayments: z.lazy(() => FortnightlyPaymentSchema).array(),
      casualindividualSessionPayments: z
        .lazy(() => CasualIndividualSessionPaymentSchema)
        .array(),
      casualSaturdaySessionPayments: z
        .lazy(() => CasualSaturdaySessionPaymentSchema)
        .array(),
    }),
  );

// ATHLETE OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type AthleteOptionalDefaultsRelations = {
  concessionCards: ConcessionCard[];
  fortnightlyPayments: FortnightlyPayment[];
  casualindividualSessionPayments: CasualIndividualSessionPayment[];
  casualSaturdaySessionPayments: CasualSaturdaySessionPayment[];
};

export type AthleteOptionalDefaultsWithRelations = z.infer<
  typeof AthleteOptionalDefaultsSchema
> &
  AthleteOptionalDefaultsRelations;

export const AthleteOptionalDefaultsWithRelationsSchema: z.ZodType<AthleteOptionalDefaultsWithRelations> =
  AthleteOptionalDefaultsSchema.merge(
    z.object({
      concessionCards: z.lazy(() => ConcessionCardSchema).array(),
      fortnightlyPayments: z.lazy(() => FortnightlyPaymentSchema).array(),
      casualindividualSessionPayments: z
        .lazy(() => CasualIndividualSessionPaymentSchema)
        .array(),
      casualSaturdaySessionPayments: z
        .lazy(() => CasualSaturdaySessionPaymentSchema)
        .array(),
    }),
  );

// ATHLETE PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type AthletePartialRelations = {
  concessionCards?: ConcessionCard[];
  fortnightlyPayments?: FortnightlyPayment[];
  casualindividualSessionPayments?: CasualIndividualSessionPayment[];
  casualSaturdaySessionPayments?: CasualSaturdaySessionPayment[];
};

export type AthletePartialWithRelations = z.infer<typeof AthletePartialSchema> &
  AthletePartialRelations;

export const AthletePartialWithRelationsSchema: z.ZodType<AthletePartialWithRelations> =
  AthletePartialSchema.merge(
    z.object({
      concessionCards: z.lazy(() => ConcessionCardSchema).array(),
      fortnightlyPayments: z.lazy(() => FortnightlyPaymentSchema).array(),
      casualindividualSessionPayments: z
        .lazy(() => CasualIndividualSessionPaymentSchema)
        .array(),
      casualSaturdaySessionPayments: z
        .lazy(() => CasualSaturdaySessionPaymentSchema)
        .array(),
    }),
  ).partial();

export type AthleteOptionalDefaultsWithPartialRelations = z.infer<
  typeof AthleteOptionalDefaultsSchema
> &
  AthletePartialRelations;

export const AthleteOptionalDefaultsWithPartialRelationsSchema: z.ZodType<AthleteOptionalDefaultsWithPartialRelations> =
  AthleteOptionalDefaultsSchema.merge(
    z
      .object({
        concessionCards: z.lazy(() => ConcessionCardSchema).array(),
        fortnightlyPayments: z.lazy(() => FortnightlyPaymentSchema).array(),
        casualindividualSessionPayments: z
          .lazy(() => CasualIndividualSessionPaymentSchema)
          .array(),
        casualSaturdaySessionPayments: z
          .lazy(() => CasualSaturdaySessionPaymentSchema)
          .array(),
      })
      .partial(),
  );

export type AthleteWithPartialRelations = z.infer<typeof AthleteSchema> &
  AthletePartialRelations;

export const AthleteWithPartialRelationsSchema: z.ZodType<AthleteWithPartialRelations> =
  AthleteSchema.merge(
    z
      .object({
        concessionCards: z.lazy(() => ConcessionCardSchema).array(),
        fortnightlyPayments: z.lazy(() => FortnightlyPaymentSchema).array(),
        casualindividualSessionPayments: z
          .lazy(() => CasualIndividualSessionPaymentSchema)
          .array(),
        casualSaturdaySessionPayments: z
          .lazy(() => CasualSaturdaySessionPaymentSchema)
          .array(),
      })
      .partial(),
  );

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////
// CONCESSION CARD
//------------------------------------------------------

/////////////////////////////////////////
// CONCESSION CARD SCHEMA
/////////////////////////////////////////

export const ConcessionCardSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedBy: z.string().nullable(),
  archived: z.boolean(),
  archivedAt: z.coerce.date().nullable(),
  cardNumber: z.number().int(),
  seniority: z.string(),
  paymentAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string(),
  athleteId: z.string(),
  trainingSessionIds: z.string().array(),
  numTrainingsAllowed: z.number().int(),
  numTrainingsLeft: z.number().int(),
  issuanceDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
});

export type ConcessionCard = z.infer<typeof ConcessionCardSchema>;

/////////////////////////////////////////
// CONCESSION CARD PARTIAL SCHEMA
/////////////////////////////////////////

export const ConcessionCardPartialSchema = ConcessionCardSchema.partial();

export type ConcessionCardPartial = z.infer<typeof ConcessionCardPartialSchema>;

// CONCESSION CARD OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ConcessionCardOptionalDefaultsSchema = ConcessionCardSchema.merge(
  z.object({
    id: z.string().uuid().optional(),
    createdAt: z.coerce.date().optional(),
    archived: z.boolean().optional(),
  }),
);

export type ConcessionCardOptionalDefaults = z.infer<
  typeof ConcessionCardOptionalDefaultsSchema
>;
// FORTNIGHTLY PAYMENT
//------------------------------------------------------

/////////////////////////////////////////
// FORTNIGHTLY PAYMENT SCHEMA
/////////////////////////////////////////

export const FortnightlyPaymentSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedBy: z.string().nullable(),
  archived: z.boolean(),
  archivedAt: z.coerce.date().nullable(),
  seniority: z.string(),
  paymentAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string(),
  trainingSessionIds: z.string().array(),
  athleteId: z.string(),
  issuanceDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
});

export type FortnightlyPayment = z.infer<typeof FortnightlyPaymentSchema>;

/////////////////////////////////////////
// FORTNIGHTLY PAYMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const FortnightlyPaymentPartialSchema =
  FortnightlyPaymentSchema.partial();

export type FortnightlyPaymentPartial = z.infer<
  typeof FortnightlyPaymentPartialSchema
>;

// FORTNIGHTLY PAYMENT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const FortnightlyPaymentOptionalDefaultsSchema =
  FortnightlyPaymentSchema.merge(
    z.object({
      id: z.string().uuid().optional(),
      createdAt: z.coerce.date().optional(),
      archived: z.boolean().optional(),
    }),
  );

export type FortnightlyPaymentOptionalDefaults = z.infer<
  typeof FortnightlyPaymentOptionalDefaultsSchema
>;
// CASUAL INDIVIDUAL SESSION PAYMENT
//------------------------------------------------------

/////////////////////////////////////////
// CASUAL INDIVIDUAL SESSION PAYMENT SCHEMA
/////////////////////////////////////////

export const CasualIndividualSessionPaymentSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedBy: z.string().nullable(),
  archived: z.boolean(),
  archivedAt: z.coerce.date().nullable(),
  seniority: z.string(),
  isMember: z.boolean(),
  paymentAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string(),
  trainingSessionId: z.string(),
  athleteId: z.string(),
});

export type CasualIndividualSessionPayment = z.infer<
  typeof CasualIndividualSessionPaymentSchema
>;

/////////////////////////////////////////
// CASUAL INDIVIDUAL SESSION PAYMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const CasualIndividualSessionPaymentPartialSchema =
  CasualIndividualSessionPaymentSchema.partial();

export type CasualIndividualSessionPaymentPartial = z.infer<
  typeof CasualIndividualSessionPaymentPartialSchema
>;

// CASUAL INDIVIDUAL SESSION PAYMENT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const CasualIndividualSessionPaymentOptionalDefaultsSchema =
  CasualIndividualSessionPaymentSchema.merge(
    z.object({
      id: z.string().uuid().optional(),
      createdAt: z.coerce.date().optional(),
      archived: z.boolean().optional(),
    }),
  );

export type CasualIndividualSessionPaymentOptionalDefaults = z.infer<
  typeof CasualIndividualSessionPaymentOptionalDefaultsSchema
>;
// CASUAL SATURDAY SESSION PAYMENT
//------------------------------------------------------

/////////////////////////////////////////
// CASUAL SATURDAY SESSION PAYMENT SCHEMA
/////////////////////////////////////////

export const CasualSaturdaySessionPaymentSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedBy: z.string().nullable(),
  archived: z.boolean(),
  archivedAt: z.coerce.date().nullable(),
  seniority: z.string(),
  isMember: z.boolean(),
  paymentAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string(),
  trainingSessionIds: z.string().array(),
  athleteId: z.string(),
});

export type CasualSaturdaySessionPayment = z.infer<
  typeof CasualSaturdaySessionPaymentSchema
>;

/////////////////////////////////////////
// CASUAL SATURDAY SESSION PAYMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const CasualSaturdaySessionPaymentPartialSchema =
  CasualSaturdaySessionPaymentSchema.partial();

export type CasualSaturdaySessionPaymentPartial = z.infer<
  typeof CasualSaturdaySessionPaymentPartialSchema
>;

// CASUAL SATURDAY SESSION PAYMENT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const CasualSaturdaySessionPaymentOptionalDefaultsSchema =
  CasualSaturdaySessionPaymentSchema.merge(
    z.object({
      id: z.string().uuid().optional(),
      createdAt: z.coerce.date().optional(),
      archived: z.boolean().optional(),
    }),
  );

export type CasualSaturdaySessionPaymentOptionalDefaults = z.infer<
  typeof CasualSaturdaySessionPaymentOptionalDefaultsSchema
>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// TRAINING SESSION
//------------------------------------------------------

export const TrainingSessionArgsSchema: z.ZodType<Prisma.TrainingSessionDefaultArgs> =
  z
    .object({
      select: z.lazy(() => TrainingSessionSelectSchema).optional(),
    })
    .strict();

export const TrainingSessionSelectSchema: z.ZodType<Prisma.TrainingSessionSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      createdBy: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      updatedBy: z.boolean().optional(),
      archived: z.boolean().optional(),
      archivedAt: z.boolean().optional(),
      startTime: z.boolean().optional(),
      coachFullName: z.boolean().optional(),
      type: z.boolean().optional(),
      location: z.boolean().optional(),
      season: z.boolean().optional(),
      details: z.boolean().optional(),
      athleteIds: z.boolean().optional(),
    })
    .strict();

// ATHLETE
//------------------------------------------------------

export const AthleteIncludeSchema: z.ZodType<Prisma.AthleteInclude> = z
  .object({})
  .strict();

export const AthleteArgsSchema: z.ZodType<Prisma.AthleteDefaultArgs> = z
  .object({
    select: z.lazy(() => AthleteSelectSchema).optional(),
    include: z.lazy(() => AthleteIncludeSchema).optional(),
  })
  .strict();

export const AthleteSelectSchema: z.ZodType<Prisma.AthleteSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    archived: z.boolean().optional(),
    archivedAt: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    preferredName: z.boolean().optional(),
    email: z.boolean().optional(),
    mobile: z.boolean().optional(),
    concessionCards: z
      .union([z.boolean(), z.lazy(() => ConcessionCardArgsSchema)])
      .optional(),
    fortnightlyPayments: z
      .union([z.boolean(), z.lazy(() => FortnightlyPaymentArgsSchema)])
      .optional(),
    casualindividualSessionPayments: z
      .union([
        z.boolean(),
        z.lazy(() => CasualIndividualSessionPaymentArgsSchema),
      ])
      .optional(),
    casualSaturdaySessionPayments: z
      .union([
        z.boolean(),
        z.lazy(() => CasualSaturdaySessionPaymentArgsSchema),
      ])
      .optional(),
  })
  .strict();

// CONCESSION CARD
//------------------------------------------------------

export const ConcessionCardArgsSchema: z.ZodType<Prisma.ConcessionCardDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ConcessionCardSelectSchema).optional(),
    })
    .strict();

export const ConcessionCardSelectSchema: z.ZodType<Prisma.ConcessionCardSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedBy: z.boolean().optional(),
      archived: z.boolean().optional(),
      archivedAt: z.boolean().optional(),
      cardNumber: z.boolean().optional(),
      seniority: z.boolean().optional(),
      paymentAmount: z.boolean().optional(),
      paymentMethod: z.boolean().optional(),
      paymentStatus: z.boolean().optional(),
      athleteId: z.boolean().optional(),
      trainingSessionIds: z.boolean().optional(),
      numTrainingsAllowed: z.boolean().optional(),
      numTrainingsLeft: z.boolean().optional(),
      issuanceDate: z.boolean().optional(),
      expiryDate: z.boolean().optional(),
    })
    .strict();

// FORTNIGHTLY PAYMENT
//------------------------------------------------------

export const FortnightlyPaymentArgsSchema: z.ZodType<Prisma.FortnightlyPaymentDefaultArgs> =
  z
    .object({
      select: z.lazy(() => FortnightlyPaymentSelectSchema).optional(),
    })
    .strict();

export const FortnightlyPaymentSelectSchema: z.ZodType<Prisma.FortnightlyPaymentSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedBy: z.boolean().optional(),
      archived: z.boolean().optional(),
      archivedAt: z.boolean().optional(),
      seniority: z.boolean().optional(),
      paymentAmount: z.boolean().optional(),
      paymentMethod: z.boolean().optional(),
      paymentStatus: z.boolean().optional(),
      trainingSessionIds: z.boolean().optional(),
      athleteId: z.boolean().optional(),
      issuanceDate: z.boolean().optional(),
      expiryDate: z.boolean().optional(),
    })
    .strict();

// CASUAL INDIVIDUAL SESSION PAYMENT
//------------------------------------------------------

export const CasualIndividualSessionPaymentArgsSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentDefaultArgs> =
  z
    .object({
      select: z
        .lazy(() => CasualIndividualSessionPaymentSelectSchema)
        .optional(),
    })
    .strict();

export const CasualIndividualSessionPaymentSelectSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedBy: z.boolean().optional(),
      archived: z.boolean().optional(),
      archivedAt: z.boolean().optional(),
      seniority: z.boolean().optional(),
      isMember: z.boolean().optional(),
      paymentAmount: z.boolean().optional(),
      paymentMethod: z.boolean().optional(),
      paymentStatus: z.boolean().optional(),
      trainingSessionId: z.boolean().optional(),
      athleteId: z.boolean().optional(),
    })
    .strict();

// CASUAL SATURDAY SESSION PAYMENT
//------------------------------------------------------

export const CasualSaturdaySessionPaymentArgsSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentDefaultArgs> =
  z
    .object({
      select: z.lazy(() => CasualSaturdaySessionPaymentSelectSchema).optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentSelectSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedBy: z.boolean().optional(),
      archived: z.boolean().optional(),
      archivedAt: z.boolean().optional(),
      seniority: z.boolean().optional(),
      isMember: z.boolean().optional(),
      paymentAmount: z.boolean().optional(),
      paymentMethod: z.boolean().optional(),
      paymentStatus: z.boolean().optional(),
      trainingSessionIds: z.boolean().optional(),
      athleteId: z.boolean().optional(),
    })
    .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const TrainingSessionWhereInputSchema: z.ZodType<Prisma.TrainingSessionWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TrainingSessionWhereInputSchema),
          z.lazy(() => TrainingSessionWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TrainingSessionWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TrainingSessionWhereInputSchema),
          z.lazy(() => TrainingSessionWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      createdBy: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedBy: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      archived: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      archivedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      startTime: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      coachFullName: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      location: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      season: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      details: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      athleteIds: z.lazy(() => StringNullableListFilterSchema).optional(),
    })
    .strict();

export const TrainingSessionOrderByWithRelationInputSchema: z.ZodType<Prisma.TrainingSessionOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      startTime: z.lazy(() => SortOrderSchema).optional(),
      coachFullName: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      details: z.lazy(() => SortOrderSchema).optional(),
      athleteIds: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TrainingSessionWhereUniqueInputSchema: z.ZodType<Prisma.TrainingSessionWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => TrainingSessionWhereInputSchema),
              z.lazy(() => TrainingSessionWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => TrainingSessionWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => TrainingSessionWhereInputSchema),
              z.lazy(() => TrainingSessionWhereInputSchema).array(),
            ])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          archived: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
          archivedAt: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          startTime: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          coachFullName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          type: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          location: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          season: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          details: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          athleteIds: z.lazy(() => StringNullableListFilterSchema).optional(),
        })
        .strict(),
    );

export const TrainingSessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.TrainingSessionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      startTime: z.lazy(() => SortOrderSchema).optional(),
      coachFullName: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      details: z.lazy(() => SortOrderSchema).optional(),
      athleteIds: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => TrainingSessionCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => TrainingSessionMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => TrainingSessionMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const TrainingSessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TrainingSessionScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TrainingSessionScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => TrainingSessionScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TrainingSessionScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TrainingSessionScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => TrainingSessionScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      createdBy: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      archivedAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      startTime: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      coachFullName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      type: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      location: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      season: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      details: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      athleteIds: z.lazy(() => StringNullableListFilterSchema).optional(),
    })
    .strict();

export const AthleteWhereInputSchema: z.ZodType<Prisma.AthleteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AthleteWhereInputSchema),
        z.lazy(() => AthleteWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AthleteWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AthleteWhereInputSchema),
        z.lazy(() => AthleteWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    createdBy: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedBy: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    archived: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    archivedAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    firstName: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    preferredName: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    mobile: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    concessionCards: z
      .union([
        z.lazy(() => ConcessionCardCompositeListFilterSchema),
        z.lazy(() => ConcessionCardObjectEqualityInputSchema).array(),
      ])
      .optional(),
    fortnightlyPayments: z
      .union([
        z.lazy(() => FortnightlyPaymentCompositeListFilterSchema),
        z.lazy(() => FortnightlyPaymentObjectEqualityInputSchema).array(),
      ])
      .optional(),
    casualindividualSessionPayments: z
      .union([
        z.lazy(() => CasualIndividualSessionPaymentCompositeListFilterSchema),
        z
          .lazy(() => CasualIndividualSessionPaymentObjectEqualityInputSchema)
          .array(),
      ])
      .optional(),
    casualSaturdaySessionPayments: z
      .union([
        z.lazy(() => CasualSaturdaySessionPaymentCompositeListFilterSchema),
        z
          .lazy(() => CasualSaturdaySessionPaymentObjectEqualityInputSchema)
          .array(),
      ])
      .optional(),
  })
  .strict();

export const AthleteOrderByWithRelationInputSchema: z.ZodType<Prisma.AthleteOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      preferredName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
      concessionCards: z
        .lazy(() => ConcessionCardOrderByCompositeAggregateInputSchema)
        .optional(),
      fortnightlyPayments: z
        .lazy(() => FortnightlyPaymentOrderByCompositeAggregateInputSchema)
        .optional(),
      casualindividualSessionPayments: z
        .lazy(
          () =>
            CasualIndividualSessionPaymentOrderByCompositeAggregateInputSchema,
        )
        .optional(),
      casualSaturdaySessionPayments: z
        .lazy(
          () =>
            CasualSaturdaySessionPaymentOrderByCompositeAggregateInputSchema,
        )
        .optional(),
    })
    .strict();

export const AthleteWhereUniqueInputSchema: z.ZodType<Prisma.AthleteWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => AthleteWhereInputSchema),
              z.lazy(() => AthleteWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => AthleteWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => AthleteWhereInputSchema),
              z.lazy(() => AthleteWhereInputSchema).array(),
            ])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          archived: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
          archivedAt: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          firstName: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          lastName: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          preferredName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          email: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          mobile: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          concessionCards: z
            .union([
              z.lazy(() => ConcessionCardCompositeListFilterSchema),
              z.lazy(() => ConcessionCardObjectEqualityInputSchema).array(),
            ])
            .optional(),
          fortnightlyPayments: z
            .union([
              z.lazy(() => FortnightlyPaymentCompositeListFilterSchema),
              z.lazy(() => FortnightlyPaymentObjectEqualityInputSchema).array(),
            ])
            .optional(),
          casualindividualSessionPayments: z
            .union([
              z.lazy(
                () => CasualIndividualSessionPaymentCompositeListFilterSchema,
              ),
              z
                .lazy(
                  () => CasualIndividualSessionPaymentObjectEqualityInputSchema,
                )
                .array(),
            ])
            .optional(),
          casualSaturdaySessionPayments: z
            .union([
              z.lazy(
                () => CasualSaturdaySessionPaymentCompositeListFilterSchema,
              ),
              z
                .lazy(
                  () => CasualSaturdaySessionPaymentObjectEqualityInputSchema,
                )
                .array(),
            ])
            .optional(),
        })
        .strict(),
    );

export const AthleteOrderByWithAggregationInputSchema: z.ZodType<Prisma.AthleteOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      preferredName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AthleteCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AthleteMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AthleteMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const AthleteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AthleteScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AthleteScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AthleteScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AthleteScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AthleteScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AthleteScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      createdBy: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      archivedAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      firstName: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      lastName: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      preferredName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      mobile: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const TrainingSessionCreateInputSchema: z.ZodType<Prisma.TrainingSessionCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string().optional().nullable(),
      updatedAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      startTime: z.coerce.date(),
      coachFullName: z.string().optional().nullable(),
      type: z.string(),
      location: z.string(),
      season: z.string().optional().nullable(),
      details: z.string().optional().nullable(),
      athleteIds: z
        .union([
          z.lazy(() => TrainingSessionCreateathleteIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionUncheckedCreateInputSchema: z.ZodType<Prisma.TrainingSessionUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string().optional().nullable(),
      updatedAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      startTime: z.coerce.date(),
      coachFullName: z.string().optional().nullable(),
      type: z.string(),
      location: z.string(),
      season: z.string().optional().nullable(),
      details: z.string().optional().nullable(),
      athleteIds: z
        .union([
          z.lazy(() => TrainingSessionCreateathleteIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionUpdateInputSchema: z.ZodType<Prisma.TrainingSessionUpdateInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      startTime: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      coachFullName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      details: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      athleteIds: z
        .union([
          z.lazy(() => TrainingSessionUpdateathleteIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionUncheckedUpdateInputSchema: z.ZodType<Prisma.TrainingSessionUncheckedUpdateInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      startTime: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      coachFullName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      details: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      athleteIds: z
        .union([
          z.lazy(() => TrainingSessionUpdateathleteIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionCreateManyInputSchema: z.ZodType<Prisma.TrainingSessionCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string().optional().nullable(),
      updatedAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      startTime: z.coerce.date(),
      coachFullName: z.string().optional().nullable(),
      type: z.string(),
      location: z.string(),
      season: z.string().optional().nullable(),
      details: z.string().optional().nullable(),
      athleteIds: z
        .union([
          z.lazy(() => TrainingSessionCreateathleteIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionUpdateManyMutationInputSchema: z.ZodType<Prisma.TrainingSessionUpdateManyMutationInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      startTime: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      coachFullName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      details: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      athleteIds: z
        .union([
          z.lazy(() => TrainingSessionUpdateathleteIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TrainingSessionUncheckedUpdateManyInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      startTime: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      coachFullName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      details: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      athleteIds: z
        .union([
          z.lazy(() => TrainingSessionUpdateathleteIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteCreateInputSchema: z.ZodType<Prisma.AthleteCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    createdBy: z.string().optional().nullable(),
    updatedAt: z.coerce.date().optional(),
    updatedBy: z.string().optional().nullable(),
    archived: z.boolean().optional(),
    archivedAt: z.coerce.date().optional().nullable(),
    firstName: z.string(),
    lastName: z.string(),
    preferredName: z.string().optional().nullable(),
    email: z.string(),
    mobile: z.string().optional().nullable(),
    concessionCards: z
      .union([
        z.lazy(() => ConcessionCardListCreateEnvelopeInputSchema),
        z.lazy(() => ConcessionCardCreateInputSchema),
        z.lazy(() => ConcessionCardCreateInputSchema).array(),
      ])
      .optional(),
    fortnightlyPayments: z
      .union([
        z.lazy(() => FortnightlyPaymentListCreateEnvelopeInputSchema),
        z.lazy(() => FortnightlyPaymentCreateInputSchema),
        z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
      ])
      .optional(),
    casualindividualSessionPayments: z
      .union([
        z.lazy(
          () => CasualIndividualSessionPaymentListCreateEnvelopeInputSchema,
        ),
        z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
        z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
      ])
      .optional(),
    casualSaturdaySessionPayments: z
      .union([
        z.lazy(() => CasualSaturdaySessionPaymentListCreateEnvelopeInputSchema),
        z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
        z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AthleteUncheckedCreateInputSchema: z.ZodType<Prisma.AthleteUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string().optional().nullable(),
      updatedAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      firstName: z.string(),
      lastName: z.string(),
      preferredName: z.string().optional().nullable(),
      email: z.string(),
      mobile: z.string().optional().nullable(),
      concessionCards: z
        .union([
          z.lazy(() => ConcessionCardListCreateEnvelopeInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
      fortnightlyPayments: z
        .union([
          z.lazy(() => FortnightlyPaymentListCreateEnvelopeInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualindividualSessionPayments: z
        .union([
          z.lazy(
            () => CasualIndividualSessionPaymentListCreateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualSaturdaySessionPayments: z
        .union([
          z.lazy(
            () => CasualSaturdaySessionPaymentListCreateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteUpdateInputSchema: z.ZodType<Prisma.AthleteUpdateInput> = z
  .object({
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    createdBy: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedBy: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    archived: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    archivedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    firstName: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    lastName: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    preferredName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    mobile: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    concessionCards: z
      .union([
        z.lazy(() => ConcessionCardListUpdateEnvelopeInputSchema),
        z.lazy(() => ConcessionCardCreateInputSchema),
        z.lazy(() => ConcessionCardCreateInputSchema).array(),
      ])
      .optional(),
    fortnightlyPayments: z
      .union([
        z.lazy(() => FortnightlyPaymentListUpdateEnvelopeInputSchema),
        z.lazy(() => FortnightlyPaymentCreateInputSchema),
        z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
      ])
      .optional(),
    casualindividualSessionPayments: z
      .union([
        z.lazy(
          () => CasualIndividualSessionPaymentListUpdateEnvelopeInputSchema,
        ),
        z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
        z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
      ])
      .optional(),
    casualSaturdaySessionPayments: z
      .union([
        z.lazy(() => CasualSaturdaySessionPaymentListUpdateEnvelopeInputSchema),
        z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
        z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AthleteUncheckedUpdateInputSchema: z.ZodType<Prisma.AthleteUncheckedUpdateInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      preferredName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      mobile: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      concessionCards: z
        .union([
          z.lazy(() => ConcessionCardListUpdateEnvelopeInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
      fortnightlyPayments: z
        .union([
          z.lazy(() => FortnightlyPaymentListUpdateEnvelopeInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualindividualSessionPayments: z
        .union([
          z.lazy(
            () => CasualIndividualSessionPaymentListUpdateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualSaturdaySessionPayments: z
        .union([
          z.lazy(
            () => CasualSaturdaySessionPaymentListUpdateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteCreateManyInputSchema: z.ZodType<Prisma.AthleteCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string().optional().nullable(),
      updatedAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      firstName: z.string(),
      lastName: z.string(),
      preferredName: z.string().optional().nullable(),
      email: z.string(),
      mobile: z.string().optional().nullable(),
      concessionCards: z
        .union([
          z.lazy(() => ConcessionCardListCreateEnvelopeInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
      fortnightlyPayments: z
        .union([
          z.lazy(() => FortnightlyPaymentListCreateEnvelopeInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualindividualSessionPayments: z
        .union([
          z.lazy(
            () => CasualIndividualSessionPaymentListCreateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualSaturdaySessionPayments: z
        .union([
          z.lazy(
            () => CasualSaturdaySessionPaymentListCreateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteUpdateManyMutationInputSchema: z.ZodType<Prisma.AthleteUpdateManyMutationInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      preferredName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      mobile: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      concessionCards: z
        .union([
          z.lazy(() => ConcessionCardListUpdateEnvelopeInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
      fortnightlyPayments: z
        .union([
          z.lazy(() => FortnightlyPaymentListUpdateEnvelopeInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualindividualSessionPayments: z
        .union([
          z.lazy(
            () => CasualIndividualSessionPaymentListUpdateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualSaturdaySessionPayments: z
        .union([
          z.lazy(
            () => CasualSaturdaySessionPaymentListUpdateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AthleteUncheckedUpdateManyInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      preferredName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      mobile: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      concessionCards: z
        .union([
          z.lazy(() => ConcessionCardListUpdateEnvelopeInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
      fortnightlyPayments: z
        .union([
          z.lazy(() => FortnightlyPaymentListUpdateEnvelopeInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualindividualSessionPayments: z
        .union([
          z.lazy(
            () => CasualIndividualSessionPaymentListUpdateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      casualSaturdaySessionPayments: z
        .union([
          z.lazy(
            () => CasualSaturdaySessionPaymentListUpdateEnvelopeInputSchema,
          ),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> =
  z
    .object({
      equals: z.string().array().optional().nullable(),
      has: z.string().optional().nullable(),
      hasEvery: z.string().array().optional(),
      hasSome: z.string().array().optional(),
      isEmpty: z.boolean().optional(),
    })
    .strict();

export const TrainingSessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.TrainingSessionCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      startTime: z.lazy(() => SortOrderSchema).optional(),
      coachFullName: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      details: z.lazy(() => SortOrderSchema).optional(),
      athleteIds: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TrainingSessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TrainingSessionMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      startTime: z.lazy(() => SortOrderSchema).optional(),
      coachFullName: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      details: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TrainingSessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.TrainingSessionMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      startTime: z.lazy(() => SortOrderSchema).optional(),
      coachFullName: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      details: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const ConcessionCardCompositeListFilterSchema: z.ZodType<Prisma.ConcessionCardCompositeListFilter> =
  z
    .object({
      equals: z
        .lazy(() => ConcessionCardObjectEqualityInputSchema)
        .array()
        .optional(),
      every: z.lazy(() => ConcessionCardWhereInputSchema).optional(),
      some: z.lazy(() => ConcessionCardWhereInputSchema).optional(),
      none: z.lazy(() => ConcessionCardWhereInputSchema).optional(),
      isEmpty: z.boolean().optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const ConcessionCardObjectEqualityInputSchema: z.ZodType<Prisma.ConcessionCardObjectEqualityInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean(),
      archivedAt: z.coerce.date().optional().nullable(),
      cardNumber: z.number(),
      seniority: z.string(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      athleteId: z.string(),
      trainingSessionIds: z.string().array().optional(),
      numTrainingsAllowed: z.number(),
      numTrainingsLeft: z.number(),
      issuanceDate: z.coerce.date(),
      expiryDate: z.coerce.date(),
    })
    .strict();

export const FortnightlyPaymentCompositeListFilterSchema: z.ZodType<Prisma.FortnightlyPaymentCompositeListFilter> =
  z
    .object({
      equals: z
        .lazy(() => FortnightlyPaymentObjectEqualityInputSchema)
        .array()
        .optional(),
      every: z.lazy(() => FortnightlyPaymentWhereInputSchema).optional(),
      some: z.lazy(() => FortnightlyPaymentWhereInputSchema).optional(),
      none: z.lazy(() => FortnightlyPaymentWhereInputSchema).optional(),
      isEmpty: z.boolean().optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const FortnightlyPaymentObjectEqualityInputSchema: z.ZodType<Prisma.FortnightlyPaymentObjectEqualityInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean(),
      archivedAt: z.coerce.date().optional().nullable(),
      seniority: z.string(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      trainingSessionIds: z.string().array().optional(),
      athleteId: z.string(),
      issuanceDate: z.coerce.date(),
      expiryDate: z.coerce.date(),
    })
    .strict();

export const CasualIndividualSessionPaymentCompositeListFilterSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentCompositeListFilter> =
  z
    .object({
      equals: z
        .lazy(() => CasualIndividualSessionPaymentObjectEqualityInputSchema)
        .array()
        .optional(),
      every: z
        .lazy(() => CasualIndividualSessionPaymentWhereInputSchema)
        .optional(),
      some: z
        .lazy(() => CasualIndividualSessionPaymentWhereInputSchema)
        .optional(),
      none: z
        .lazy(() => CasualIndividualSessionPaymentWhereInputSchema)
        .optional(),
      isEmpty: z.boolean().optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const CasualIndividualSessionPaymentObjectEqualityInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentObjectEqualityInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean(),
      archivedAt: z.coerce.date().optional().nullable(),
      seniority: z.string(),
      isMember: z.boolean(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      trainingSessionId: z.string(),
      athleteId: z.string(),
    })
    .strict();

export const CasualSaturdaySessionPaymentCompositeListFilterSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentCompositeListFilter> =
  z
    .object({
      equals: z
        .lazy(() => CasualSaturdaySessionPaymentObjectEqualityInputSchema)
        .array()
        .optional(),
      every: z
        .lazy(() => CasualSaturdaySessionPaymentWhereInputSchema)
        .optional(),
      some: z
        .lazy(() => CasualSaturdaySessionPaymentWhereInputSchema)
        .optional(),
      none: z
        .lazy(() => CasualSaturdaySessionPaymentWhereInputSchema)
        .optional(),
      isEmpty: z.boolean().optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentObjectEqualityInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentObjectEqualityInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean(),
      archivedAt: z.coerce.date().optional().nullable(),
      seniority: z.string(),
      isMember: z.boolean(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      trainingSessionIds: z.string().array().optional(),
      athleteId: z.string(),
    })
    .strict();

export const ConcessionCardOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.ConcessionCardOrderByCompositeAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const FortnightlyPaymentOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.FortnightlyPaymentOrderByCompositeAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CasualIndividualSessionPaymentOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentOrderByCompositeAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentOrderByCompositeAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AthleteCountOrderByAggregateInputSchema: z.ZodType<Prisma.AthleteCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      preferredName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AthleteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AthleteMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      preferredName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AthleteMinOrderByAggregateInputSchema: z.ZodType<Prisma.AthleteMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedBy: z.lazy(() => SortOrderSchema).optional(),
      archived: z.lazy(() => SortOrderSchema).optional(),
      archivedAt: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      preferredName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TrainingSessionCreateathleteIdsInputSchema: z.ZodType<Prisma.TrainingSessionCreateathleteIdsInput> =
  z
    .object({
      set: z.string().array(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable(),
      unset: z.boolean().optional(),
    })
    .strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  z
    .object({
      set: z.boolean().optional(),
    })
    .strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional().nullable(),
      unset: z.boolean().optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const TrainingSessionUpdateathleteIdsInputSchema: z.ZodType<Prisma.TrainingSessionUpdateathleteIdsInput> =
  z
    .object({
      set: z.string().array().optional(),
      push: z.union([z.string(), z.string().array()]).optional(),
    })
    .strict();

export const ConcessionCardListCreateEnvelopeInputSchema: z.ZodType<Prisma.ConcessionCardListCreateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ConcessionCardCreateInputSchema: z.ZodType<Prisma.ConcessionCardCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      cardNumber: z.number(),
      seniority: z.string(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      athleteId: z.string(),
      trainingSessionIds: z
        .union([
          z.lazy(() => ConcessionCardCreatetrainingSessionIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
      numTrainingsAllowed: z.number(),
      numTrainingsLeft: z.number(),
      issuanceDate: z.coerce.date(),
      expiryDate: z.coerce.date(),
    })
    .strict();

export const FortnightlyPaymentListCreateEnvelopeInputSchema: z.ZodType<Prisma.FortnightlyPaymentListCreateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FortnightlyPaymentCreateInputSchema: z.ZodType<Prisma.FortnightlyPaymentCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      seniority: z.string(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      trainingSessionIds: z
        .union([
          z.lazy(() => FortnightlyPaymentCreatetrainingSessionIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
      athleteId: z.string(),
      issuanceDate: z.coerce.date(),
      expiryDate: z.coerce.date(),
    })
    .strict();

export const CasualIndividualSessionPaymentListCreateEnvelopeInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentListCreateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CasualIndividualSessionPaymentCreateInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      seniority: z.string(),
      isMember: z.boolean(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      trainingSessionId: z.string(),
      athleteId: z.string(),
    })
    .strict();

export const CasualSaturdaySessionPaymentListCreateEnvelopeInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentListCreateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentCreateInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedBy: z.string().optional().nullable(),
      archived: z.boolean().optional(),
      archivedAt: z.coerce.date().optional().nullable(),
      seniority: z.string(),
      isMember: z.boolean(),
      paymentAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      trainingSessionIds: z
        .union([
          z.lazy(
            () =>
              CasualSaturdaySessionPaymentCreatetrainingSessionIdsInputSchema,
          ),
          z.string().array(),
        ])
        .optional(),
      athleteId: z.string(),
    })
    .strict();

export const ConcessionCardListUpdateEnvelopeInputSchema: z.ZodType<Prisma.ConcessionCardListUpdateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
      push: z
        .union([
          z.lazy(() => ConcessionCardCreateInputSchema),
          z.lazy(() => ConcessionCardCreateInputSchema).array(),
        ])
        .optional(),
      updateMany: z.lazy(() => ConcessionCardUpdateManyInputSchema).optional(),
      deleteMany: z.lazy(() => ConcessionCardDeleteManyInputSchema).optional(),
    })
    .strict();

export const FortnightlyPaymentListUpdateEnvelopeInputSchema: z.ZodType<Prisma.FortnightlyPaymentListUpdateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
      push: z
        .union([
          z.lazy(() => FortnightlyPaymentCreateInputSchema),
          z.lazy(() => FortnightlyPaymentCreateInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .lazy(() => FortnightlyPaymentUpdateManyInputSchema)
        .optional(),
      deleteMany: z
        .lazy(() => FortnightlyPaymentDeleteManyInputSchema)
        .optional(),
    })
    .strict();

export const CasualIndividualSessionPaymentListUpdateEnvelopeInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentListUpdateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      push: z
        .union([
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .lazy(() => CasualIndividualSessionPaymentUpdateManyInputSchema)
        .optional(),
      deleteMany: z
        .lazy(() => CasualIndividualSessionPaymentDeleteManyInputSchema)
        .optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentListUpdateEnvelopeInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentListUpdateEnvelopeInput> =
  z
    .object({
      set: z
        .union([
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      push: z
        .union([
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentCreateInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .lazy(() => CasualSaturdaySessionPaymentUpdateManyInputSchema)
        .optional(),
      deleteMany: z
        .lazy(() => CasualSaturdaySessionPaymentDeleteManyInputSchema)
        .optional(),
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const ConcessionCardWhereInputSchema: z.ZodType<Prisma.ConcessionCardWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ConcessionCardWhereInputSchema),
          z.lazy(() => ConcessionCardWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ConcessionCardWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ConcessionCardWhereInputSchema),
          z.lazy(() => ConcessionCardWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedBy: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      archived: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      archivedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      cardNumber: z
        .union([z.lazy(() => IntFilterSchema), z.number()])
        .optional(),
      seniority: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      paymentAmount: z
        .union([z.lazy(() => FloatFilterSchema), z.number()])
        .optional(),
      paymentMethod: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      paymentStatus: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      athleteId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      trainingSessionIds: z
        .lazy(() => StringNullableListFilterSchema)
        .optional(),
      numTrainingsAllowed: z
        .union([z.lazy(() => IntFilterSchema), z.number()])
        .optional(),
      numTrainingsLeft: z
        .union([z.lazy(() => IntFilterSchema), z.number()])
        .optional(),
      issuanceDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      expiryDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const FortnightlyPaymentWhereInputSchema: z.ZodType<Prisma.FortnightlyPaymentWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FortnightlyPaymentWhereInputSchema),
          z.lazy(() => FortnightlyPaymentWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => FortnightlyPaymentWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FortnightlyPaymentWhereInputSchema),
          z.lazy(() => FortnightlyPaymentWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedBy: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      archived: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      archivedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      seniority: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      paymentAmount: z
        .union([z.lazy(() => FloatFilterSchema), z.number()])
        .optional(),
      paymentMethod: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      paymentStatus: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      trainingSessionIds: z
        .lazy(() => StringNullableListFilterSchema)
        .optional(),
      athleteId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      issuanceDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      expiryDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const CasualIndividualSessionPaymentWhereInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CasualIndividualSessionPaymentWhereInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CasualIndividualSessionPaymentWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CasualIndividualSessionPaymentWhereInputSchema),
          z.lazy(() => CasualIndividualSessionPaymentWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedBy: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      archived: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      archivedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      seniority: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      isMember: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      paymentAmount: z
        .union([z.lazy(() => FloatFilterSchema), z.number()])
        .optional(),
      paymentMethod: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      paymentStatus: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      trainingSessionId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      athleteId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentWhereInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CasualSaturdaySessionPaymentWhereInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CasualSaturdaySessionPaymentWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CasualSaturdaySessionPaymentWhereInputSchema),
          z.lazy(() => CasualSaturdaySessionPaymentWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedBy: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      archived: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      archivedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      seniority: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      isMember: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      paymentAmount: z
        .union([z.lazy(() => FloatFilterSchema), z.number()])
        .optional(),
      paymentMethod: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      paymentStatus: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      trainingSessionIds: z
        .lazy(() => StringNullableListFilterSchema)
        .optional(),
      athleteId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ConcessionCardCreatetrainingSessionIdsInputSchema: z.ZodType<Prisma.ConcessionCardCreatetrainingSessionIdsInput> =
  z
    .object({
      set: z.string().array(),
    })
    .strict();

export const FortnightlyPaymentCreatetrainingSessionIdsInputSchema: z.ZodType<Prisma.FortnightlyPaymentCreatetrainingSessionIdsInput> =
  z
    .object({
      set: z.string().array(),
    })
    .strict();

export const CasualSaturdaySessionPaymentCreatetrainingSessionIdsInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentCreatetrainingSessionIdsInput> =
  z
    .object({
      set: z.string().array(),
    })
    .strict();

export const ConcessionCardUpdateManyInputSchema: z.ZodType<Prisma.ConcessionCardUpdateManyInput> =
  z
    .object({
      where: z.lazy(() => ConcessionCardWhereInputSchema),
      data: z.lazy(() => ConcessionCardUpdateInputSchema),
    })
    .strict();

export const ConcessionCardDeleteManyInputSchema: z.ZodType<Prisma.ConcessionCardDeleteManyInput> =
  z
    .object({
      where: z.lazy(() => ConcessionCardWhereInputSchema),
    })
    .strict();

export const FortnightlyPaymentUpdateManyInputSchema: z.ZodType<Prisma.FortnightlyPaymentUpdateManyInput> =
  z
    .object({
      where: z.lazy(() => FortnightlyPaymentWhereInputSchema),
      data: z.lazy(() => FortnightlyPaymentUpdateInputSchema),
    })
    .strict();

export const FortnightlyPaymentDeleteManyInputSchema: z.ZodType<Prisma.FortnightlyPaymentDeleteManyInput> =
  z
    .object({
      where: z.lazy(() => FortnightlyPaymentWhereInputSchema),
    })
    .strict();

export const CasualIndividualSessionPaymentUpdateManyInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentUpdateManyInput> =
  z
    .object({
      where: z.lazy(() => CasualIndividualSessionPaymentWhereInputSchema),
      data: z.lazy(() => CasualIndividualSessionPaymentUpdateInputSchema),
    })
    .strict();

export const CasualIndividualSessionPaymentDeleteManyInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentDeleteManyInput> =
  z
    .object({
      where: z.lazy(() => CasualIndividualSessionPaymentWhereInputSchema),
    })
    .strict();

export const CasualSaturdaySessionPaymentUpdateManyInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentUpdateManyInput> =
  z
    .object({
      where: z.lazy(() => CasualSaturdaySessionPaymentWhereInputSchema),
      data: z.lazy(() => CasualSaturdaySessionPaymentUpdateInputSchema),
    })
    .strict();

export const CasualSaturdaySessionPaymentDeleteManyInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentDeleteManyInput> =
  z
    .object({
      where: z.lazy(() => CasualSaturdaySessionPaymentWhereInputSchema),
    })
    .strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const ConcessionCardUpdateInputSchema: z.ZodType<Prisma.ConcessionCardUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cardNumber: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      seniority: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentAmount: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentMethod: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentStatus: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      athleteId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      trainingSessionIds: z
        .union([
          z.lazy(() => ConcessionCardUpdatetrainingSessionIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
      numTrainingsAllowed: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      numTrainingsLeft: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      issuanceDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FortnightlyPaymentUpdateInputSchema: z.ZodType<Prisma.FortnightlyPaymentUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      seniority: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentAmount: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentMethod: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentStatus: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      trainingSessionIds: z
        .union([
          z.lazy(() => FortnightlyPaymentUpdatetrainingSessionIdsInputSchema),
          z.string().array(),
        ])
        .optional(),
      athleteId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      issuanceDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CasualIndividualSessionPaymentUpdateInputSchema: z.ZodType<Prisma.CasualIndividualSessionPaymentUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      seniority: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isMember: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentAmount: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentMethod: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentStatus: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      trainingSessionId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      athleteId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentUpdateInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedBy: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      archived: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      archivedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      seniority: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isMember: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentAmount: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentMethod: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      paymentStatus: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      trainingSessionIds: z
        .union([
          z.lazy(
            () =>
              CasualSaturdaySessionPaymentUpdatetrainingSessionIdsInputSchema,
          ),
          z.string().array(),
        ])
        .optional(),
      athleteId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const ConcessionCardUpdatetrainingSessionIdsInputSchema: z.ZodType<Prisma.ConcessionCardUpdatetrainingSessionIdsInput> =
  z
    .object({
      set: z.string().array().optional(),
      push: z.union([z.string(), z.string().array()]).optional(),
    })
    .strict();

export const FortnightlyPaymentUpdatetrainingSessionIdsInputSchema: z.ZodType<Prisma.FortnightlyPaymentUpdatetrainingSessionIdsInput> =
  z
    .object({
      set: z.string().array().optional(),
      push: z.union([z.string(), z.string().array()]).optional(),
    })
    .strict();

export const CasualSaturdaySessionPaymentUpdatetrainingSessionIdsInputSchema: z.ZodType<Prisma.CasualSaturdaySessionPaymentUpdatetrainingSessionIdsInput> =
  z
    .object({
      set: z.string().array().optional(),
      push: z.union([z.string(), z.string().array()]).optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const TrainingSessionFindFirstArgsSchema: z.ZodType<Prisma.TrainingSessionFindFirstArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      where: TrainingSessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          TrainingSessionOrderByWithRelationInputSchema.array(),
          TrainingSessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TrainingSessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          TrainingSessionScalarFieldEnumSchema,
          TrainingSessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TrainingSessionFindFirstOrThrowArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      where: TrainingSessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          TrainingSessionOrderByWithRelationInputSchema.array(),
          TrainingSessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TrainingSessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          TrainingSessionScalarFieldEnumSchema,
          TrainingSessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionFindManyArgsSchema: z.ZodType<Prisma.TrainingSessionFindManyArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      where: TrainingSessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          TrainingSessionOrderByWithRelationInputSchema.array(),
          TrainingSessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TrainingSessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          TrainingSessionScalarFieldEnumSchema,
          TrainingSessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const TrainingSessionAggregateArgsSchema: z.ZodType<Prisma.TrainingSessionAggregateArgs> =
  z
    .object({
      where: TrainingSessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          TrainingSessionOrderByWithRelationInputSchema.array(),
          TrainingSessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TrainingSessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const TrainingSessionGroupByArgsSchema: z.ZodType<Prisma.TrainingSessionGroupByArgs> =
  z
    .object({
      where: TrainingSessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          TrainingSessionOrderByWithAggregationInputSchema.array(),
          TrainingSessionOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: TrainingSessionScalarFieldEnumSchema.array(),
      having: TrainingSessionScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const TrainingSessionFindUniqueArgsSchema: z.ZodType<Prisma.TrainingSessionFindUniqueArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      where: TrainingSessionWhereUniqueInputSchema,
    })
    .strict();

export const TrainingSessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TrainingSessionFindUniqueOrThrowArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      where: TrainingSessionWhereUniqueInputSchema,
    })
    .strict();

export const AthleteFindFirstArgsSchema: z.ZodType<Prisma.AthleteFindFirstArgs> =
  z
    .object({
      select: AthleteSelectSchema.optional(),
      include: AthleteIncludeSchema.optional(),
      where: AthleteWhereInputSchema.optional(),
      orderBy: z
        .union([
          AthleteOrderByWithRelationInputSchema.array(),
          AthleteOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AthleteWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AthleteScalarFieldEnumSchema,
          AthleteScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AthleteFindFirstOrThrowArgs> =
  z
    .object({
      select: AthleteSelectSchema.optional(),
      include: AthleteIncludeSchema.optional(),
      where: AthleteWhereInputSchema.optional(),
      orderBy: z
        .union([
          AthleteOrderByWithRelationInputSchema.array(),
          AthleteOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AthleteWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AthleteScalarFieldEnumSchema,
          AthleteScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteFindManyArgsSchema: z.ZodType<Prisma.AthleteFindManyArgs> =
  z
    .object({
      select: AthleteSelectSchema.optional(),
      include: AthleteIncludeSchema.optional(),
      where: AthleteWhereInputSchema.optional(),
      orderBy: z
        .union([
          AthleteOrderByWithRelationInputSchema.array(),
          AthleteOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AthleteWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AthleteScalarFieldEnumSchema,
          AthleteScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AthleteAggregateArgsSchema: z.ZodType<Prisma.AthleteAggregateArgs> =
  z
    .object({
      where: AthleteWhereInputSchema.optional(),
      orderBy: z
        .union([
          AthleteOrderByWithRelationInputSchema.array(),
          AthleteOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AthleteWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const AthleteGroupByArgsSchema: z.ZodType<Prisma.AthleteGroupByArgs> = z
  .object({
    where: AthleteWhereInputSchema.optional(),
    orderBy: z
      .union([
        AthleteOrderByWithAggregationInputSchema.array(),
        AthleteOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: AthleteScalarFieldEnumSchema.array(),
    having: AthleteScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const AthleteFindUniqueArgsSchema: z.ZodType<Prisma.AthleteFindUniqueArgs> =
  z
    .object({
      select: AthleteSelectSchema.optional(),
      include: AthleteIncludeSchema.optional(),
      where: AthleteWhereUniqueInputSchema,
    })
    .strict();

export const AthleteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AthleteFindUniqueOrThrowArgs> =
  z
    .object({
      select: AthleteSelectSchema.optional(),
      include: AthleteIncludeSchema.optional(),
      where: AthleteWhereUniqueInputSchema,
    })
    .strict();

export const TrainingSessionCreateArgsSchema: z.ZodType<Prisma.TrainingSessionCreateArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      data: z.union([
        TrainingSessionCreateInputSchema,
        TrainingSessionUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const TrainingSessionUpsertArgsSchema: z.ZodType<Prisma.TrainingSessionUpsertArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      where: TrainingSessionWhereUniqueInputSchema,
      create: z.union([
        TrainingSessionCreateInputSchema,
        TrainingSessionUncheckedCreateInputSchema,
      ]),
      update: z.union([
        TrainingSessionUpdateInputSchema,
        TrainingSessionUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const TrainingSessionCreateManyArgsSchema: z.ZodType<Prisma.TrainingSessionCreateManyArgs> =
  z
    .object({
      data: z.union([
        TrainingSessionCreateManyInputSchema,
        TrainingSessionCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const TrainingSessionDeleteArgsSchema: z.ZodType<Prisma.TrainingSessionDeleteArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      where: TrainingSessionWhereUniqueInputSchema,
    })
    .strict();

export const TrainingSessionUpdateArgsSchema: z.ZodType<Prisma.TrainingSessionUpdateArgs> =
  z
    .object({
      select: TrainingSessionSelectSchema.optional(),
      data: z.union([
        TrainingSessionUpdateInputSchema,
        TrainingSessionUncheckedUpdateInputSchema,
      ]),
      where: TrainingSessionWhereUniqueInputSchema,
    })
    .strict();

export const TrainingSessionUpdateManyArgsSchema: z.ZodType<Prisma.TrainingSessionUpdateManyArgs> =
  z
    .object({
      data: z.union([
        TrainingSessionUpdateManyMutationInputSchema,
        TrainingSessionUncheckedUpdateManyInputSchema,
      ]),
      where: TrainingSessionWhereInputSchema.optional(),
    })
    .strict();

export const TrainingSessionDeleteManyArgsSchema: z.ZodType<Prisma.TrainingSessionDeleteManyArgs> =
  z
    .object({
      where: TrainingSessionWhereInputSchema.optional(),
    })
    .strict();

export const AthleteCreateArgsSchema: z.ZodType<Prisma.AthleteCreateArgs> = z
  .object({
    select: AthleteSelectSchema.optional(),
    include: AthleteIncludeSchema.optional(),
    data: z.union([
      AthleteCreateInputSchema,
      AthleteUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const AthleteUpsertArgsSchema: z.ZodType<Prisma.AthleteUpsertArgs> = z
  .object({
    select: AthleteSelectSchema.optional(),
    include: AthleteIncludeSchema.optional(),
    where: AthleteWhereUniqueInputSchema,
    create: z.union([
      AthleteCreateInputSchema,
      AthleteUncheckedCreateInputSchema,
    ]),
    update: z.union([
      AthleteUpdateInputSchema,
      AthleteUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const AthleteCreateManyArgsSchema: z.ZodType<Prisma.AthleteCreateManyArgs> =
  z
    .object({
      data: z.union([
        AthleteCreateManyInputSchema,
        AthleteCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const AthleteDeleteArgsSchema: z.ZodType<Prisma.AthleteDeleteArgs> = z
  .object({
    select: AthleteSelectSchema.optional(),
    include: AthleteIncludeSchema.optional(),
    where: AthleteWhereUniqueInputSchema,
  })
  .strict();

export const AthleteUpdateArgsSchema: z.ZodType<Prisma.AthleteUpdateArgs> = z
  .object({
    select: AthleteSelectSchema.optional(),
    include: AthleteIncludeSchema.optional(),
    data: z.union([
      AthleteUpdateInputSchema,
      AthleteUncheckedUpdateInputSchema,
    ]),
    where: AthleteWhereUniqueInputSchema,
  })
  .strict();

export const AthleteUpdateManyArgsSchema: z.ZodType<Prisma.AthleteUpdateManyArgs> =
  z
    .object({
      data: z.union([
        AthleteUpdateManyMutationInputSchema,
        AthleteUncheckedUpdateManyInputSchema,
      ]),
      where: AthleteWhereInputSchema.optional(),
    })
    .strict();

export const AthleteDeleteManyArgsSchema: z.ZodType<Prisma.AthleteDeleteManyArgs> =
  z
    .object({
      where: AthleteWhereInputSchema.optional(),
    })
    .strict();
