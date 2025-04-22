'use client'

import { useState, useEffect } from 'react'

export default function StatsCards() {
  const [metrics, setMetrics] = useState({
    goalsPerMatch: 0,
    assistsPerMatch: 0,
    passAccuracy: 0,
    loaded: false
  })

  useEffect(() => {
    const fetchAndCompute = async () => {
      try {
        const res = await fetch('/api/partidos')
        const partidos = await res.json()
        if (!Array.isArray(partidos) || partidos.length === 0) {
          setMetrics(m => ({ ...m, loaded: true }))
          return
        }

        const totalMatches = partidos.length

        // 1) Goles y asistencias totales
        let sumGoles = 0
        let sumAsist = 0

        // 2) Para precisión: acumulamos precisiones por partido
        let sumAccuracy = 0

        partidos.forEach(p => {
          // Eventos para goles y asistencias
          const goles = (p.eventos || []).reduce((a, e) => a + (e.goles || 0), 0)
          const asis  = (p.eventos || []).reduce((a, e) => a + (e.asistencias || 0), 0)

          sumGoles += goles
          sumAsist += asis

          // Precisión de pase por partido
          const { pases_totales, pases_acertados } = p
          const acc_i = pases_totales > 0
            ? pases_acertados / pases_totales
            : 0
          sumAccuracy += acc_i
        })

        // 3) Calculamos métricas finales
        const goalsPerMatch    = sumGoles / totalMatches
        const assistsPerMatch  = sumAsist / totalMatches
        const avgAccuracy      = (sumAccuracy / totalMatches) * 100
        const passAccuracy     = Math.min(100, avgAccuracy)

        setMetrics({
          goalsPerMatch,
          assistsPerMatch,
          passAccuracy,
          loaded: true
        })
      } catch (err) {
        console.error('Error al calcular métricas:', err)
        setMetrics(m => ({ ...m, loaded: true }))
      }
    }

    fetchAndCompute()
  }, [])

  if (!metrics.loaded) return null

  const format1 = num => (Math.round(num * 10) / 10).toFixed(1)

  return (
    <div className="stats-cards-nba">
      <div className="stat-card-nba">
        <h3>Goles por partido</h3>
        <div className="value">{format1(metrics.goalsPerMatch)}</div>
      </div>
      <div className="stat-card-nba">
        <h3>Precisión de pase</h3>
        <div className="value">{format1(metrics.passAccuracy)}%</div>
      </div>
      <div className="stat-card-nba">
        <h3>Asistencias por partido</h3>
        <div className="value">{format1(metrics.assistsPerMatch)}</div>
      </div>
    </div>
  )
}
