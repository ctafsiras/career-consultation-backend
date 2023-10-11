"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post("/auth/signup", user_controller_1.UserController.create);
router.post("/auth/signin", user_controller_1.UserController.login);
router.get("/users", (0, auth_1.default)(client_1.UserRole.admin), user_controller_1.UserController.getAll);
router.get("/users/:id", (0, auth_1.default)(client_1.UserRole.admin), user_controller_1.UserController.getOne);
router.get("/profile", (0, auth_1.default)(client_1.UserRole.admin, client_1.UserRole.customer), user_controller_1.UserController.getProfile);
router.patch("/users/:id", (0, auth_1.default)(client_1.UserRole.admin), user_controller_1.UserController.update);
router.delete("/users/:id", (0, auth_1.default)(client_1.UserRole.admin), user_controller_1.UserController.remove);
exports.UserRoute = router;
