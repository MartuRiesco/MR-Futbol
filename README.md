# ⚽ MR — Perfil Futbolístico Profesional

**Zurdómetro** ha evolucionado a **"MR"**, una SPA personalizada para mostrar y registrar el rendimiento futbolístico de Martina Riesco, jugadora de Argentinos Juniors.

Este proyecto tiene como objetivo brindar una herramienta visual y de autoconocimiento deportivo, enfocada en destacar fortalezas, registrar partidos, y acompañar el crecimiento personal con ayuda de un psicólogo deportivo.

---

## 🧠 Tecnologías

- **Next.js** (App Router)
- **React.js**
- **PostgreSQL** (con Prisma ORM)
- **CSS Vanilla** (No Tailwind porque explotó)
- **Vercel** (deployment más adelante)
- **Chart.js** (para visualizaciones tipo radar)

---

## 📂 Estructura del Proyecto

```
zurdometro/
├── public/
│   ├── martina.jpg (foto)
│   ├── aaaj.png (logo de Argentinos Juniors)
│   └── field-map.png (mapa de calor estático)
│
├── src/
│   ├── app/
│   │   ├── page.jsx (landing principal)
│   │   ├── api/
│   │   │   └── crear-partido/route.js (handler POST)
│   │   └── styles/
│   │       └── globals.css (estilos principales)
│   ├── components/
│   │   ├── header.jsx
│   │   ├── radarChart.jsx
│   │   ├── playerSummary.jsx
│   │   └── partidoForm.jsx
│
├── prisma/
│   └── schema.prisma (modelo de BD)
└── .env (configuración DB local)
```

---

## 🗃️ Base de Datos

### Modelo actual `Partido`:

```prisma
model Partido {
  id               Int      @id @default(autoincrement())
  fecha            DateTime
  rival            String
  posicion         String
  minutos_jugados  Int
  pases_totales    Int
  pases_acertados  Int
  createdAt        DateTime @default(now())
}
```

> 💡 Los pases errados **no se guardan**: se calculan implícitamente como `pases_totales - pases_acertados`.

---

## 📉 Funcionalidades actuales

### ✅ Sección Banner

- Imagen de fondo tipo Hero con tu nombre, equipo, stats destacadas (goles, asistencias, pases).

### ✅ Sección Sobre Mí

- Foto tuya
- Texto descriptivo
- Radar Chart con atributos
- Mapa de calor fijo con posición
- Fortalezas y debilidades

### ✅ Carga de Datos

- Formulario funcional
- Guarda partidos en la base
- Campos:
  - Fecha
  - Rival
  - Posición
  - Minutos jugados
  - Pases totales
  - Pases acertados

---

## ⚠️ Cosas pendientes / backlog

- [ ] Visualización dinámica de los datos cargados (estadísticas generales)
- [ ] Listado de partidos jugados (tabla o tarjetas)
- [ ] Scroll interno desde el menú (SPA completa)
- [ ] Animaciones o feedback visual al guardar partido
- [ ] Upload de videos de recortes
- [ ] Modo oscuro (por facha)

---

## ⚙️ Configuración local

1. Cloná el repo
2. Instalá dependencias:

```bash
npm install
```

3. Configurá el archivo `.env`:

```
DATABASE_URL="postgresql://tu_usuario:tu_password@localhost:5432/zurdometro"
```

4. Iniciá Prisma y aplicá migraciones:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Corré el servidor local:

```bash
npm run dev
```

---

## 🔹 Capturas

> (Añadir screenshots del banner, sobre mí, y carga de partidos si se desea ilustrar)

---

## 🧠 Bonus psicológico

Este proyecto también sirve como acompañamiento emocional y refuerzo positivo basado en hechos reales. Cada gol registrado es una victoria contra la duda. Cada asistencia, una prueba de confianza. Esta no es solo una web: es tu *highlight reel mental*.

---

> Con amor, código, y zurda letal. — Martina Riesco

