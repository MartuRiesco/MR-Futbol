'use client'



import EventoForm from './eventoForm'
import PartidoForm from './partidoForm'

export default function Carga() {
  return (
    <section  className="carga-section">
      <div className="carga-grid">
        <div className="carga-box">
          <PartidoForm />
        </div>
        <div className="carga-box">
          <EventoForm />
        </div>
      </div>
    </section>
  )
}
