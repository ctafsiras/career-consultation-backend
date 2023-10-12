import prisma from "../../../shared/prisma";
import { Booking } from "@prisma/client";

const create = async (data: Booking): Promise<Booking> => {
  const booking = await prisma.booking.create({
    data,
  });

  return booking;
};

const getAll = async (): Promise<Booking[]> => {
  const bookings = await prisma.booking.findMany();
  return bookings;
};

const getOne = async (id: number): Promise<Booking> => {
  const booking = await prisma.booking.findUnique({
    where: {
      id,
    },
  });
  if (!booking) {
    throw new Error("Booking not found");
  }
  return booking;
};

const update = async (id: number, data: Partial<Booking>): Promise<Booking> => {
  const booking = await prisma.booking.update({
    where: {
      id,
    },
    data,
  });
  return booking;
};

const remove = async (id: number): Promise<Booking> => {
  const booking = await prisma.booking.delete({
    where: {
      id,
    },
  });
  return booking;
};

export const BookingServices = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
