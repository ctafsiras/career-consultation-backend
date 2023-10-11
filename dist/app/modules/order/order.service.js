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
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const client_1 = require("@prisma/client");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma_1.default.order.create({
        data,
    });
    return order;
});
const getAll = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let orders;
    if (user.role === client_1.UserRole.admin) {
        orders = yield prisma_1.default.order.findMany({});
        return orders;
    }
    else {
        orders = yield prisma_1.default.order.findMany({
            where: {
                userId: user.id,
            },
        });
    }
    return orders;
});
const getOne = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma_1.default.order.findUnique({
        where: {
            id,
        },
    });
    if (!order) {
        throw new Error("Order not found");
    }
    if (user.role !== client_1.UserRole.admin && order.userId !== user.id) {
        throw new Error("You are not authorized to see this order");
    }
    return order;
});
// const update = async (id: string, data: Partial<Order>): Promise<Order> => {
//   const order = await prisma.order.update({
//     where: {
//       id,
//     },
//     data,
//   });
//   return order;
// };
// const remove = async (id: string): Promise<Order> => {
//   const order = await prisma.order.delete({
//     where: {
//       id,
//     },
//   });
//   return order;
// };
exports.OrderService = {
    create,
    getAll,
    getOne,
};
