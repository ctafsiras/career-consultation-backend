import { jwtHelpers } from "../../../shared/jwt";
import prisma from "../../../shared/prisma";
import { User } from "@prisma/client";

const create = async (data: User): Promise<string> => {
  const user = await prisma.user.create({
    data,
  });
  if (!user) {
    new Error("User not found");
  }
  const payload = {
    role: user?.role,
    id: user?.id,
  };
  const secret = process.env.JWT_SECRET as string;
  const token = jwtHelpers.createToken(payload, secret, "365d");
  return token;
};

const login = async (data: Partial<User>): Promise<string | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  console.log(user);
  const payload = {
    role: user?.role,
    id: user?.id,
  };
  const secret = process.env.JWT_SECRET as string;
  const token = jwtHelpers.createToken(payload, secret, "365d");
  return token;
};

const getAll = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

const getOne = async (id: number): Promise<User> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const update = async (id: number, data: Partial<User>): Promise<User> => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return user;
};

const remove = async (id: number): Promise<User> => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};

export const UserService = {
  create,
  login,
  getAll,
  getOne,
  update,
  remove,
};
