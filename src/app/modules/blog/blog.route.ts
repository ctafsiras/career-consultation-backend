import express from "express";
import { BlogController } from "./blog.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { BlogValidations } from "./blog.validation";
const router = express.Router();

router.post(
  "/",
  validateRequest(BlogValidations.create),
  BlogController.create
);

router.get(
  "/",
  auth(UserRole.superAdmin, UserRole.admin),
  BlogController.getAll
);
router.get(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  BlogController.getOne
);
router.patch(
  "/:id",
  validateRequest(BlogValidations.update),
  auth(UserRole.superAdmin, UserRole.admin, UserRole.user),
  BlogController.update
);
router.delete(
  "/:id",
  auth(UserRole.superAdmin, UserRole.admin),
  BlogController.remove
);

export const BlogRoutes = router;
