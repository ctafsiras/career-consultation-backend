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
exports.FeedbackServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.default.feedback.create({
        data,
    });
    return feedback;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const feedbacks = yield prisma_1.default.feedback.findMany({
        include: {
            user: true,
        }
    });
    return feedbacks;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.default.feedback.findUnique({
        where: {
            id,
        },
        include: {
            user: true,
        }
    });
    if (!feedback) {
        throw new Error("Feedback not found");
    }
    return feedback;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.default.feedback.update({
        where: {
            id,
        },
        data,
        include: {
            user: true,
        }
    });
    return feedback;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.default.feedback.delete({
        where: {
            id,
        },
    });
    return feedback;
});
exports.FeedbackServices = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
