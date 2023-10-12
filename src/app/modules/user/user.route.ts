import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidations } from "./user.validation";
const router = express.Router();

router.post(
  "/signup",
  validateRequest(UserValidations.signup),
  UserController.create
);
router.post(
  "/login",
  validateRequest(UserValidations.login),
  UserController.login
);

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
router.get(
  "/profile",
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  UserController.getProfile
);
router.patch(
  "/:id",
  validateRequest(UserValidations.update),
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  UserController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  UserController.remove
);

export const UserRoutes = router;
