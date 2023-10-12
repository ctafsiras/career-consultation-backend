import express from "express";
import { ReviewController } from "./review.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { ReviewValidations } from "./review.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(ReviewValidations.create),
  ReviewController.create
);

router.get(
  "/",
  auth(UserRole.superAdmin, UserRole.admin),
  ReviewController.getAll
);
router.get(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  ReviewController.getOne
);
router.patch(
  "/:id",
  validateRequest(ReviewValidations.update),
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  ReviewController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  ReviewController.remove
);

export const ReviewRoutes = router;
