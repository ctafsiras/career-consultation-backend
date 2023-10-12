const { z } = require("zod");

const create = z.object({
  body: z.object({
    title: z.string(),
    body: z.string(),
  }),
});

const update = z.object({
  body: z.object({
    id: z.number(),
    title: z.string().optional(),
    body: z.string().optional(),
  }),
});

export const BlogValidations = {
  create,
  update,
};
