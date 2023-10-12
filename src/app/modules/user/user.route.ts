import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.post("/signup", UserController.create);
router.post("/login", UserController.login);

router.get(
  "/",
  auth(UserRole.superAdmin, UserRole.admin),
  UserController.getAll
);
router.get(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  UserController.getOne
);
router.patch(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  UserController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  UserController.remove
);

export const UserRoute = router;
