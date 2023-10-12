import prisma from "../../../shared/prisma";
import { Blog } from "@prisma/client";

const create = async (data: Blog): Promise<Blog> => {
  const blog = await prisma.blog.create({
    data,
  });

  return blog;
};

const getAll = async (): Promise<Blog[]> => {
  const blogs = await prisma.blog.findMany();
  return blogs;
};

const getOne = async (id: number): Promise<Blog> => {
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  if (!blog) {
    throw new Error("Blog not found");
  }
  return blog;
};

const update = async (id: number, data: Partial<Blog>): Promise<Blog> => {
  const blog = await prisma.blog.update({
    where: {
      id,
    },
    data,
  });
  return blog;
};

const remove = async (id: number): Promise<Blog> => {
  const blog = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return blog;
};

export const BlogServices = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
