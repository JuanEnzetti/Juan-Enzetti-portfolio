/* =============================================================
   CONTENIDO DEL PORTAFOLIO
   -------------------------------------------------------------
   Este es el ÚNICO archivo que necesitás editar para cambiar
   textos, experiencia, proyectos o enlaces.

   - PROFILE: datos de contacto y enlaces (iguales en ES y EN).
   - CONTENT.es / CONTENT.en: todos los textos por idioma.
     Mantené la misma estructura en ambos idiomas.
   - Los textos pueden incluir HTML simple (<strong>, <em>, <span class="hl">).
   ============================================================= */

const PROFILE = {
  name: "Juan Cruz Enzetti",
  initials: "JE",
  email: "juancruzenzetti@gmail.com",
  linkedin: "https://www.linkedin.com/in/juanenzetti",
  linkedinLabel: "linkedin.com/in/juanenzetti",
  github: "https://github.com/JuanEnzetti",
  githubLabel: "github.com/JuanEnzetti",
  cv: "assets/CV_Juan_Cruz_Enzetti_QA.pdf",
};

const CONTENT = {
  /* ===================== ESPAÑOL ===================== */
  es: {
    meta: {
      title: "Juan Cruz Enzetti · Senior QA Analyst & QA Automation",
      description:
        "Portafolio de Juan Cruz Enzetti, Senior QA Analyst en transición a QA Automation: Playwright + TypeScript, Python + Selenium, API testing e IA aplicada a QA.",
    },

    ui: {
      skip: "Saltar al contenido",
      themeToLight: "Cambiar a modo claro",
      themeToDark: "Cambiar a modo oscuro",
      langSwitch: "Switch to English",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      copy: "Copiar",
      copied: "¡Copiado!",
      viewRepo: "Ver repositorio",
      viewDemo: "Ver demo",
      present: "Presente",
    },

    nav: [
      { id: "sobre-mi", label: "Sobre mí" },
      { id: "skills", label: "Skills" },
      { id: "experiencia", label: "Experiencia" },
      { id: "proyectos", label: "Proyectos" },
      { id: "contacto", label: "Contacto" },
    ],

    hero: {
      status: "Abierto a roles de QA Automation",
      greeting: "Hola, soy Juan Cruz Enzetti",
      role: "Senior QA Analyst · QA Automation",
      title:
        'Rompo el software <span class="hl">a propósito</span> para que tus usuarios disfruten una experiencia sin&nbsp;fallos.',
      lead:
        "Más de 5 años impulsando la calidad de software en entornos bancarios, fintech y telecomunicaciones. Experiencia en QA funcional, automatización E2E con <strong>Playwright + TypeScript</strong> e <strong>IA aplicada al testing</strong>.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactarme",
      ctaCv: "Descargar CV",
      location: "Buenos Aires, Argentina",
      stats: [
        { value: "5+", label: "años en QA" },
        { value: "3", label: "industrias reguladas" },
        { value: "2", label: "frameworks de automatización" },
      ],
    },

    about: {
      eyebrow: "01 · sobre-mí",
      title: "Calidad como parte del producto, no como etapa final",
      paragraphs: [
        "Mi trabajo es encontrar lo que puede salir mal antes de que le pase a un usuario. Empecé en <strong>banca core</strong>, probando Bantotal y AS/400 para Banco Patagonia. Ahí aprendí que un error en una regla de negocio cuesta dinero real.",
        "En <strong>Global66</strong>, una fintech de remesas que opera en varios países, cada país tenía sus propias reglas. Trabajé con Legales, Finanzas, bancos y empresas de pagos transfronterizos en proyectos regulatorios como PSP y Split Onboarding, y automaticé regresiones con Python y Selenium antes de cada salida a producción.",
        "Hoy soy <strong>Senior QA Analyst</strong> en el proyecto Salesforce B2B de Telecom (Personal). Impulsé que el equipo de QA trabaje con agentes de IA en Jira para generar casos de prueba, redactar bugs, documentar y analizar logs. Hoy lo usa todo el equipo.",
        "Arranqué como tester manual, y ese ojo crítico es lo que hace que la automatización y la IA funcionen. Busco crecer como <strong>QA Automation Engineer</strong> en un equipo que vea la calidad como parte del producto.",
      ],
      focusTitle: "Mi enfoque",
      focus: [
        {
          icon: "search",
          title: "Desde el requerimiento",
          text: "Participo desde el análisis funcional hasta la validación end-to-end.",
        },
        {
          icon: "layers",
          title: "Automatizar lo que se repite",
          text: "Regresiones E2E que corren antes de cada salida a producción.",
        },
        {
          icon: "sparkles",
          title: "IA con reglas claras",
          text: "La IA acelera el trabajo, pero nunca “arregla” un test para ocultar un bug real.",
        },
        {
          icon: "eye",
          title: "Ojo de usuario",
          text: "Formación en UX/UI aplicada al testing exploratorio y de usabilidad.",
        },
      ],
    },

    skills: {
      eyebrow: "02 · skills",
      title: "Competencias técnicas",
      lead: "Herramientas y prácticas que uso a diario, organizadas por área.",
      groups: [
        {
          icon: "flask",
          title: "Testing",
          desc: "Diseño y ejecución de pruebas",
          items: ["Manual", "Exploratorio", "Funcional", "Regresión", "Smoke", "Integración", "UAT", "Performance (JMeter)"],
        },
        {
          icon: "code",
          title: "Automatización",
          desc: "E2E y UI, mantenibles y en CI",
          items: ["Playwright", "Selenium WebDriver", "Pytest", "Behave", "Page Object Model", "End-to-End"],
        },
        {
          icon: "sparkles",
          title: "IA aplicada a QA",
          desc: "Generación de casos, triage y reportes",
          items: ["Prompt Engineering", "LLMs", "Agentes de IA", "Claude Code", "Playwright MCP"],
        },
        {
          icon: "plug",
          title: "APIs y datos",
          desc: "Servicios REST y consistencia de datos",
          items: ["API Testing REST", "Postman", "Requests", "Microservicios", "SQL", "PostgreSQL", "AS/400"],
        },
        {
          icon: "terminal",
          title: "Lenguajes y desarrollo",
          desc: "Para tests, herramientas y apps",
          items: ["TypeScript", "Python", "JavaScript", "Java", "React", "Node.js", "Spring Boot", "Tailwind CSS"],
        },
        {
          icon: "cloud",
          title: "CI/CD y cloud",
          desc: "Pruebas integradas al pipeline",
          items: ["GitHub Actions", "Git", "GitLab", "AWS CloudWatch", "AWS CodePipeline", "AWS CloudFormation", "Vercel"],
        },
        {
          icon: "clipboard",
          title: "Gestión y métodos",
          desc: "Trazabilidad y trabajo en equipo",
          items: ["Jira", "Xray", "Confluence", "BDD", "Gherkin", "Scrum", "Kanban"],
        },
        {
          icon: "building",
          title: "Dominio",
          desc: "Industrias reguladas",
          items: ["Salesforce", "Bantotal", "Banca", "Fintech", "Telecom"],
        },
      ],
    },

    experience: {
      eyebrow: "03 · experiencia",
      title: "Experiencia laboral",
      items: [
        {
          role: "Senior QA Analyst",
          company: "CFOTech IT Global Services",
          client: "Cliente: Telecom (Personal) · Salesforce B2B",
          start: "Jun 2025",
          end: null, // null = "Presente"
          location: "Buenos Aires, Argentina",
          summary:
            "Proyecto Salesforce B2B de Telecom, desde el análisis de requerimientos hasta la validación end-to-end.",
          highlight: "Lideré la adopción de agentes de IA en el equipo de QA.",
          bullets: [
            ["Testing funcional y E2E", "diseño y ejecuto casos funcionales, de regresión, smoke y no funcionales sobre procesos comerciales B2B en Salesforce."],
            ["IA aplicada a QA", "diseño prompts y trabajo con agentes de IA en Jira para generar casos de prueba, redactar reportes de bugs, documentar y analizar logs y bases de datos."],
            ["APIs y datos", "valido servicios REST con Postman y verifico la consistencia de datos con consultas SQL."],
            ["BDD y trazabilidad", "escribo escenarios en Gherkin y gestiono casos y defectos en Jira Xray, con documentación en Confluence."],
            ["Versionado y equipo", "uso GitLab para control de versiones y trabajo con Desarrollo y Producto bajo Scrum y Kanban."],
          ],
          tags: ["Salesforce", "Agentes de IA", "Postman", "SQL", "Gherkin", "Jira Xray", "GitLab"],
        },
        {
          role: "QA Analyst",
          company: "Global66",
          client: "Fintech de remesas multi-país · Web y mobile",
          start: "Nov 2023",
          end: "Jun 2025",
          location: "Buenos Aires, Argentina",
          summary:
            "Equipo de QA de una fintech de remesas que opera en varios países, cada uno con sus propias reglas.",
          highlight: "Regresiones E2E automatizadas antes de cada salida a producción.",
          bullets: [
            ["Automatización", "desarrollé y mantuve flujos de regresión E2E con Python y Selenium, que corrían antes de cada release."],
            ["Testing funcional y exploratorio", "probé flujos transaccionales críticos de envío de dinero en web y mobile."],
            ["Proyectos regulatorios", "participé en el proyecto PSP con Legales, Finanzas, Banco Comafi y el BCRA, y en el Split Onboarding, validando documentación de usuarios extranjeros según las reglas de cada país."],
            ["Performance", "ejecuté pruebas de carga y estrés con JMeter."],
            ["APIs y datos", "validé microservicios REST con Postman y datos con SQL."],
            ["Cloud y CI/CD", "analicé logs en AWS CloudWatch, integré pruebas en AWS CodePipeline y desplegué entornos con CloudFormation."],
            ["Gestión", "reporté defectos y llevé métricas de calidad en Jira, en un equipo Scrum."],
          ],
          tags: ["Python", "Selenium", "JMeter", "Postman", "SQL", "AWS", "Jira"],
        },
        {
          role: "QA Analyst",
          company: "QActions Group",
          client: "Cliente: Banco Patagonia · Banca core",
          start: "Mar 2022",
          end: "Nov 2023",
          location: "Buenos Aires, Argentina",
          summary:
            "Validación de procesos de banca core en Bantotal, con foco en reglas de negocio e integraciones entre módulos.",
          highlight: "Experiencia en Bantotal, uno de los core bancarios más usados en Latinoamérica.",
          bullets: [
            ["Banca core", "validé procesos en Bantotal, con foco en reglas de negocio e integraciones entre módulos."],
            ["Datos y APIs", "consulté y verifiqué datos en AS/400 y con SQL, y probé servicios REST con Postman."],
            ["Incidentes", "analicé logs para encontrar la causa raíz de los incidentes y les hice seguimiento con Desarrollo."],
            ["Diseño y ejecución", "armé casos de prueba a partir del análisis funcional y ejecuté pruebas funcionales, smoke, exploratorias y de regresión en web y mobile."],
            ["Procesos", "documenté y mejoré procesos internos de QA."],
          ],
          tags: ["Bantotal", "AS/400", "SQL", "Postman", "Regresión"],
        },
      ],
    },

    projects: {
      eyebrow: "04 · proyectos",
      title: "Proyectos y casos de estudio",
      lead: "Repositorios públicos de automatización y desarrollo, y casos reales de mi trabajo en equipos de QA.",
      featured: {
        badge: "Destacado",
        title: "Demo-Playwright — Pipeline de QA con IA",
        repo: "https://github.com/JuanEnzetti/Demo-Playwright",
        stack: ["Playwright", "TypeScript", "GitHub Actions", "Claude Code", "Playwright MCP"],
        bullets: [
          "<strong>24 tests E2E</strong> con Page Object Model, componentes y fixtures propias sobre SauceDemo.",
          "Pipeline en GitHub Actions donde Claude revisa el diff de cada Pull Request, agrupa fallos por causa raíz, redacta un resumen para negocio, genera borradores de tickets de Jira y etiqueta la PR por riesgo.",
          "Planificación y generación de tests con agentes de Playwright vía MCP, con reglas para que la IA <strong>nunca oculte un defecto real</strong>. Documenté 5 defectos de la aplicación.",
        ],
        pipelineTitle: "Qué pasa en cada Pull Request",
        pipeline: [
          { icon: "pr", label: "Pull Request" },
          { icon: "flask", label: "24 tests E2E" },
          { icon: "sparkles", label: "Triage por causa raíz" },
          { icon: "file", label: "Resumen + tickets Jira" },
          { icon: "tag", label: "Label por riesgo" },
        ],
      },
      repos: [
        {
          title: "Pronóstico — App del clima en tiempo real",
          repo: "https://github.com/JuanEnzetti/pronostico",
          demo: "https://pronostico-teal.vercel.app/",
          stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide React", "Git", "Vercel"],
          text: "App web con pronóstico por hora y de 7 días, búsqueda de ciudades con autocompletado, detección de ubicación (GPS con respaldo por IP), fondo dinámico según clima y día/noche, y refresco automático. Build verificado en GitHub Actions y deploy en Vercel.",
        },
        {
          title: "Framework de automatización UI + API",
          repo: "https://github.com/JuanEnzetti/proyecto-final-automation-testing-Juan-Enzetti",
          stack: ["Python", "Selenium", "Pytest", "Requests"],
          text: "Page Object Model, tests data-driven desde JSON, ejecución en paralelo con pytest-xdist, reintentos, reporte HTML y capturas en cada fallo. Cubre UI en SauceDemo y API REST en Reqres.",
        },
        {
          title: "Este portafolio — Sitio personal de QA",
          repo: "https://github.com/JuanEnzetti/Juan-Enzetti-portfolio",
          demo: "https://juan-enzetti-portfolio.vercel.app",
          stack: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Vercel"],
          text: "Sitio estático bilingüe (ES/EN) con modo claro/oscuro, diseño responsive y todo el contenido centralizado en un único archivo de datos. Sin frameworks ni build, accesible (foco visible, ARIA, movimiento reducido) y probado en mobile, tablet y desktop.",
        },
      ],
      casesTitle: "Casos de estudio",
      labels: { context: "Contexto", approach: "Qué hice", outcome: "Resultado" },
      cases: [
        {
          tag: "Telecom · IA aplicada",
          title: "Adopción de IA en el equipo de QA",
          context: "Proyecto Salesforce B2B con procesos comerciales complejos y alto volumen de casos de prueba.",
          approach: "Diseñé prompts y flujos con agentes de IA en Jira para generar casos, redactar bugs, documentar y analizar logs y bases de datos.",
          outcome: "La práctica pasó de una prueba personal a un estándar que hoy usa todo el equipo de QA.",
        },
        {
          tag: "Fintech · Automatización",
          title: "Suite de regresión E2E pre-release",
          context: "Flujos de envío de dinero en web y mobile, con reglas distintas por país.",
          approach: "Desarrollé y mantuve regresiones E2E con Python y Selenium, integradas al ciclo de salida a producción.",
          outcome: "Cada release pasaba por una regresión automatizada de los flujos transaccionales críticos.",
        },
        {
          tag: "Fintech · Regulatorio",
          title: "PSP y Split Onboarding",
          context: "Proyectos con Legales, Finanzas, Banco Comafi y el BCRA para operar como PSP en Argentina.",
          approach: "Validé la documentación de usuarios extranjeros según las reglas de cada país y los flujos de onboarding.",
          outcome: "Cobertura de QA sobre requisitos regulatorios en un contexto multi-país.",
        },
      ],
    },

    education: {
      eyebrow: "05 · formación",
      title: "Formación y certificaciones",
      lead: "Formación técnica en calidad de software, complementada con certificaciones en automatización, datos, back-end y seguridad.",
      kindStudy: "Título",
      kindCert: "Certificación",
      studies: [
        { title: "Técnico Superior en Quality Assurance", org: "Teclab Instituto Técnico Superior", date: "2023 – 2025", text: "Formación técnica superior en aseguramiento de la calidad de software: diseño de pruebas, procesos y metodologías de QA." },
        { title: "Diseño UX/UI", org: "Coderhouse", date: "2021", text: "La base del ojo de usuario que hoy aplico al testing exploratorio, de usabilidad y accesibilidad." },
      ],
      certs: [
        { title: "Quality Assurance", skills: ["Test Automation", "API Testing", "Unit Testing", "Integration Testing", "Test Case Design", "Chai.js"] },
        { title: "Automatización QA", org: "Gobierno de la Ciudad de Buenos Aires", date: "2025", skills: ["Python", "Selenium", "Pytest", "Behave", "Page Object Model", "CI/CD"] },
        { title: "Relational Databases", skills: ["SQL", "PostgreSQL", "Database Design", "Database Testing", "Data Modeling", "Bash", "Git"] },
        { title: "Back-End Development and APIs", skills: ["Node.js", "Express.js", "REST APIs", "API Testing", "Authentication", "MongoDB"] },
        { title: "Back-End / Java", org: "Gobierno de la Ciudad de Buenos Aires", date: "2025", skills: ["Java", "Spring Boot", "REST", "Validación de servicios"] },
        { title: "Information Security", skills: ["Web Application Security", "Network Security", "Penetration Testing (fundamentos)", "Helmet.js", "TCP/IP", "Python"] },
        { title: "JavaScript Algorithms and Data Structures", skills: ["Algorithms", "Data Structures", "OOP", "Functional Programming", "Async Programming", "Regex"] },
      ],
    },

    contact: {
      eyebrow: "06 · contacto",
      title: "¿Hablamos de calidad?",
      lead: "Si tu equipo busca a alguien que piense en calidad desde el requerimiento hasta producción, escribime.",
      channels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        cv: "Currículum",
        cvLabel: "Descargar PDF",
      },
    },

    footer: {
      built: "Diseñado y desarrollado por Juan Cruz Enzetti",
      status: "Todos los checks pasaron",
      top: "Volver arriba",
    },
  },

  /* ===================== ENGLISH ===================== */
  en: {
    meta: {
      title: "Juan Cruz Enzetti · Senior QA Analyst & QA Automation",
      description:
        "Portfolio of Juan Cruz Enzetti, Senior QA Analyst moving into QA Automation: Playwright + TypeScript, Python + Selenium, API testing and AI applied to QA.",
    },

    ui: {
      skip: "Skip to content",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      langSwitch: "Cambiar a español",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      copy: "Copy",
      copied: "Copied!",
      viewRepo: "View repository",
      viewDemo: "Live demo",
      present: "Present",
    },

    nav: [
      { id: "sobre-mi", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experiencia", label: "Experience" },
      { id: "proyectos", label: "Projects" },
      { id: "contacto", label: "Contact" },
    ],

    hero: {
      status: "Open to QA Automation roles",
      greeting: "Hi, I'm Juan Cruz Enzetti",
      role: "Senior QA Analyst · QA Automation",
      title:
        'I break software <span class="hl">on purpose</span> so your users enjoy a flawless&nbsp;experience.',
      lead:
        "Over 5 years driving software quality in banking, fintech and telecommunications environments. Experience in functional QA, E2E automation with <strong>Playwright + TypeScript</strong> and <strong>AI applied to testing</strong>.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      ctaCv: "Download CV",
      location: "Buenos Aires, Argentina",
      stats: [
        { value: "5+", label: "years in QA" },
        { value: "3", label: "regulated industries" },
        { value: "2", label: "automation frameworks" },
      ],
    },

    about: {
      eyebrow: "01 · about-me",
      title: "Quality as part of the product, not a final stage",
      paragraphs: [
        "My job is to find what can go wrong before it happens to a user. I started in <strong>core banking</strong>, testing Bantotal and AS/400 for Banco Patagonia. That's where I learned that a bug in a business rule costs real money.",
        "At <strong>Global66</strong>, a remittance fintech operating across several countries, each country had its own rules. I worked with Legal, Finance, banks and cross-border payment companies on regulatory projects such as PSP and Split Onboarding, and automated regression suites with Python and Selenium before every production release.",
        "Today I'm a <strong>Senior QA Analyst</strong> on Telecom's (Personal) Salesforce B2B project. I drove the QA team's adoption of AI agents in Jira to generate test cases, write bug reports, document and analyze logs. The whole team uses it now.",
        "I started as a manual tester, and that critical eye is what makes automation and AI actually work. I'm looking to grow as a <strong>QA Automation Engineer</strong> in a team that sees quality as part of the product.",
      ],
      focusTitle: "My approach",
      focus: [
        {
          icon: "search",
          title: "From the requirement",
          text: "I'm involved from functional analysis all the way to end-to-end validation.",
        },
        {
          icon: "layers",
          title: "Automate what repeats",
          text: "E2E regression suites that run before every production release.",
        },
        {
          icon: "sparkles",
          title: "AI with clear rules",
          text: "AI speeds things up, but it never “fixes” a test to hide a real bug.",
        },
        {
          icon: "eye",
          title: "A user's eye",
          text: "UX/UI training applied to exploratory and usability testing.",
        },
      ],
    },

    skills: {
      eyebrow: "02 · skills",
      title: "Technical skills",
      lead: "Tools and practices I use every day, grouped by area.",
      groups: [
        {
          icon: "flask",
          title: "Testing",
          desc: "Test design and execution",
          items: ["Manual", "Exploratory", "Functional", "Regression", "Smoke", "Integration", "UAT", "Performance (JMeter)"],
        },
        {
          icon: "code",
          title: "Automation",
          desc: "Maintainable E2E and UI, in CI",
          items: ["Playwright", "Selenium WebDriver", "Pytest", "Behave", "Page Object Model", "End-to-End"],
        },
        {
          icon: "sparkles",
          title: "AI applied to QA",
          desc: "Test generation, triage and reporting",
          items: ["Prompt Engineering", "LLMs", "AI Agents", "Claude Code", "Playwright MCP"],
        },
        {
          icon: "plug",
          title: "APIs & data",
          desc: "REST services and data consistency",
          items: ["REST API Testing", "Postman", "Requests", "Microservices", "SQL", "PostgreSQL", "AS/400"],
        },
        {
          icon: "terminal",
          title: "Languages & development",
          desc: "For tests, tooling and apps",
          items: ["TypeScript", "Python", "JavaScript", "Java", "React", "Node.js", "Spring Boot", "Tailwind CSS"],
        },
        {
          icon: "cloud",
          title: "CI/CD & cloud",
          desc: "Tests wired into the pipeline",
          items: ["GitHub Actions", "Git", "GitLab", "AWS CloudWatch", "AWS CodePipeline", "AWS CloudFormation", "Vercel"],
        },
        {
          icon: "clipboard",
          title: "Management & methods",
          desc: "Traceability and teamwork",
          items: ["Jira", "Xray", "Confluence", "BDD", "Gherkin", "Scrum", "Kanban"],
        },
        {
          icon: "building",
          title: "Domain",
          desc: "Regulated industries",
          items: ["Salesforce", "Bantotal", "Banking", "Fintech", "Telecom"],
        },
      ],
    },

    experience: {
      eyebrow: "03 · experience",
      title: "Work experience",
      items: [
        {
          role: "Senior QA Analyst",
          company: "CFOTech IT Global Services",
          client: "Client: Telecom (Personal) · Salesforce B2B",
          start: "Jun 2025",
          end: null,
          location: "Buenos Aires, Argentina",
          summary:
            "Telecom's Salesforce B2B project, from requirements analysis to end-to-end validation.",
          highlight: "Led the adoption of AI agents across the QA team.",
          bullets: [
            ["Functional & E2E testing", "I design and run functional, regression, smoke and non-functional test cases for B2B sales processes in Salesforce."],
            ["AI applied to QA", "I design prompts and work with AI agents in Jira to generate test cases, write bug reports, and document and analyze logs and databases."],
            ["APIs & data", "I validate REST services with Postman and check data consistency with SQL queries."],
            ["BDD & traceability", "I write Gherkin scenarios and manage test cases and defects in Jira Xray, with documentation in Confluence."],
            ["Versioning & team", "I use GitLab for version control and work with Development and Product under Scrum and Kanban."],
          ],
          tags: ["Salesforce", "AI agents", "Postman", "SQL", "Gherkin", "Jira Xray", "GitLab"],
        },
        {
          role: "QA Analyst",
          company: "Global66",
          client: "Multi-country remittance fintech · Web & mobile",
          start: "Nov 2023",
          end: "Jun 2025",
          location: "Buenos Aires, Argentina",
          summary:
            "QA team of a remittance fintech operating across several countries, each with its own rules.",
          highlight: "Automated E2E regression before every production release.",
          bullets: [
            ["Automation", "built and maintained E2E regression flows with Python and Selenium that ran before every release."],
            ["Functional & exploratory testing", "tested critical money-transfer flows on web and mobile."],
            ["Regulatory projects", "took part in the PSP project with Legal, Finance, Banco Comafi and the Central Bank (BCRA), and in Split Onboarding, validating foreign users' documentation against each country's rules."],
            ["Performance", "ran load and stress tests with JMeter."],
            ["APIs & data", "validated REST microservices with Postman and data with SQL."],
            ["Cloud & CI/CD", "analyzed logs in AWS CloudWatch, integrated tests into AWS CodePipeline and deployed environments with CloudFormation."],
            ["Management", "reported defects and tracked quality metrics in Jira, within a Scrum team."],
          ],
          tags: ["Python", "Selenium", "JMeter", "Postman", "SQL", "AWS", "Jira"],
        },
        {
          role: "QA Analyst",
          company: "QActions Group",
          client: "Client: Banco Patagonia · Core banking",
          start: "Mar 2022",
          end: "Nov 2023",
          location: "Buenos Aires, Argentina",
          summary:
            "Validation of core banking processes in Bantotal, focused on business rules and integrations between modules.",
          highlight: "Hands-on experience with Bantotal, one of the most widely used core banking platforms in Latin America.",
          bullets: [
            ["Core banking", "validated processes in Bantotal, focusing on business rules and module integrations."],
            ["Data & APIs", "queried and verified data in AS/400 and with SQL, and tested REST services with Postman."],
            ["Incidents", "analyzed logs to find the root cause of incidents and followed up with Development."],
            ["Design & execution", "built test cases from functional analysis and ran functional, smoke, exploratory and regression tests on web and mobile."],
            ["Processes", "documented and improved internal QA processes."],
          ],
          tags: ["Bantotal", "AS/400", "SQL", "Postman", "Regression"],
        },
      ],
    },

    projects: {
      eyebrow: "04 · projects",
      title: "Projects & case studies",
      lead: "Public automation and development repositories, and real cases from my work in QA teams.",
      featured: {
        badge: "Featured",
        title: "Demo-Playwright — AI-powered QA pipeline",
        repo: "https://github.com/JuanEnzetti/Demo-Playwright",
        stack: ["Playwright", "TypeScript", "GitHub Actions", "Claude Code", "Playwright MCP"],
        bullets: [
          "<strong>24 E2E tests</strong> with Page Object Model, custom components and fixtures on SauceDemo.",
          "GitHub Actions pipeline where Claude reviews each Pull Request diff, groups failures by root cause, writes a business-facing summary, drafts Jira tickets and labels the PR by risk.",
          "Test planning and generation with Playwright agents via MCP, with rules so the AI <strong>never hides a real defect</strong>. I documented 5 defects in the application.",
        ],
        pipelineTitle: "What happens on every Pull Request",
        pipeline: [
          { icon: "pr", label: "Pull Request" },
          { icon: "flask", label: "24 E2E tests" },
          { icon: "sparkles", label: "Root-cause triage" },
          { icon: "file", label: "Summary + Jira drafts" },
          { icon: "tag", label: "Risk label" },
        ],
      },
      repos: [
        {
          title: "Pronóstico — Real-time weather app",
          repo: "https://github.com/JuanEnzetti/pronostico",
          demo: "https://pronostico-teal.vercel.app/",
          stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide React", "Git", "Vercel"],
          text: "Web app with hourly and 7-day forecasts, city search with autocomplete, location detection (GPS with IP fallback), a background that adapts to weather and day/night, and auto-refresh. Build checked in GitHub Actions and deployed on Vercel.",
        },
        {
          title: "UI + API automation framework",
          repo: "https://github.com/JuanEnzetti/proyecto-final-automation-testing-Juan-Enzetti",
          stack: ["Python", "Selenium", "Pytest", "Requests"],
          text: "Page Object Model, data-driven tests from JSON, parallel runs with pytest-xdist, retries, HTML report and screenshots on every failure. Covers UI on SauceDemo and a REST API on Reqres.",
        },
        {
          title: "This portfolio — Personal QA website",
          repo: "https://github.com/JuanEnzetti/Juan-Enzetti-portfolio",
          demo: "https://juan-enzetti-portfolio.vercel.app",
          stack: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Vercel"],
          text: "Bilingual (ES/EN) static site with light/dark mode, responsive design and all content centralized in a single data file. No frameworks or build step, accessible (visible focus, ARIA, reduced motion) and tested on mobile, tablet and desktop.",
        },
      ],
      casesTitle: "Case studies",
      labels: { context: "Context", approach: "What I did", outcome: "Outcome" },
      cases: [
        {
          tag: "Telecom · Applied AI",
          title: "AI adoption in the QA team",
          context: "Salesforce B2B project with complex sales processes and a high volume of test cases.",
          approach: "Designed prompts and AI-agent workflows in Jira to generate cases, write bug reports, document and analyze logs and databases.",
          outcome: "It went from a personal experiment to a standard the whole QA team uses today.",
        },
        {
          tag: "Fintech · Automation",
          title: "Pre-release E2E regression suite",
          context: "Money-transfer flows on web and mobile, with different rules per country.",
          approach: "Built and maintained E2E regressions with Python and Selenium, integrated into the release cycle.",
          outcome: "Every release went through an automated regression of the critical transactional flows.",
        },
        {
          tag: "Fintech · Regulatory",
          title: "PSP & Split Onboarding",
          context: "Projects with Legal, Finance, Banco Comafi and the Central Bank (BCRA) to operate as a PSP in Argentina.",
          approach: "Validated foreign users' documentation against each country's rules, along with the onboarding flows.",
          outcome: "QA coverage of regulatory requirements in a multi-country context.",
        },
      ],
    },

    education: {
      eyebrow: "05 · education",
      title: "Education & certifications",
      lead: "Technical training in software quality, complemented by certifications in automation, data, back-end and security.",
      kindStudy: "Degree",
      kindCert: "Certification",
      studies: [
        { title: "Higher Technical Degree in Quality Assurance", org: "Teclab Instituto Técnico Superior", date: "2023 – 2025", text: "Higher technical training in software quality assurance: test design, QA processes and methodologies." },
        { title: "UX/UI Design", org: "Coderhouse", date: "2021", text: "The foundation of the user's eye I now bring to exploratory, usability and accessibility testing." },
      ],
      certs: [
        { title: "Quality Assurance", skills: ["Test Automation", "API Testing", "Unit Testing", "Integration Testing", "Test Case Design", "Chai.js"] },
        { title: "QA Automation", org: "Government of the City of Buenos Aires", date: "2025", skills: ["Python", "Selenium", "Pytest", "Behave", "Page Object Model", "CI/CD"] },
        { title: "Relational Databases", skills: ["SQL", "PostgreSQL", "Database Design", "Database Testing", "Data Modeling", "Bash", "Git"] },
        { title: "Back-End Development and APIs", skills: ["Node.js", "Express.js", "REST APIs", "API Testing", "Authentication", "MongoDB"] },
        { title: "Back-End / Java", org: "Government of the City of Buenos Aires", date: "2025", skills: ["Java", "Spring Boot", "REST", "Service validation"] },
        { title: "Information Security", skills: ["Web Application Security", "Network Security", "Penetration Testing (fundamentals)", "Helmet.js", "TCP/IP", "Python"] },
        { title: "JavaScript Algorithms and Data Structures", skills: ["Algorithms", "Data Structures", "OOP", "Functional Programming", "Async Programming", "Regex"] },
      ],
    },

    contact: {
      eyebrow: "06 · contact",
      title: "Let's talk quality",
      lead: "If your team is looking for someone who thinks about quality from the requirement all the way to production, drop me a line.",
      channels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        cv: "Resume",
        cvLabel: "Download PDF (ES)",
      },
    },

    footer: {
      built: "Designed and built by Juan Cruz Enzetti",
      status: "All checks passed",
      top: "Back to top",
    },
  },
};
