import express from "express";
import { ServiceController } from "./service.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceValidations } from "./service.validation";
const router = express.Router();

router.post(
  "/",
  validateRequest(ServiceValidations.create),
  ServiceController.create
);

router.get(
  "/",
  auth(UserRole.superAdmin, UserRole.admin),
  ServiceController.getAll
);
router.get(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  ServiceController.getOne
);
router.patch(
  "/:id",
  validateRequest(ServiceValidations.update),
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  ServiceController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  ServiceController.remove
);

export const ServiceRoutes = router;
