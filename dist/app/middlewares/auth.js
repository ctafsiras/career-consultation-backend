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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../../shared/jwt");
const auth = (...requiredRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get authorization token
        const token = req.headers.authorization;
        if (!token) {
            throw new Error("You are not authorized");
        }
        // verify token
        let verifiedUser = null;
        verifiedUser = jwt_1.jwtHelpers.verifyToken(token, process.env.JWT_SECRET);
        req.user = verifiedUser; // role  , userid
        // role diye guard korar jnno
        if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
            throw new Error("Forbidden");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = auth;
