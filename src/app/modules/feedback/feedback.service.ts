import prisma from "../../../shared/prisma";
import { Feedback } from "@prisma/client";

const create = async (data: Feedback): Promise<Feedback> => {
  const feedback = await prisma.feedback.create({
    data,
  });

  return feedback;
};

const getAll = async (): Promise<Feedback[]> => {
  const feedbacks = await prisma.feedback.findMany();
  return feedbacks;
};

const getOne = async (id: number): Promise<Feedback> => {
  const feedback = await prisma.feedback.findUnique({
    where: {
      id,
    },
  });
  if (!feedback) {
    throw new Error("Feedback not found");
  }
  return feedback;
};

const update = async (id: number, data: Partial<Feedback>): Promise<Feedback> => {
  const feedback = await prisma.feedback.update({
    where: {
      id,
    },
    data,
  });
  return feedback;
};

const remove = async (id: number): Promise<Feedback> => {
  const feedback = await prisma.feedback.delete({
    where: {
      id,
    },
  });
  return feedback;
};

export const FeedbackServices = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
