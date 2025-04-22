// src/app/api/crear-evento/route.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const data = await req.json()
    // Se espera que data incluya: partidoId, tiros_al_arco, goles, asistencias e imprevistos
    const nuevoEvento = await prisma.evento.create({
      data: {
        partidoId: parseInt(data.partidoId),
        tiros_al_arco: parseInt(data.tiros_al_arco) || 0,
        goles: parseInt(data.goles) || 0,
        asistencias: parseInt(data.asistencias) || 0,
        imprevistos: data.imprevistos ? parseInt(data.imprevistos) : null,
      }
    })

    return Response.json({ mensaje: 'Evento guardado', evento: nuevoEvento })
  } catch (err) {
    console.error('❌ Error al guardar el evento:', err)
    return new Response('Error al guardar el evento', { status: 500 })
  }
}
