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
exports.BookingServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isBooked = yield prisma_1.default.booking.findFirst({
        where: {
            date: data.date,
            shift: data.shift,
        },
    });
    if (isBooked) {
        throw new Error("This Shift is already booked");
    }
    const booking = yield prisma_1.default.booking.create({
        data,
        include: {
            user: true,
            service: true,
        },
    });
    return booking;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield prisma_1.default.booking.findMany({
        include: {
            user: true,
            service: true,
        },
    });
    return bookings;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield prisma_1.default.booking.findUnique({
        where: {
            id,
        },
        include: {
            user: true,
            service: true,
        },
    });
    if (!booking) {
        throw new Error("Booking not found");
    }
    return booking;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield prisma_1.default.booking.update({
        where: {
            id,
        },
        data,
        include: {
            user: true,
            service: true,
        },
    });
    return booking;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield prisma_1.default.booking.delete({
        where: {
            id,
        },
        include: {
            user: true,
            service: true,
        },
    });
    return booking;
});
exports.BookingServices = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
