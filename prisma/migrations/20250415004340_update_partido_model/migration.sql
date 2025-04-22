/*
  Warnings:

  - You are about to drop the column `pases_errados` on the `Partido` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Partido" DROP COLUMN "pases_errados",
ADD COLUMN     "pases_totales" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "pases_acertados" SET DEFAULT 0;
