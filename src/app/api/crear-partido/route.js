import { PrismaClient } from '@prisma/client'
export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

// Bloqueamos GET para que Next no intente prerenderizar
export async function GET() {
  return new Response('Method Not Allowed', { status: 405 })
}

export async function POST(req) {
  try {
    const data = await req.json()

    // Parseo de fecha YYYY-MM-DD como local midnight
    const [year, month, day] = data.fecha.split('-').map(Number)
    const fecha = new Date(year, month - 1, day)

    const nuevoPartido = await prisma.partido.create({
      data: {
        fecha,
        rival: data.rival,
        posicion: data.posicion,
        minutos_jugados: parseInt(data.minutos_jugados, 10) || 0,
        pases_totales:   parseInt(data.pases_totales,   10) || 0,
        pases_acertados: parseInt(data.pases_acertados, 10) || 0,
        duelos_totales:  parseInt(data.duelos_totales,  10) || 0,
        duelos_ganados:  parseInt(data.duelos_ganados,  10) || 0,
        centros:         parseInt(data.centros,         10) || 0,
        centros_buenos:  parseInt(data.centros_buenos,  10) || 0,
      }
    })

    return new Response(JSON.stringify(nuevoPartido), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error('❌ Error al guardar partido:', err)
    return new Response('Error al guardar partido', { status: 500 })
  }
}
