const { z } = require("zod");

const create = z.object({
  body: z.object({
    userId: z.number(),
    serviceId: z.number(),
    status: z.boolean(),
  }),
});

const update = z.object({
  body: z.object({
    userId: z.number().optional(),
    serviceId: z.number().optional(),
    status: z.boolean().optional(),
  }),
});

export const BookingValidations = {
  create,
  update,
};
