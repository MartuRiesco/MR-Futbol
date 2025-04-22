import './globals.css'
import Header from "@/components/header"

export const metadata = {
  title: 'Martina Riesco',
  description: 'Tu perfil futbolero profesional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
