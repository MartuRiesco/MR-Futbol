/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `minuto` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Evento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "descripcion",
DROP COLUMN "minuto",
DROP COLUMN "tipo",
ADD COLUMN     "asistencias" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "goles" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "imprevistos" INTEGER,
ADD COLUMN     "tiros_al_arco" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Partido" ADD COLUMN     "centros" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "centros_buenos" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "duelos_ganados" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "duelos_totales" INTEGER NOT NULL DEFAULT 0;
