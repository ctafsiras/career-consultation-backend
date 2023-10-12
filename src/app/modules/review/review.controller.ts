import catchAsync from "../../../shared/catchAsync";
import { ReviewServices } from "./review.service";

const create = catchAsync(async (req, res) => {
  const review = await ReviewServices.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Service created successfully",
    data: review,
  });
});

const getAll = catchAsync(async (req, res) => {
  const reviews = await ReviewServices.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: reviews,
  });
});

const getOne = catchAsync(async (req, res) => {
  const review = await ReviewServices.getOne(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: review,
  });
});

const update = catchAsync(async (req, res) => {
  const review = await ReviewServices.update(Number(req.params.id), req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: review,
  });
});

const remove = catchAsync(async (req, res) => {
  const review = await ReviewServices.remove(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: review,
  });
});

export const ReviewController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
