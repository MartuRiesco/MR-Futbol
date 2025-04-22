// src/components/PartidosList.jsx
'use client'
import { useEffect, useState } from 'react'

export default function PartidosList() {
  const [partidos, setPartidos] = useState([])
  const [openId, setOpenId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Carga inicial y recarga al añadir partido
  useEffect(() => {
    const fetchPartidos = async () => {
      try {
        const res = await fetch('/api/partidos')
        const data = await res.json()
        setPartidos(data)
      } catch (err) {
        console.error('Error al cargar partidos:', err)
      }
    }
    fetchPartidos()
    window.addEventListener('partidoAdded', fetchPartidos)
    return () => window.removeEventListener('partidoAdded', fetchPartidos)
  }, [])

  // Detecta si estamos en móvil
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggle = id => {
    setOpenId(prev => (prev === id ? null : id))
  }

  const handleDelete = async id => {
    if (!confirm('¿Seguro que deseas borrar este partido?')) return
    try {
      const res = await fetch(`/api/partidos/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error()

      // Recarga toda la página para actualizar lista y estadísticas
      window.location.reload()
    } catch (err) {
      console.error('Error al borrar partido:', err)
      alert('No se pudo borrar el partido.')
    }
  }
  return (
    <section style={{ padding: '1rem 2rem' }}>
      <h2>🗓️ Últimos Partidos</h2>
      {partidos.length === 0 && <p>No hay partidos registrados.</p>}

      {partidos.map(partido => (
        <div key={partido.id} className="match-block">
          <div className="match-header" onClick={() => toggle(partido.id)}>
            {new Date(partido.fecha).toLocaleDateString()} vs {partido.rival}
          </div>

          {openId === partido.id && (
            <div className="match-details">
              {/* Desktop: Tablas */}
              {!isMobile ? (
                <>
                  <table className="stats-table">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Rival</th>
                        <th>Posición</th>
                        <th>Minutos</th>
                        <th>Pases</th>
                        <th>Duelos</th>
                        <th>Centros</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{new Date(partido.fecha).toLocaleDateString()}</td>
                        <td>{partido.rival}</td>
                        <td>{partido.posicion}</td>
                        <td>{partido.minutos_jugados}</td>
                        <td>
                          {partido.pases_acertados} / {partido.pases_totales}
                        </td>
                        <td>
                          {partido.duelos_ganados} / {partido.duelos_totales}
                        </td>
                        <td>
                          {partido.centros_buenos} / {partido.centros}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h3 className="events-title">Eventos</h3>
                  {(!partido.eventos || partido.eventos.length === 0) ? (
                    <p>No hay eventos para este partido.</p>
                  ) : (
                    <table className="events-table">
                      <thead>
                        <tr>
                          <th>Tiros al arco</th>
                          <th>Goles</th>
                          <th>Asistencias</th>
                          <th>Imprevistos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {partido.eventos.map(evt => (
                          <tr key={evt.id}>
                            <td>{evt.tiros_al_arco ?? '-'}</td>
                            <td>{evt.goles ?? '-'}</td>
                            <td>{evt.asistencias ?? '-'}</td>
                            <td>{evt.imprevistos ?? '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </>
              ) : (
                /* Mobile: Listado vertical */
                <>
                  <dl className="mobile-stats">
                    <dt>Fecha</dt>
                    <dd>{new Date(partido.fecha).toLocaleDateString()}</dd>
                    <dt>Rival</dt>
                    <dd>{partido.rival}</dd>
                    <dt>Posición</dt>
                    <dd>{partido.posicion}</dd>
                    <dt>Minutos</dt>
                    <dd>{partido.minutos_jugados}</dd>
                    <dt>Pases (ok/total)</dt>
                    <dd>
                      {partido.pases_acertados} / {partido.pases_totales}
                    </dd>
                    <dt>Duelos (ganados/total)</dt>
                    <dd>
                      {partido.duelos_ganados} / {partido.duelos_totales}
                    </dd>
                    <dt>Centros (buenos/total)</dt>
                    <dd>
                      {partido.centros_buenos} / {partido.centros}
                    </dd>
                  </dl>

                  <h3 className="events-title">Eventos</h3>
                  {(!partido.eventos || partido.eventos.length === 0) ? (
                    <p>No hay eventos.</p>
                  ) : (
                    partido.eventos.map(evt => (
                      <dl key={evt.id} className="mobile-events">
                        <dt>Tiros al arco</dt>
                        <dd>{evt.tiros_al_arco ?? '-'}</dd>
                        <dt>Goles</dt>
                        <dd>{evt.goles ?? '-'}</dd>
                        <dt>Asistencias</dt>
                        <dd>{evt.asistencias ?? '-'}</dd>
                        <dt>Imprevistos</dt>
                        <dd>{evt.imprevistos ?? '-'}</dd>
                      </dl>
                    ))
                  )}
                </>
              )}

              {/* Botón de borrar partido */}
              <button type="submit" className='button'
                onClick={() => handleDelete(partido.id)}
              >
                Borrar partido
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
