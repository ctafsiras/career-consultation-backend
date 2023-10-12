import prisma from "../../../shared/prisma";
import { FAQ } from "@prisma/client";

const create = async (data: FAQ): Promise<FAQ> => {
  const faq = await prisma.fAQ.create({
    data,
  });

  return faq;
};

const getAll = async (): Promise<FAQ[]> => {
  const faqs = await prisma.fAQ.findMany();
  return faqs;
};

const getOne = async (id: number): Promise<FAQ> => {
  const faq = await prisma.fAQ.findUnique({
    where: {
      id,
    },
  });
  if (!faq) {
    throw new Error("FAQ not found");
  }
  return faq;
};

const update = async (id: number, data: Partial<FAQ>): Promise<FAQ> => {
  const faq = await prisma.fAQ.update({
    where: {
      id,
    },
    data,
  });
  return faq;
};

const remove = async (id: number): Promise<FAQ> => {
  const faq = await prisma.fAQ.delete({
    where: {
      id,
    },
  });
  return faq;
};

export const FAQServices = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
