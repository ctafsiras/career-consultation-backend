-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "status" SET DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "availability" SET DEFAULT true;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'user';
