# Portafolio · Juan Cruz Enzetti — Senior QA Analyst & QA Automation

Sitio estático (HTML + CSS + JavaScript puro), bilingüe ES/EN, con modo claro/oscuro y diseño responsive.
No necesita build ni dependencias.

## Estructura

```
├── index.html                 # Esqueleto de la página, meta tags y favicon
├── css/styles.css             # Estilos. Colores en los tokens de :root (oscuro) y [data-theme="light"]
├── js/content.js              # ✏️ TODO el contenido (textos ES/EN, experiencia, proyectos, enlaces)
├── js/main.js                 # Render de secciones, terminal animada, tema, idioma, menú
└── assets/CV_Juan_Cruz_Enzetti_QA.pdf   # CV que se descarga desde el sitio
```

## Cómo personalizar

- **Textos, experiencia, proyectos, skills:** editá `js/content.js`. Cada idioma (`es` / `en`) tiene la misma estructura; si agregás algo en uno, agregalo también en el otro.
- **Email, teléfono, LinkedIn, GitHub, CV:** objeto `PROFILE` al principio de `js/content.js`.
- **Colores:** variables `--accent`, `--blue`, `--bg`, etc. en `css/styles.css`.
- **Actualizar el CV:** reemplazá `assets/CV_Juan_Cruz_Enzetti_QA.pdf` (mismo nombre) o cambiá la ruta en `PROFILE.cv`.
- **Nuevo proyecto:** agregá un objeto en `projects.repos` (o un caso en `projects.cases`) en ambos idiomas.

## Probar localmente

Podés abrir `index.html` directamente en el navegador, o levantar un servidor local:

```bash
python -m http.server 5500
```

y entrar a http://localhost:5500

## Publicar en GitHub Pages

1. Creá un repositorio (por ejemplo `JuanEnzetti.github.io` para que quede en `https://juanenzetti.github.io`).
2. Subí estos archivos a la rama `main`.
3. En el repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.

## Publicar en Vercel

1. Importá el repositorio en https://vercel.com/new
2. Framework preset: **Other**. Sin build command ni output directory.
3. Deploy.
