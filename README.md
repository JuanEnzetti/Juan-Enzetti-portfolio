# Juan Cruz Enzetti — Portafolio

> Senior QA Analyst · QA Automation con Playwright + TypeScript · IA aplicada al testing · Banca, Fintech y Telecom

Portafolio personal construido con **HTML, CSS y JavaScript puro**, sin frameworks ni proceso de build. Es bilingüe (ES/EN), tiene modo claro y oscuro, y todo su contenido se edita desde un único archivo de datos.

---

## Demo en vivo

🌐 **[juan-enzetti-portfolio.vercel.app](https://juan-enzetti-portfolio.vercel.app)**

---

## Stack tecnológico

| Capa | Tecnología |
|------|------------|
| Estructura | HTML5 semántico |
| Estilos | CSS moderno — custom properties (tokens), Grid, Flexbox, `color-mix()`, `text-wrap: balance` |
| Lógica | JavaScript vanilla (ES6+), sin dependencias |
| Tipografías | [Inter](https://fonts.google.com/specimen/Inter) y [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) vía Google Fonts |
| Íconos | SVG inline con estilo [Lucide](https://lucide.dev) |
| Control de versiones | Git + GitHub |
| Deploy | [Vercel](https://vercel.com) — sitio estático, sin build |

---

## Características

- **Bilingüe ES / EN** — botón para cambiar de idioma; se recuerda la elección y, la primera vez, se detecta el idioma del navegador.
- **Modo oscuro / claro** — respeta la preferencia del sistema y se aplica antes de pintar la página, sin "flash" de color.
- **Totalmente responsive** — probado en 375px (mobile), 768px (tablet) y 1280px (desktop), sin scroll horizontal.
- **Contenido centralizado** — todos los textos, la experiencia, los proyectos y los enlaces viven en `js/content.js`.
- **Timeline de experiencia** — con el rol actual destacado, logro principal y tecnologías de cada puesto.
- **Proyectos y casos de estudio** — proyecto destacado con diagrama del pipeline de QA con IA, repositorios con enlace a demo y casos reales con formato Contexto / Qué hice / Resultado.
- **Formación y certificaciones unificadas** — una sola grilla de tarjetas, diferenciadas por tipo (título en azul, certificación en verde).
- **Hover "encendido"** — las tarjetas arrancan con borde neutro y se iluminan al pasar el mouse o al navegar con teclado.
- **Descarga de CV** en PDF desde el hero y la sección de contacto.
- **Animaciones sutiles** con `IntersectionObserver` y navegación que resalta la sección activa.
- **Accesibilidad** — enlace "Saltar al contenido", foco visible, etiquetas ARIA y respeto por `prefers-reduced-motion`.
- **SEO** — meta description, Open Graph y HTML semántico.

---

## Secciones

| # | Sección | Contenido |
|---|---------|-----------|
| — | Hero | Titular, rol, resumen, CTAs (proyectos, contacto, CV) y cifras clave |
| 01 | Sobre mí | Recorrido profesional y enfoque de trabajo |
| 02 | Skills | 8 categorías: Testing, Automatización, IA aplicada a QA, APIs y datos, Lenguajes, CI/CD, Gestión y Dominio |
| 03 | Experiencia | CFOTech (Telecom), Global66 y QActions Group (Banco Patagonia) |
| 04 | Proyectos | Demo-Playwright, Pronóstico, framework UI + API, este portafolio y 3 casos de estudio |
| 05 | Formación | Títulos y certificaciones en una grilla unificada |
| 06 | Contacto | Email (con botón copiar), LinkedIn, GitHub y CV |

---

## Estructura del proyecto

```
Juan-Enzetti-portfolio/
├── index.html                       ← esqueleto de la página, SEO, favicon y fuentes
├── css/
│   └── styles.css                   ← estilos, tokens de color y responsive
├── js/
│   ├── content.js                   ← ✏️ todo el contenido (ES / EN) y datos de contacto
│   └── main.js                      ← render de secciones, tema, idioma, menú y animaciones
├── assets/
│   └── CV_Juan_Cruz_Enzetti_QA.pdf  ← CV descargable
└── README.md
```

---

## Cómo correrlo localmente

### Requisitos

- Un navegador moderno.
- Opcional: Python 3 (o cualquier servidor estático) para servirlo en `localhost`.

### Clonar

```bash
git clone https://github.com/JuanEnzetti/Juan-Enzetti-portfolio.git
cd Juan-Enzetti-portfolio
```

### Abrir

Podés abrir `index.html` directamente con doble clic, o levantar un servidor local:

```bash
python -m http.server 5500
# → http://localhost:5500
```

> Si no ves un cambio, recargá con **Ctrl + F5** para saltear la caché.

---

## Cómo personalizarlo

| Qué querés cambiar | Dónde |
|--------------------|-------|
| Textos, experiencia, proyectos, skills, certificaciones | `js/content.js` → `CONTENT.es` y `CONTENT.en` (misma estructura en ambos idiomas) |
| Email, LinkedIn, GitHub, ruta del CV | `js/content.js` → objeto `PROFILE` |
| Colores | `css/styles.css` → tokens de `:root` (oscuro) y `[data-theme="light"]` (claro) |
| CV | Reemplazar `assets/CV_Juan_Cruz_Enzetti_QA.pdf` manteniendo el nombre |
| Nuevo proyecto | Agregar un objeto en `projects.repos` (admite `repo` y `demo`) en ambos idiomas |

---

## Tokens de color

| Token | Oscuro | Claro | Uso |
|-------|--------|-------|-----|
| `--bg` | `#0a0f1c` | `#f7f9fc` | Fondo principal |
| `--surface` | `#111a2d` | `#ffffff` | Tarjetas |
| `--border` | `#22304d` | `#dde4ef` | Bordes y divisores |
| `--text` | `#e6ebf5` | `#0f172a` | Texto principal |
| `--text-muted` | `#9aa6bf` | `#475569` | Texto secundario |
| `--accent` | `#34d399` | `#059669` | Acento principal ("test passed"), certificaciones |
| `--blue` | `#60a5fa` | `#2563eb` | Acento secundario, títulos académicos |

---

## Deploy en Vercel

1. Importar el repositorio en [vercel.com/new](https://vercel.com/new).
2. **Framework Preset:** `Other`.
3. Dejar vacíos el *Build Command* y el *Output Directory*.
4. **Deploy.** Cada push a `main` vuelve a publicar el sitio automáticamente.

---

## Contacto

- 💼 [linkedin.com/in/juanenzetti](https://www.linkedin.com/in/juanenzetti)
- 🐙 [github.com/JuanEnzetti](https://github.com/JuanEnzetti)
- ✉️ juancruzenzetti@gmail.com
