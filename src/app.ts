import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { UserRoute } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRoute);

app.use(globalErrorHandler);

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

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Career Consultation API");
});

export default app;
