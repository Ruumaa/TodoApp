/*
  Warnings:

  - The `status` column on the `Todo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `priority` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('INPROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "priority" "Priority" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INPROGRESS';
