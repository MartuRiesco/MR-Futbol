'use client'
import Image from 'next/image'
import RadarChart from '@/components/radarChart'
import PlayerSummary from '@/components/playerSummary'
import PartidoForm from '@/components/partidoForm'
import SobreMi from '@/components/sobreMi'
import PartidosList from '@/components/partidosList'
import EventoForm from '@/components/eventoForm'
import HeroBanner from '@/components/heroBanner'
import Carga from '@/components/carga'

export default function Home() {
  return (
    <main>
      <HeroBanner />      
  {/* SOBRE MI SECCION */}
    <SobreMi></SobreMi>
    <div  id='carga' className="carga-container">
    <h1 className="carga-title">CARGA DE PARTIDOS</h1>
<Carga/>
{/* <div className="forms-wrapper">
  <div className="form-box">
    <PartidoForm />
  </div>
  <div className="form-box">
    <EventoForm />
  </div>
</div> */}
      </div>
      <PartidosList/>
    </main>
  )
}
