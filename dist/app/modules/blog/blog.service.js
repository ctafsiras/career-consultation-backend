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
exports.BlogServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.create({
        data,
    });
    return blog;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield prisma_1.default.blog.findMany();
    return blogs;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.findUnique({
        where: {
            id,
        },
    });
    if (!blog) {
        throw new Error("Blog not found");
    }
    return blog;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.update({
        where: {
            id,
        },
        data,
    });
    return blog;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma_1.default.blog.delete({
        where: {
            id,
        },
    });
    return blog;
});
exports.BlogServices = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
