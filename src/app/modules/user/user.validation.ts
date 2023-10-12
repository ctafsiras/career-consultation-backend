const { z } = require("zod");

const signup = z.object({
  name: z.string().min(3),
  email: z.string().email(), // Email format validation
  password: z.string(),
});
const login = z.object({
  email: z.string().email(), // Email format validation
  password: z.string(),
});
const update = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional(), // Email format validation
  password: z.string().optional(),
});

export const UserValidations = {
  signup,
  login,
  update,
};
