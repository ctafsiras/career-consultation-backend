import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.post("/auth/signup", UserController.create);
router.post("/auth/signin", UserController.login);
router.get("/users", auth(UserRole.admin), UserController.getAll);
router.get("/users/:id", auth(UserRole.admin), UserController.getOne);
router.get("/profile", auth(UserRole.admin, UserRole.customer), UserController.getProfile);
router.patch("/users/:id", auth(UserRole.admin), UserController.update);
router.delete("/users/:id", auth(UserRole.admin), UserController.remove);

export const UserRoute = router;
