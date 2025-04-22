// src/app/api/partidos/[id]/route.js
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function DELETE(req, { params }) {
  const id = parseInt(params.id, 10)
  try {
    // Primero, borramos los eventos (si tu DB los elimina en cascada no haría falta)
    // await prisma.evento.deleteMany({ where: { partidoId: id } })

    // Luego borramos el partido
    await prisma.partido.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error al borrar partido:', error)
    return NextResponse.json(
      { error: 'No se pudo borrar el partido' },
      { status: 500 }
    )
  }
}
