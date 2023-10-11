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
exports.CategoryService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.create({
        data,
    });
    return category;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield prisma_1.default.category.findMany();
    return categories;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.findUnique({
        where: {
            id,
        },
        include: {
            books: true,
        },
    });
    if (!category) {
        throw new Error("Category not found");
    }
    return category;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.update({
        where: {
            id,
        },
        data,
    });
    return category;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.delete({
        where: {
            id,
        },
    });
    return category;
});
exports.CategoryService = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
