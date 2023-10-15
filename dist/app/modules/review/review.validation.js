"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidations = void 0;
const { z } = require("zod");
const create = z.object({
    body: z.object({
        userId: z.number(),
        serviceId: z.number(),
        rating: z.number(),
        comment: z.string(),
    }),
});
const update = z.object({
    body: z.object({
        id: z.number(),
        userId: z.number().optional(),
        serviceId: z.number().optional(),
        rating: z.number().optional(),
        comment: z.string().optional(),
    }),
});
exports.ReviewValidations = {
    create,
    update,
};
