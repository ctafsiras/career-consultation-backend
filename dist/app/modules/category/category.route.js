"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post("/create-category", (0, auth_1.default)(client_1.UserRole.admin), category_controller_1.CategoryController.create);
router.get("/", category_controller_1.CategoryController.getAll);
router.get("/:id", category_controller_1.CategoryController.getOne);
router.patch("/:id", (0, auth_1.default)(client_1.UserRole.admin), category_controller_1.CategoryController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.admin), category_controller_1.CategoryController.remove);
exports.CategoryRoute = router;
