import catchAsync from "../../../shared/catchAsync";
import { FAQServices } from "./faq.service";

const create = catchAsync(async (req, res) => {
  const faq = await FAQServices.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Service created successfully",
    data: faq,
  });
});

const getAll = catchAsync(async (req, res) => {
  const faqs = await FAQServices.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Services retrieved successfully",
    data: faqs,
  });
});

const getOne = catchAsync(async (req, res) => {
  const faq = await FAQServices.getOne(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service retrieved successfully",
    data: faq,
  });
});

const update = catchAsync(async (req, res) => {
  const faq = await FAQServices.update(Number(req.params.id), req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service updated successfully",
    data: faq,
  });
});

const remove = catchAsync(async (req, res) => {
  const faq = await FAQServices.remove(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service deleted successfully",
    data: faq,
  });
});

export const FAQController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
