/* =============================================================
   LÓGICA DEL PORTAFOLIO
   -------------------------------------------------------------
   1. Íconos SVG
   2. Helpers
   3. Render de cada sección (usa CONTENT de content.js)
   4. Tema claro/oscuro, idioma, menú mobile
   5. Animaciones al hacer scroll y nav activa
   ============================================================= */

(function () {
  "use strict";

  /* ---------- 1. ÍCONOS (estilo Lucide, trazo 2px) ---------- */
  const ICON_PATHS = {
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrowRight: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    arrowUp: '<path d="m5 12 7-7 7 7M12 19V5"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
    plug: '<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    flask: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7M7 16h10"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    pr: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1"/>',
    graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  };

  function icon(name, cls) {
    const paths = ICON_PATHS[name] || ICON_PATHS.check;
    return `<svg class="icon ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  }

  /* ---------- 2. HELPERS ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // localStorage puede fallar (modo privado, cookies bloqueadas): siempre con try/catch
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin persistencia */ } },
  };

  const sectionHeader = (id, eyebrow, title, lead) => `
    <header class="section-header reveal">
      <p class="eyebrow"><span class="eyebrow-slash">//</span> ${eyebrow}</p>
      <h2 id="${id}-title">${title}</h2>
      ${lead ? `<p class="section-lead">${lead}</p>` : ""}
    </header>`;

  const chips = (items, cls = "") => `<ul class="chips ${cls}">${items.map((i) => `<li class="chip">${i}</li>`).join("")}</ul>`;

  let lang = "es";
  let t = CONTENT.es;

  /* ---------- 3. RENDER DE SECCIONES ---------- */

  function renderNav() {
    $("#nav-list").innerHTML = t.nav
      .map((n) => `<li><a class="nav-link" href="#${n.id}" data-section="${n.id}">${n.label}</a></li>`)
      .join("");
  }

  function renderHero() {
    const h = t.hero;
    $("#hero").innerHTML = `
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="status-pill"><span class="status-dot" aria-hidden="true"></span>${h.status}</p>
          <p class="hero-greeting">${h.greeting}</p>
          <h1 id="hero-title" class="hero-title">${h.title}</h1>
          <p class="hero-role">${h.role}</p>
          <p class="hero-lead">${h.lead}</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="#proyectos">${h.ctaProjects} ${icon("arrowRight")}</a>
            <a class="btn btn-ghost" href="#contacto">${icon("mail")} ${h.ctaContact}</a>
            <a class="btn btn-link" href="${PROFILE.cv}" download>${icon("download")} ${h.ctaCv}</a>
          </div>
          <ul class="hero-stats">
            ${h.stats.map((s) => `<li><strong>${s.value}</strong><span>${s.label}</span></li>`).join("")}
          </ul>
        </div>
      </div>`;
  }

  function renderAbout() {
    const a = t.about;
    $("#sobre-mi").innerHTML = `
      <div class="container">
        ${sectionHeader("sobre-mi", a.eyebrow, a.title)}
        <div class="about-grid">
          <div class="about-text reveal">
            ${a.paragraphs.map((p) => `<p>${p}</p>`).join("")}
            <p class="about-location">${icon("mapPin")} ${t.hero.location}</p>
          </div>
          <aside class="focus-card reveal" aria-label="${a.focusTitle}">
            <h3>${a.focusTitle}</h3>
            <ul class="focus-list">
              ${a.focus
                .map(
                  (f) => `
                <li>
                  <span class="focus-icon">${icon(f.icon)}</span>
                  <div><strong>${f.title}</strong><p>${f.text}</p></div>
                </li>`
                )
                .join("")}
            </ul>
          </aside>
        </div>
      </div>`;
  }

  function renderSkills() {
    const s = t.skills;
    $("#skills").innerHTML = `
      <div class="container">
        ${sectionHeader("skills", s.eyebrow, s.title, s.lead)}
        <div class="skills-grid">
          ${s.groups
            .map(
              (g) => `
            <article class="skill-card reveal">
              <div class="skill-head">
                <span class="skill-icon">${icon(g.icon)}</span>
                <div>
                  <h3>${g.title}</h3>
                  <p>${g.desc}</p>
                </div>
              </div>
              ${chips(g.items)}
            </article>`
            )
            .join("")}
        </div>
      </div>`;
  }

  function renderExperience() {
    const e = t.experience;
    $("#experiencia").innerHTML = `
      <div class="container">
        ${sectionHeader("experiencia", e.eyebrow, e.title)}
        <ol class="timeline">
          ${e.items
            .map((job) => {
              const current = job.end === null;
              const end = current ? t.ui.present : job.end;
              return `
            <li class="timeline-item reveal ${current ? "is-current" : ""}">
              <span class="timeline-dot" aria-hidden="true"></span>
              <article class="job-card">
                <header class="job-head">
                  <div>
                    <h3 class="job-role">${job.role}</h3>
                    <p class="job-company">${job.company}</p>
                    <p class="job-client">${job.client}</p>
                  </div>
                  <div class="job-meta">
                    <span class="job-date">${job.start} — ${end}</span>
                    <span class="job-location">${icon("mapPin")} ${job.location}</span>
                  </div>
                </header>
                <p class="job-summary">${job.summary}</p>
                <p class="job-highlight">${icon("check")} ${job.highlight}</p>
                <ul class="job-bullets">
                  ${job.bullets.map(([label, text]) => `<li><strong>${label}:</strong> ${text}</li>`).join("")}
                </ul>
                ${chips(job.tags, "chips-sm")}
              </article>
            </li>`;
            })
            .join("")}
        </ol>
      </div>`;
  }

  function renderProjects() {
    const p = t.projects;
    const f = p.featured;
    $("#proyectos").innerHTML = `
      <div class="container">
        ${sectionHeader("proyectos", p.eyebrow, p.title, p.lead)}

        <article class="project-featured reveal">
          <div class="project-featured-body">
            <span class="badge">${icon("sparkles")} ${f.badge}</span>
            <h3>${f.title}</h3>
            ${chips(f.stack, "chips-sm chips-accent")}
            <ul class="project-bullets">${f.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
            <a class="btn btn-ghost" href="${f.repo}" target="_blank" rel="noopener">${icon("github")} ${t.ui.viewRepo} ${icon("external", "icon-sm")}</a>
          </div>
          <div class="pipeline" aria-label="${f.pipelineTitle}">
            <p class="pipeline-title">${f.pipelineTitle}</p>
            <ol class="pipeline-steps">
              ${f.pipeline
                .map(
                  (step, i) => `
                <li class="pipeline-step" style="--i:${i}">
                  <span class="pipeline-icon">${icon(step.icon)}</span>
                  <span>${step.label}</span>
                </li>`
                )
                .join("")}
            </ol>
          </div>
        </article>

        <div class="repo-grid">
          ${p.repos
            .map(
              (r) => `
            <article class="repo-card reveal">
              <div class="repo-head">${icon("code")}<h3>${r.title}</h3></div>
              <p>${r.text}</p>
              ${chips(r.stack, "chips-sm")}
              <div class="repo-links">
                ${r.demo
                  ? r.demo.startsWith("#")
                    ? `<a class="text-link" href="${r.demo}">${icon("globe")} ${t.ui.viewDemo} ${icon("arrowUp", "icon-sm")}</a>` // demo interna: misma pestaña
                    : `<a class="text-link" href="${r.demo}" target="_blank" rel="noopener">${icon("globe")} ${t.ui.viewDemo} ${icon("external", "icon-sm")}</a>`
                  : ""}
                <a class="text-link" href="${r.repo}" target="_blank" rel="noopener">${icon("github")} ${t.ui.viewRepo} ${icon("external", "icon-sm")}</a>
              </div>
            </article>`
            )
            .join("")}
        </div>

        <h3 class="subheading reveal">${p.casesTitle}</h3>
        <div class="cases-grid">
          ${p.cases
            .map(
              (c) => `
            <article class="case-card reveal">
              <span class="case-tag">${c.tag}</span>
              <h4>${c.title}</h4>
              <dl>
                <dt>${p.labels.context}</dt><dd>${c.context}</dd>
                <dt>${p.labels.approach}</dt><dd>${c.approach}</dd>
                <dt>${p.labels.outcome}</dt><dd>${c.outcome}</dd>
              </dl>
            </article>`
            )
            .join("")}
        </div>
      </div>`;
  }

  function renderEducation() {
    const e = t.education;
    // Títulos y certificaciones comparten la misma grilla y la misma tarjeta;
    // sólo cambian el ícono, la etiqueta de tipo y un acento sutil en los títulos.
    const card = (x, kind) => {
      const isStudy = kind === "study";
      return `
      <li class="cred-card reveal ${isStudy ? "is-study" : ""}">
        <div class="cred-top">
          <span class="cred-icon">${icon(isStudy ? "graduation" : "award")}</span>
          <span class="cred-kind">${isStudy ? e.kindStudy : e.kindCert}</span>
          ${x.date ? `<span class="cred-date">${x.date}</span>` : ""}
        </div>
        <h3 class="cred-title">${x.title}</h3>
        ${x.org ? `<p class="cred-org">${x.org}</p>` : ""}
        ${x.text ? `<p class="cred-text">${x.text}</p>` : ""}
        ${x.skills ? chips(x.skills, "chips-sm cred-skills") : ""}
      </li>`;
    };
    $("#formacion").innerHTML = `
      <div class="container">
        ${sectionHeader("formacion", e.eyebrow, e.title, e.lead)}
        <ul class="cred-grid">
          ${e.studies.map((x) => card(x, "study")).join("")}
          ${e.certs.map((x) => card(x, "cert")).join("")}
        </ul>
      </div>`;
  }

  function renderContact() {
    const c = t.contact;
    const ch = c.channels;
    const card = (href, ic, label, value, extra = "") => `
      <a class="contact-card" href="${href}" ${extra}>
        <span class="contact-icon">${icon(ic)}</span>
        <span class="contact-text"><span class="contact-label">${label}</span><span class="contact-value">${value}</span></span>
      </a>`;
    $("#contacto").innerHTML = `
      <div class="container">
        <div class="contact-box reveal">
          ${sectionHeader("contacto", c.eyebrow, c.title, c.lead)}
          <div class="email-row">
            <a class="btn btn-primary btn-lg" href="mailto:${PROFILE.email}">${icon("mail")} ${PROFILE.email}</a>
            <button class="btn btn-ghost copy-btn" type="button" data-copy="${PROFILE.email}">${icon("copy")} <span>${t.ui.copy}</span></button>
          </div>
          <div class="contact-grid">
            ${card(PROFILE.linkedin, "linkedin", ch.linkedin, PROFILE.linkedinLabel, 'target="_blank" rel="noopener"')}
            ${card(PROFILE.github, "github", ch.github, PROFILE.githubLabel, 'target="_blank" rel="noopener"')}
            ${card(PROFILE.cv, "download", ch.cv, ch.cvLabel, "download")}
          </div>
        </div>
      </div>`;
  }

  function renderFooter() {
    const f = t.footer;
    $("#footer").innerHTML = `
      <div class="container footer-inner">
        <p>© ${new Date().getFullYear()} · ${f.built}</p>
        <p class="footer-status"><span class="status-dot" aria-hidden="true"></span><code>${f.status}</code></p>
        <a class="text-link" href="#top">${icon("arrowUp")} ${f.top}</a>
      </div>`;
  }

  /* ---------- 4. TEMA, IDIOMA Y MENÚ ---------- */

  function updateThemeButton() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const btn = $("#theme-toggle");
    btn.innerHTML = icon(isDark ? "sun" : "moon");
    const label = isDark ? t.ui.themeToLight : t.ui.themeToDark;
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
    updateThemeButton();
  }

  function setMenu(open) {
    const btn = $("#menu-toggle");
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.innerHTML = icon(open ? "x" : "menu");
    btn.setAttribute("aria-label", open ? t.ui.closeMenu : t.ui.openMenu);
  }

  function applyLanguage(newLang) {
    lang = CONTENT[newLang] ? newLang : "es";
    t = CONTENT[lang];
    store.set("lang", lang);

    document.documentElement.lang = lang;
    document.title = t.meta.title;
    $('meta[name="description"]').setAttribute("content", t.meta.description);

    // Textos estáticos marcados con data-i18n="ruta.a.la.clave"
    $$("[data-i18n]").forEach((el) => {
      const value = el.dataset.i18n.split(".").reduce((o, k) => (o ? o[k] : undefined), t);
      if (value) el.textContent = value;
    });

    const langBtn = $("#lang-toggle");
    langBtn.textContent = lang === "es" ? "EN" : "ES";
    langBtn.setAttribute("aria-label", t.ui.langSwitch);
    langBtn.title = t.ui.langSwitch;

    renderNav();
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    renderContact();
    renderFooter();

    updateThemeButton();
    setMenu(false);
    bindDynamic();
    observeReveal();
    observeSections();
  }

  // Eventos de elementos que se re-renderizan al cambiar idioma
  function bindDynamic() {
    $$(".copy-btn").forEach((btn) =>
      btn.addEventListener("click", async () => {
        const label = $("span", btn);
        try {
          await navigator.clipboard.writeText(btn.dataset.copy);
          label.textContent = t.ui.copied;
          btn.classList.add("is-done");
        } catch (e) {
          window.location.href = "mailto:" + btn.dataset.copy;
        }
        setTimeout(() => {
          label.textContent = t.ui.copy;
          btn.classList.remove("is-done");
        }, 1800);
      })
    );

    $$(".nav-link").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  }

  /* ---------- 5. SCROLL: APARICIÓN Y NAV ACTIVA ---------- */

  let revealObserver, sectionObserver;

  function observeReveal() {
    const items = $$(".reveal");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => revealObserver.observe(el));
  }

  function observeSections() {
    if (!("IntersectionObserver" in window)) return;
    if (sectionObserver) sectionObserver.disconnect();
    sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          $$(".nav-link").forEach((a) => a.classList.toggle("is-active", a.dataset.section === entry.target.id));
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    t.nav.forEach((n) => {
      const sec = document.getElementById(n.id);
      if (sec) sectionObserver.observe(sec);
    });
  }

  /* ---------- INICIO ---------- */
  function init() {
    $("#theme-toggle").addEventListener("click", toggleTheme);
    $("#lang-toggle").addEventListener("click", () => applyLanguage(lang === "es" ? "en" : "es"));
    $("#menu-toggle").addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });

    // Sombra del header al scrollear
    const header = $(".site-header");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Idioma: guardado > idioma del navegador > español
    const saved = store.get("lang");
    const browser = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
    applyLanguage(saved || browser);
  }

  init();
})();
