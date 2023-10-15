"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQRoutes = void 0;
const express_1 = __importDefault(require("express"));
const faq_controller_1 = require("./faq.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const faq_validation_1 = require("./faq.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(faq_validation_1.FAQValidations.create), faq_controller_1.FAQController.create);
router.get("/", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), faq_controller_1.FAQController.getAll);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), faq_controller_1.FAQController.getOne);
router.patch("/:id", (0, validateRequest_1.default)(faq_validation_1.FAQValidations.update), (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin, client_1.UserRole.user), faq_controller_1.FAQController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), faq_controller_1.FAQController.remove);
exports.FAQRoutes = router;
