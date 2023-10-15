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
exports.ReviewServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.default.review.create({
        data,
    });
    return review;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield prisma_1.default.review.findMany();
    return reviews;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.default.review.findUnique({
        where: {
            id,
        },
    });
    if (!review) {
        throw new Error("Review not found");
    }
    return review;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.default.review.update({
        where: {
            id,
        },
        data,
    });
    return review;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.default.review.delete({
        where: {
            id,
        },
    });
    return review;
});
exports.ReviewServices = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
