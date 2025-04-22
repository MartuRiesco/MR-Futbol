'use client'
import RadarChart from '@/components/radarChart'
import Image from 'next/image'

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi-layout">
      <div className="foto-column">
        <img src="/bauerani-27.jpeg" alt="Martina Riesco" />
      </div>
      <div className="contenido-column">
        <div className="texto-descripcion">
          <h2>Sobre Mí</h2>
          <p>
            Soy Martina Riesco, jugadora de fútbol profesional, extremo izquierdo en Argentinos Juniors.
            Me apasiona el juego ofensivo, la velocidad en banda y crear situaciones de gol. Con más de
            8 temporadas jugadas, sigo perfeccionando cada pase, cada movimiento, cada jugada.
          </p>
        </div>

        <div className="charts-resumen">
            <div>
          <div className="field-map-box">
            <img src="/mapacalor.jpeg" alt="Mapa de calor" />
          
          </div>
          <div className="radar-chart-small">
          <RadarChart data={[59, 60, 57, 46, 46]} />
        </div></div>
          <div className="info-jugadora">
            <div className="player-summary">
              <div className="team-section">
                <div className="team-logo-name">
                  <img src="/aaaj.png" alt="Escudo" className="team-logo" />
                  <h2>Argentinos Juniors</h2>
                </div>
                <div className="player-data">
                  <div><strong>Nacionalidad:</strong> 🇦🇷 Argentina</div>
                  <div><strong>Fecha Nacimiento:</strong> 26 Ago 2002</div>
                  <div><strong>Edad:</strong> 22 años</div>
                  <div><strong>Altura:</strong> 160 cm</div>
                  <div><strong>Pierna hábil:</strong> Izquierda</div>
                  <div><strong>Posición:</strong> Extremo Izquierdo</div>
                  <div><strong>Dorsal:</strong> 7</div>
                </div>
              </div>

              <div className="stats-summary">
                <div>
                  <h3>Fortalezas</h3>
                  <ul>
                    <li>Velocidad</li>
                    <li>Uno contra uno</li>
                    <li>Precisión de pase</li>
                  </ul>
                </div>
                <div>
                  <h3>Debilidades</h3>
                  <ul>
                    <li>Juego aéreo</li>
                    <li>Defensa posicional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
