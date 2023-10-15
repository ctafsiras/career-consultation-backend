"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQValidations = void 0;
const { z } = require("zod");
const create = z.object({
    body: z.object({
        question: z.string(),
        answer: z.string(),
    }),
});
const update = z.object({
    body: z.object({
        id: z.number(),
        question: z.string().optional(),
        answer: z.string().optional(),
    }),
});
exports.FAQValidations = {
    create,
    update,
};
