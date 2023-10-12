import express from "express";
import { FeedbackController } from "./feedback.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { FeedbackValidations } from "./feedback.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(FeedbackValidations.create),
  FeedbackController.create
);

router.get(
  "/",
  auth(UserRole.superAdmin, UserRole.admin),
  FeedbackController.getAll
);
router.get(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  FeedbackController.getOne
);
router.patch(
  "/:id",
  validateRequest(FeedbackValidations.update),
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  FeedbackController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  FeedbackController.remove
);

export const FeedbackRoutes = router;
