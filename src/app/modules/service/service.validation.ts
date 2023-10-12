const { z } = require("zod");

const create = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().positive(),
    availability: z.boolean(),
  }),
});

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().positive().optional(),
    availability: z.boolean().optional(),
  }),
});

export const ServiceValidations = {
  create,
  update,
};
