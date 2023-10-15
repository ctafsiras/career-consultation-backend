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
exports.FeedbackController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const feedback_service_1 = require("./feedback.service");
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield feedback_service_1.FeedbackServices.create(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Service created successfully",
        data: feedback,
    });
}));
const getAll = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedbacks = yield feedback_service_1.FeedbackServices.getAll();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Services retrieved successfully",
        data: feedbacks,
    });
}));
const getOne = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield feedback_service_1.FeedbackServices.getOne(Number(req.params.id));
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Service retrieved successfully",
        data: feedback,
    });
}));
const update = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield feedback_service_1.FeedbackServices.update(Number(req.params.id), req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Service updated successfully",
        data: feedback,
    });
}));
const remove = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield feedback_service_1.FeedbackServices.remove(Number(req.params.id));
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Service deleted successfully",
        data: feedback,
    });
}));
exports.FeedbackController = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
