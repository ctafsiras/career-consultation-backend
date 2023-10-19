import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { ServiceRoutes } from "./app/modules/service/service.route";
import { BookingRoutes } from "./app/modules/booking/booking.route";
import { ReviewRoutes } from "./app/modules/review/review.route";
import { BlogRoutes } from "./app/modules/blog/blog.route";
import { FAQRoutes } from "./app/modules/faq/faq.route";
import { FeedbackRoutes } from "./app/modules/feedback/feedback.route";
const app: Application = express();

app.use(
  cors({
    origin: "http://192.168.0.106:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/services", ServiceRoutes);
app.use("/api/v1/bookings", BookingRoutes);
app.use("/api/v1/blogs", BlogRoutes);
app.use("/api/v1/faqs", FAQRoutes);
app.use("/api/v1/feedbacks", FeedbackRoutes);
app.use("/api/v1/reviews", ReviewRoutes);

app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Career Consultation API");
});

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
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

export default app;
