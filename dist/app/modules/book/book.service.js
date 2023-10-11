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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const pagination_1 = require("../../../shared/pagination");
const book_constant_1 = require("./book.constant");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.create({
        data,
        include: {
            category: true,
        },
    });
    return book;
});
const getAll = (filterOptions, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = pagination_1.paginationHelpers.calculatePagination(paginationOptions);
    const { search } = filterOptions, filtersData = __rest(filterOptions, ["search"]);
    const whereCondition = {};
    if (search) {
        Object.assign(whereCondition, {
            OR: book_constant_1.bookSearchableFields.map((field) => ({
                [field]: { contains: search, mode: "insensitive" },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        Object.assign(whereCondition, {
            AND: Object.keys(filtersData).map((key) => ({
                [key]: { contains: filtersData[key], mode: "insensitive" },
            })),
        });
    }
    const books = yield prisma_1.default.book.findMany({
        include: {
            category: true,
        },
        skip,
        take: limit,
        where: whereCondition,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const total = yield prisma_1.default.book.count();
    return {
        data: books,
        meta: {
            page,
            size: limit,
            total,
            totalPage: Math.ceil(total / limit),
        },
    };
});
const getAllByCategory = (categoryId, filterOptions, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = pagination_1.paginationHelpers.calculatePagination(paginationOptions);
    const { search } = filterOptions, filtersData = __rest(filterOptions, ["search"]);
    const whereCondition = { categoryId };
    if (search) {
        Object.assign(whereCondition, {
            OR: book_constant_1.bookSearchableFields.map((field) => ({
                [field]: { contains: search, mode: "insensitive" },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        Object.assign(whereCondition, {
            AND: Object.keys(filtersData).map((key) => ({
                [key]: { contains: filtersData[key], mode: "insensitive" },
            })),
        });
    }
    const books = yield prisma_1.default.book.findMany({
        include: {
            category: true,
        },
        skip,
        take: limit,
        where: whereCondition,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const total = yield prisma_1.default.book.count();
    return {
        data: books,
        meta: {
            page,
            size: limit,
            total,
            totalPage: Math.ceil(total / limit),
        },
    };
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    if (!book) {
        throw new Error("Book not found");
    }
    return book;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data,
    });
    return book;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return book;
});
exports.BookService = {
    create,
    getAll,
    getAllByCategory,
    getOne,
    update,
    remove,
};
