"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.UserService.create(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "User created successfully",
        data: user,
    });
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield user_service_1.UserService.login(req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User logged in successfully",
        token,
    });
}));
const getAll = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.UserService.getAll();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Users retrieved successfully",
        data: users,
    });
}));
const getOne = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.UserService.getOne(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User retrieved successfully",
        data: user,
    });
}));
const update = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.UserService.update(req.params.id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User updated successfully",
        data: user,
    });
}));
const remove = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.UserService.remove(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User deleted successfully",
        data: user,
    });
}));
const getProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.UserService.getOne(req.user.userId);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User retrieved successfully",
        data: user,
    });
}));
exports.UserController = {
    create,
    login,
    getAll,
    getOne,
    update,
    remove,
    getProfile,
};
