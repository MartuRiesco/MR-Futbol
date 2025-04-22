'use client'

import StatsCards from "./statsCards"

export default function HeroBanner() {
  return (
    <section id="inicio" className="hero">
        <img src="/bauerani-2.jpeg" alt="Foto jugadora" />
        <div className="overlay"></div>
        <div className="profile-content">
          <div className="profile-info-nba">
            <h1>Martina Riesco</h1>
            <div className="info-stats-nba">
              <div className="equipo-nba">
               
                <span>Argentinos Juniors</span>
              </div>
              <div className="medidas-nba">
                <div>
                  <div className="label">Altura</div>
                  <div className="valor">1.60 m</div>
                  <div className="sub">/ 5 ft 3 in</div>
                </div>
                <div>
                  <div className="label">Peso</div>
                  <div className="valor">60 kg</div>
                  <div className="sub">/ 132 lbs</div>
                </div>
              </div>
              <div className="detalle-nba">
                <div><span>Nacimiento:</span> 26/08/2002</div>
                <div><span>Edad:</span> 22 años</div>
                <div><span>País:</span> Argentina</div>
              </div>
            </div>
          </div>

          <div className="stats-cards-nba">
            {/* <div className="stat-card-nba">
              <h3>Goles por partido</h3>
              <div className="value">1.2</div>
            </div>
            <div className="stat-card-nba">
              <h3>Precisión de pase</h3>
              <div className="value">78%</div>
            </div>
            <div className="stat-card-nba">
              <h3>Asistencias por partido</h3>
              <div className="value">0.6</div>
            </div> */}
            <StatsCards />
          </div>
        </div>
      </section>
  )
}
