'use client'
import Image from 'next/image'

export default function PlayerSummary() {
  return (
    <section className="player-summary">
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
      <div className="position-strengths">
        <div className="field-map">
          <img src="/mapadecalor.png" alt="Mapa de cancha"  />
        </div>

        
      </div>
    </section>
  )
}
