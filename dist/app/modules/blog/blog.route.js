"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(blog_validation_1.BlogValidations.create), blog_controller_1.BlogController.create);
router.get("/", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), blog_controller_1.BlogController.getAll);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), blog_controller_1.BlogController.getOne);
router.patch("/:id", (0, validateRequest_1.default)(blog_validation_1.BlogValidations.update), (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin, client_1.UserRole.user), blog_controller_1.BlogController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), blog_controller_1.BlogController.remove);
exports.BlogRoutes = router;
