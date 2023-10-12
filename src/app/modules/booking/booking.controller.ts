import catchAsync from "../../../shared/catchAsync";
import { BookingServices } from "./booking.service";

const create = catchAsync(async (req, res) => {
  const booking = await BookingServices.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Service created successfully",
    data: booking,
  });
});

const getAll = catchAsync(async (req, res) => {
  const bookings = await BookingServices.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: bookings,
  });
});

const getOne = catchAsync(async (req, res) => {
  const booking = await BookingServices.getOne(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: booking,
  });
});

const update = catchAsync(async (req, res) => {
  const booking = await BookingServices.update(Number(req.params.id), req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: booking,
  });
});

const remove = catchAsync(async (req, res) => {
  const booking = await BookingServices.remove(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: booking,
  });
});

export const BookingController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
