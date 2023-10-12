const { z } = require("zod");

const create = z.object({
  body: z.object({
    userId: z.number(),
    comment: z.string(),
  }),
});

const update = z.object({
  body: z.object({
    id: z.number(),
    userId: z.number().optional(),
    comment: z.string().optional(),
  }),
});

export const FeedbackValidations = {
  create,
  update,
};
