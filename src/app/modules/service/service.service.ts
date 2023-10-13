import { jwtHelpers } from "../../../shared/jwt";
import { paginationHelpers } from "../../../shared/pagination";
import prisma from "../../../shared/prisma";
import { Prisma, Service } from "@prisma/client";

const create = async (data: Service): Promise<Service> => {
  const service = await prisma.service.create({
    data,
  });

  return service;
};

const getAll = async (filters: any, options: any): Promise<Service[]> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
  console.log(options);
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: ["name", "price"].map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.ServiceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const services = await prisma.service.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });
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
