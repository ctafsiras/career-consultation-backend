import catchAsync from "../../../shared/catchAsync";
import { FeedbackServices } from "./feedback.service";

const create = catchAsync(async (req, res) => {
  const feedback = await FeedbackServices.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Service created successfully",
    data: feedback,
  });
});

const getAll = catchAsync(async (req, res) => {
  const feedbacks = await FeedbackServices.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: feedbacks,
  });
});

const getOne = catchAsync(async (req, res) => {
  const feedback = await FeedbackServices.getOne(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: feedback,
  });
});

const update = catchAsync(async (req, res) => {
  const feedback = await FeedbackServices.update(Number(req.params.id), req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: feedback,
  });
});

const remove = catchAsync(async (req, res) => {
  const feedback = await FeedbackServices.remove(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: feedback,
  });
});

export const FeedbackController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
