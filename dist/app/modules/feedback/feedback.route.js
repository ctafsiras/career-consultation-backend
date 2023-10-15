"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRoutes = void 0;
const express_1 = __importDefault(require("express"));
const feedback_controller_1 = require("./feedback.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const feedback_validation_1 = require("./feedback.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(feedback_validation_1.FeedbackValidations.create), feedback_controller_1.FeedbackController.create);
router.get("/", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), feedback_controller_1.FeedbackController.getAll);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), feedback_controller_1.FeedbackController.getOne);
router.patch("/:id", (0, validateRequest_1.default)(feedback_validation_1.FeedbackValidations.update), (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin, client_1.UserRole.user), feedback_controller_1.FeedbackController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), feedback_controller_1.FeedbackController.remove);
exports.FeedbackRoutes = router;
