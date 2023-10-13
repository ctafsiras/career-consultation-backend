import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";

const create = catchAsync(async (req, res) => {
  const user = await UserService.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "User created successfully",
    data: user,
  });
});

const login = catchAsync(async (req, res) => {
  const token = await UserService.login(req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    token,
  });
});


const getAll = catchAsync(async (req, res) => {
  
  const users = await UserService.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Users retrieved successfully",
    data: users,
  });
});

const getOne = catchAsync(async (req, res) => {
  const user = await UserService.getOne(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User retrieved successfully",
    data: user,
  });
});

const update = catchAsync(async (req, res) => {
  const user = await UserService.update(Number(req.params.id), req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User updated successfully",
    data: user,
  });
});

const remove = catchAsync(async (req, res) => {
  const user = await UserService.remove(Number(req.params.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User deleted successfully",
    data: user,
  });
});

const getProfile = catchAsync(async (req: any, res) => {
  res.send(req.user);
  console.log(req.user);
  const user = await UserService.getOne(Number(req.user.id));
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User retrieved successfully",
    data: user,
  });
});

export const UserController = {
  create,
  login,
  getAll,
  getOne,
  update,
  remove,
  getProfile,
};
