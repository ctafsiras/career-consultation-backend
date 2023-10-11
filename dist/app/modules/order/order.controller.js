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
exports.OrderController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const order_service_1 = require("./order.service");
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_service_1.OrderService.create(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Order created successfully",
        data: order,
    });
}));
const getAll = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_service_1.OrderService.getAll(req.user);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Orders retrieved successfully",
        data: orders,
    });
}));
const getOne = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_service_1.OrderService.getOne(req.params.id, req.user);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Order retrieved successfully",
        data: order,
    });
}));
// const update = catchAsync(async (req, res) => {
//   const order = await OrderService.update(req.params.id, req.body);
//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "Order updated successfully",
//     data: order,
//   });
// });
// const remove = catchAsync(async (req, res) => {
//   const order = await OrderService.remove(req.params.id);
//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "Order deleted successfully",
//     data: order,
//   });
// });
exports.OrderController = {
    create,
    getAll,
    getOne,
};
