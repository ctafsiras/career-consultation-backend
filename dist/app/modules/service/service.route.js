"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(service_validation_1.ServiceValidations.create), service_controller_1.ServiceController.create);
router.get("/", 
// auth(UserRole.superAdmin, UserRole.admin),
service_controller_1.ServiceController.getAll);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), service_controller_1.ServiceController.getOne);
router.patch("/:id", (0, validateRequest_1.default)(service_validation_1.ServiceValidations.update), (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin, client_1.UserRole.user), service_controller_1.ServiceController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), service_controller_1.ServiceController.remove);
exports.ServiceRoutes = router;
