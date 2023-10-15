"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const { z } = require("zod");
const signup = z.object({
    body: z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string(),
    }),
});
const login = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string(),
    }),
});
const update = z.object({
    body: z.object({
        id: z.number(),
        name: z.string().min(3).optional(),
        email: z.string().email().optional(),
        password: z.string().optional(),
    }),
});
exports.UserValidations = {
    signup,
    login,
    update,
};
