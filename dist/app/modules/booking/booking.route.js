"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_validation_1 = require("./booking.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(booking_validation_1.BookingValidations.create), booking_controller_1.BookingController.create);
router.get("/", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), booking_controller_1.BookingController.getAll);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), booking_controller_1.BookingController.getOne);
router.patch("/:id", (0, validateRequest_1.default)(booking_validation_1.BookingValidations.update), (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin, client_1.UserRole.user), booking_controller_1.BookingController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.superAdmin, client_1.UserRole.admin), booking_controller_1.BookingController.remove);
exports.BookingRoutes = router;
