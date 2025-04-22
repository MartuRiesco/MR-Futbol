import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
  try {
    const partidos = await prisma.partido.findMany({
      orderBy: { fecha: 'desc' },
      include: { eventos: true }    // <-- incluimos los eventos relacionados
    })
    return new Response(JSON.stringify(partidos), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error al obtener partidos:', error)
    return new Response('Error al obtener partidos', { status: 500 })
  }
}
