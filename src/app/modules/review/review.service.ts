import prisma from "../../../shared/prisma";
import { Review } from "@prisma/client";

const create = async (data: Review): Promise<Review> => {
  const review = await prisma.review.create({
    data,
  });

  return review;
};

const getAll = async (): Promise<Review[]> => {
  const reviews = await prisma.review.findMany();
  return reviews;
};

const getOne = async (id: number): Promise<Review> => {
  const review = await prisma.review.findUnique({
    where: {
      id,
    },
  });
  if (!review) {
    throw new Error("Review not found");
  }
  return review;
};

const update = async (id: number, data: Partial<Review>): Promise<Review> => {
  const review = await prisma.review.update({
    where: {
      id,
    },
    data,
  });
  return review;
};

const remove = async (id: number): Promise<Review> => {
  const review = await prisma.review.delete({
    where: {
      id,
    },
  });
  return review;
};

export const ReviewServices = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
