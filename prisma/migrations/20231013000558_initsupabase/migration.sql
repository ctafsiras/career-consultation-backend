/*
  Warnings:

  - Added the required column `date` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shift` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookingShift" AS ENUM ('SUNRISE_STRATEGY', 'MORNING_MASTERY', 'LUNCHTIME_LEARNING', 'AFTERNOON_ADVANCEMENT', 'TWILIGHT_TACTICS', 'EVENING_EXCELLENCE', 'NIGHTLY_NAVIGATION', 'MIDNIGHT_MOTIVATION');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "shift" "BookingShift" NOT NULL;
