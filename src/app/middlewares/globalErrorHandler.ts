/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`🐱‍🏍 globalErrorHandler ~~`, { error });

  let statusCode = 500;
  let message = "Something went wrong !";
  let errorMessages: any = [];

  if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: error?.stack,
  });
};

export default globalErrorHandler;
