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
exports.UserService = void 0;
const jwt_1 = require("../../../shared/jwt");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.create({
        data,
    });
    return user;
});
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            email: data.email,
            password: data.password,
        },
    });
    if (!user) {
        new Error("User not found");
    }
    const payload = {
        role: user === null || user === void 0 ? void 0 : user.role,
        userId: user === null || user === void 0 ? void 0 : user.id,
    };
    const secret = process.env.JWT_SECRET;
    const token = jwt_1.jwtHelpers.createToken(payload, secret, "365d");
    return token;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.user.findMany();
    return users;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.update({
        where: {
            id,
        },
        data,
    });
    return user;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
    return user;
});
exports.UserService = {
    create,
    login,
    getAll,
    getOne,
    update,
    remove,
};
