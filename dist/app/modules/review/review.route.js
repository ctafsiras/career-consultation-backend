"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("./review.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const review_validation_1 = require("./review.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(review_validation_1.ReviewValidations.create), review_controller_1.ReviewController.create);
router.get("/", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), review_controller_1.ReviewController.getAll);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), review_controller_1.ReviewController.getOne);
router.patch("/:id", (0, validateRequest_1.default)(review_validation_1.ReviewValidations.update), (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin, client_1.UserRole.user), review_controller_1.ReviewController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), review_controller_1.ReviewController.remove);
exports.ReviewRoutes = router;
