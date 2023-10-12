import express from "express";
import { BookingController } from "./booking.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidations } from "./booking.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(BookingValidations.create),
  BookingController.create
);

router.get(
  "/",
  auth(UserRole.superAdmin, UserRole.admin),
  BookingController.getAll
);
router.get(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  BookingController.getOne
);
router.patch(
  "/:id",
  validateRequest(BookingValidations.update),
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  BookingController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  BookingController.remove
);

export const BookingRoutes = router;
