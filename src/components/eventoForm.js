'use client'
import { useState, useEffect } from 'react'

export default function EventoForm() {
  const [formData, setFormData] = useState({
    partidoId: '',
    tiros_al_arco: '',
    goles: '',
    asistencias: '',
    imprevistos: '',
  })
  const [partidos, setPartidos] = useState([])

  useEffect(() => {
    // Carga inicial de partidos
    const fetchPartidos = async () => {
      try {
        const res = await fetch('/api/partidos')
        const data = await res.json()
        setPartidos(data)
      } catch (err) {
        console.error('Error al cargar partidos en EventoForm:', err)
      }
    }

    fetchPartidos()

    // También suscribimos al evento para recargar lista si se añade uno nuevo
    const onPartidoAdded = () => fetchPartidos()
    window.addEventListener('partidoAdded', onPartidoAdded)
    return () => window.removeEventListener('partidoAdded', onPartidoAdded)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/crear-evento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!res.ok) throw new Error()

      alert('Evento registrado ✅')
      setFormData({
        partidoId: '',
        tiros_al_arco: '',
        goles: '',
        asistencias: '',
        imprevistos: ''
      })
    } catch {
      alert('Error al registrar ❌')
    }
  }

  return (
    <form className="carga-form" onSubmit={handleSubmit}>
      <h2>Registrar Evento</h2>

      <select
        name="partidoId"
        value={formData.partidoId}
        onChange={handleChange}
        required
      >
        <option value="">Seleccioná un partido</option>
        {partidos.map(p => (
          <option key={p.id} value={p.id}>
            {new Date(p.fecha).toLocaleDateString()} vs {p.rival}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="tiros_al_arco"
        placeholder="Tiros al arco"
        value={formData.tiros_al_arco}
        onChange={handleChange}
      />
      <input
        type="number"
        name="goles"
        placeholder="Goles"
        value={formData.goles}
        onChange={handleChange}
      />
      <input
        type="number"
        name="asistencias"
        placeholder="Asistencias"
        value={formData.asistencias}
        onChange={handleChange}
      />
      <input
        type="number"
        name="imprevistos"
        placeholder="Imprevistos"
        value={formData.imprevistos}
        onChange={handleChange}
      />

      <button type="submit" className='button'>Guardar</button>
    </form>
  )
}
