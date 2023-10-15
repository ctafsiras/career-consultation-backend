"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (error, req, res, next) => {
    console.log(`🐱‍🏍 globalErrorHandler ~~`, { error });
    let statusCode = 500;
    let message = "Something went wrong !";
    let errorMessages = [];
    if (error instanceof Error) {
        message = error === null || error === void 0 ? void 0 : error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: "",
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: error === null || error === void 0 ? void 0 : error.stack,
    });
};
exports.default = globalErrorHandler;
