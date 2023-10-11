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
exports.CategoryController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const category_service_1 = require("./category.service");
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_service_1.CategoryService.create(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Category created successfully",
        data: category,
    });
}));
const getAll = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_service_1.CategoryService.getAll();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Categorys retrieved successfully",
        data: categories,
    });
}));
const getOne = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_service_1.CategoryService.getOne(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Category retrieved successfully",
        data: category,
    });
}));
const update = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_service_1.CategoryService.update(req.params.id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Category updated successfully",
        data: category,
    });
}));
const remove = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_service_1.CategoryService.remove(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Category deleted successfully",
        data: category,
    });
}));
exports.CategoryController = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
