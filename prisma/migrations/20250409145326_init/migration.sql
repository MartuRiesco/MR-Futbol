-- CreateTable
CREATE TABLE "Partido" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "rival" TEXT NOT NULL,
    "posicion" TEXT NOT NULL,
    "minutos_jugados" INTEGER NOT NULL,
    "pases_acertados" INTEGER NOT NULL,
    "pases_errados" INTEGER NOT NULL,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT,
    "minuto" INTEGER,
    "partidoId" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido"("id") ON DELETE CASCADE ON UPDATE CASCADE;
