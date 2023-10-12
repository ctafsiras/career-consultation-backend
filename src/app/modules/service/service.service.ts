import { jwtHelpers } from "../../../shared/jwt";
import prisma from "../../../shared/prisma";
import { Service } from "@prisma/client";

const create = async (data: Service): Promise<Service> => {
  const service = await prisma.service.create({
    data,
  });

  return service;
};

const getAll = async (): Promise<Service[]> => {
  const services = await prisma.service.findMany();
  return services;
};

const getOne = async (id: number): Promise<Service> => {
  const service = await prisma.service.findUnique({
    where: {
      id,
    },
  });
  if (!service) {
    throw new Error("Service not found");
  }
  return service;
};

const update = async (id: number, data: Partial<Service>): Promise<Service> => {
  const service = await prisma.service.update({
    where: {
      id,
    },
    data,
  });
  return service;
};

const remove = async (id: number): Promise<Service> => {
  const service = await prisma.service.delete({
    where: {
      id,
    },
  });
  return service;
};

export const ServiceServices = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
