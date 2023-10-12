import express from "express";
import { FAQController } from "./faq.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { FAQValidations } from "./faq.validation";
const router = express.Router();

router.post("/", validateRequest(FAQValidations.create), FAQController.create);

router.get(
  "/",
  auth(UserRole.superAdmin, UserRole.admin),
  FAQController.getAll
);
router.get(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  FAQController.getOne
);
router.patch(
  "/:id",
  validateRequest(FAQValidations.update),
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  FAQController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  FAQController.remove
);

export const FAQRoutes = router;
