import catchAsync from "../../../shared/catchAsync";
import { BlogServices } from "./blog.service";

const create = catchAsync(async (req, res) => {
  const blog = await BlogServices.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Service created successfully",
    data: blog,
  });
});

const getAll = catchAsync(async (req, res) => {
  const blogs = await BlogServices.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: blogs,
  });
});

const getOne = catchAsync(async (req, res) => {
  const blog = await BlogServices.getOne(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: blog,
  });
});

const update = catchAsync(async (req, res) => {
  const blog = await BlogServices.update(Number(req.params.id), req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: blog,
  });
});

const remove = catchAsync(async (req, res) => {
  const blog = await BlogServices.remove(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: blog,
  });
});

export const BlogController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
