"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidations = void 0;
const { z } = require("zod");
const create = z.object({
    body: z.object({
        name: z.string(),
        description: z.string(),
        price: z.number().positive(),
        availability: z.boolean().optional(),
    }),
});
const update = z.object({
    body: z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().positive().optional(),
        availability: z.boolean().optional(),
    }),
});
exports.ServiceValidations = {
    create,
    update,
};
