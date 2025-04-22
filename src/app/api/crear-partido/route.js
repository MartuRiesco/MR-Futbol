// src/app/api/crear-partido/route.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const data = await req.json()

    const nuevoPartido = await prisma.partido.create({
      data: {
        fecha: new Date(data.fecha),
        rival: data.rival,
        posicion: data.posicion,
        minutos_jugados: parseInt(data.minutos_jugados) || 0,
        pases_totales: parseInt(data.pases_totales) || 0,
        pases_acertados: parseInt(data.pases_acertados) || 0,
        duelos_totales: parseInt(data.duelos_totales) || 0,
        duelos_ganados: parseInt(data.duelos_ganados) || 0,
        centros: parseInt(data.centros) || 0,
        centros_buenos: parseInt(data.centros_buenos) || 0,
      }
    })

    return Response.json({ mensaje: 'Guardado', partido: nuevoPartido })
  } catch (err) {
    console.error('❌ Error al guardar:', err)
    return new Response('Error al guardar el partido', { status: 500 })
  }
}
