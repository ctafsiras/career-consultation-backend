"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post("/create-book", (0, auth_1.default)(client_1.UserRole.admin), book_controller_1.BookController.create);
router.get("/", book_controller_1.BookController.getAll);
router.get("/:categoryId/category", book_controller_1.BookController.getAllByCategory);
router.get("/:id", book_controller_1.BookController.getOne);
router.patch("/:id", (0, auth_1.default)(client_1.UserRole.admin), book_controller_1.BookController.update);
router.delete("/:id", (0, auth_1.default)(client_1.UserRole.admin), book_controller_1.BookController.remove);
exports.BookRoute = router;
