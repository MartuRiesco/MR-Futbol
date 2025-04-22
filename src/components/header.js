'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Image
          src="/logo.png"
          alt="Logo Zurdómetro"
          width={70}
          height={70}
          style={{ borderRadius: '4px' }}
        />
       
      </div>
      <nav>
  <a href="#inicio">Inicio</a>
  <a href="#sobre-mi">Sobre Mí</a>
  <a href="#carga">Carga</a>
  <a href="#recortes">Recortes</a>
  
</nav>
    </header>
  )
}
