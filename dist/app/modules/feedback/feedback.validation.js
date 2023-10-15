"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackValidations = void 0;
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
exports.FeedbackValidations = {
    create,
    update,
};
