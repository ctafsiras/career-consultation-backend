import prisma from "../../../shared/prisma";
import { Booking } from "@prisma/client";

const create = async (data: Booking): Promise<Booking> => {
  const isBooked = await prisma.booking.findFirst({
    where: {
      date: data.date,
      shift: data.shift,
    },
  });
  if (isBooked) {
    throw new Error("This Shift is already booked");
  }
  const booking = await prisma.booking.create({
    data,
    include: {
      user: true,
      service: true,
    },
  });

  return booking;
};

const getAll = async (): Promise<Booking[]> => {
  const bookings = await prisma.booking.findMany({
    include: {
      user: true,
      service: true,
    },
  });
  return bookings;
};

const getOne = async (id: number): Promise<Booking> => {
  const booking = await prisma.booking.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      service: true,
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
    include: {
      user: true,
      service: true,
    },
  });
  return booking;
};

const remove = async (id: number): Promise<Booking> => {
  const booking = await prisma.booking.delete({
    where: {
      id,
    },
    include: {
      user: true,
      service: true,
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
