"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidations = void 0;
const { z } = require("zod");
const create = z.object({
    body: z.object({
        userId: z.number(),
        serviceId: z.number(),
        status: z.boolean().optional(),
    }),
});
const update = z.object({
    body: z.object({
        id: z.number(),
        userId: z.number().optional(),
        serviceId: z.number().optional(),
        status: z.boolean().optional(),
    }),
});
exports.BookingValidations = {
    create,
    update,
};
