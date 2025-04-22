'use client'
import { useState } from 'react'

export default function PartidoForm() {
  const [formData, setFormData] = useState({
    fecha: '',
    rival: '',
    posicion: '',
    minutos_jugados: '',
    pases_totales: '',
    pases_acertados: '',
    duelos_totales: '',
    duelos_ganados: '',
    centros: '',
    centros_buenos: '',
  })
  const [mensaje, setMensaje] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/crear-partido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!res.ok) throw new Error()

      setMensaje('Partido guardado ✅')
      // limpiar formulario
      setFormData({
        fecha: '',
        rival: '',
        posicion: '',
        minutos_jugados: '',
        pases_totales: '',
        pases_acertados: '',
        duelos_totales: '',
        duelos_ganados: '',
        centros: '',
        centros_buenos: ''
      })
      // disparar evento para refrescar la lista
      window.dispatchEvent(new Event('partidoAdded'))
    } catch {
      setMensaje('Error al guardar ❌')
    }
  }

  return (
    <form className="carga-form" onSubmit={handleSubmit}>
      <h2>Registrar Partido</h2>

      <input
        type="date"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="rival"
        placeholder="Rival"
        value={formData.rival}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="posicion"
        placeholder="Posición"
        value={formData.posicion}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="minutos_jugados"
        placeholder="Minutos jugados"
        value={formData.minutos_jugados}
        onChange={handleChange}
        required
      />

      <label>Pases</label>
      <input
        type="number"
        name="pases_totales"
        placeholder="Pases totales"
        value={formData.pases_totales}
        onChange={handleChange}
      />
      <input
        type="number"
        name="pases_acertados"
        placeholder="Pases acertados"
        value={formData.pases_acertados}
        onChange={handleChange}
      />

      <label>Duelos</label>
      <input
        type="number"
        name="duelos_totales"
        placeholder="Duelos totales"
        value={formData.duelos_totales}
        onChange={handleChange}
      />
      <input
        type="number"
        name="duelos_ganados"
        placeholder="Duelos ganados"
        value={formData.duelos_ganados}
        onChange={handleChange}
      />

      <label>Centros</label>
      <input
        type="number"
        name="centros"
        placeholder="Centros"
        value={formData.centros}
        onChange={handleChange}
      />
      <input
        type="number"
        name="centros_buenos"
        placeholder="Centros buenos"
        value={formData.centros_buenos}
        onChange={handleChange}
      />

      <button type="submit" className='button'>Guardar</button>
      {mensaje && <p className="feedback">{mensaje}</p>}
    </form>
  )
}
