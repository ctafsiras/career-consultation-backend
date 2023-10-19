"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const user_route_1 = require("./app/modules/user/user.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const service_route_1 = require("./app/modules/service/service.route");
const booking_route_1 = require("./app/modules/booking/booking.route");
const review_route_1 = require("./app/modules/review/review.route");
const blog_route_1 = require("./app/modules/blog/blog.route");
const faq_route_1 = require("./app/modules/faq/faq.route");
const feedback_route_1 = require("./app/modules/feedback/feedback.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "https://career-consultation-backend.vercel.app",
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/users", user_route_1.UserRoutes);
app.use("/api/v1/services", service_route_1.ServiceRoutes);
app.use("/api/v1/bookings", booking_route_1.BookingRoutes);
app.use("/api/v1/blogs", blog_route_1.BlogRoutes);
app.use("/api/v1/faqs", faq_route_1.FAQRoutes);
app.use("/api/v1/feedbacks", feedback_route_1.FeedbackRoutes);
app.use("/api/v1/reviews", review_route_1.ReviewRoutes);
app.use(globalErrorHandler_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to the Career Consultation API");
});
//handle not found
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "API Not Found",
            },
        ],
    });
    next();
});
exports.default = app;
