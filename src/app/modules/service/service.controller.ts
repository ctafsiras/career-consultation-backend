import catchAsync from "../../../shared/catchAsync";
import { ServiceServices } from "./service.service";

const create = catchAsync(async (req, res) => {
  const service = await ServiceServices.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Service created successfully",
    data: service,
  });
});

const getAll = catchAsync(async (req, res) => {
  const services = await ServiceServices.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: services,
  });
});

const getOne = catchAsync(async (req, res) => {
  const service = await ServiceServices.getOne(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: service,
  });
});

const update = catchAsync(async (req, res) => {
  const service = await ServiceServices.update(Number(req.params.id), req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: service,
  });
});

const remove = catchAsync(async (req, res) => {
  const service = await ServiceServices.remove(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: service,
  });
});

export const ServiceController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
