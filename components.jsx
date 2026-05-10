// Reusable UI bits for the personal site.

const { useEffect, useRef, useState } = React;

// ---------- Animated number ----------
function AnimatedNumber({ value, duration = 900 }) {
  const [n, setN] = useState(0);
  const startRef = useRef(null);
  const target = parseInt(value, 10);
  const isNum = !isNaN(target);
  useEffect(() => {
    if (!isNum) return;
    let raf;
    const tick = (t) => {
      if (!startRef.current) startRef.current = t;
      const p = Math.min(1, (t - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, isNum]);
  return <>{isNum ? n : value}</>;
}

// ---------- Sidebar ----------
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-mark">
        <span className="dot"></span>
        <span>dongmei.gao / portfolio · v3</span>
      </div>

      <div className="portrait">
        <div className="portrait-ph">PORTRAIT · 4 × 5</div>
      </div>

      <h1 className="name">Dongmei <em>Gao</em></h1>

      <div className="role">
        <div>PhD researcher · HCI × Software Engineering</div>
        <div className="role-line">
          <span className="pulse"></span>
          <span>Available for collaboration · 2026</span>
        </div>
      </div>

      <p className="bio">
        Studying the developer experience of low-code platforms — when they
        help, when they hurt, and what changes when more of the team builds with them.
      </p>

      <div className="meta">
        <div className="meta-row">
          <span className="meta-key">Affil.</span>
          <span className="meta-val">Aalto University</span>
        </div>
        <div className="meta-row">
          <span className="meta-key">Based</span>
          <span className="meta-val">Espoo, Finland · UTC+2</span>
        </div>
        <div className="meta-row">
          <span className="meta-key">Email</span>
          <span className="meta-val"><a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></span>
        </div>
        <div className="meta-row">
          <span className="meta-key">Advisor</span>
          <span className="meta-val">Fabian Fagerholm</span>
        </div>
      </div>

      <div className="socials">
        {SITE.contact.links.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </div>
    </aside>
  );
}

// ---------- Top nav with scroll-spy ----------
const NAV = [
  { id: "about",   label: "About" },
  { id: "news",    label: "News",         count: NEWS.length },
  { id: "pubs",    label: "Publications", count: PUBS.length },
  { id: "honors",  label: "Honors",       count: HONORS.length },
  { id: "edu",     label: "Education",    count: EDU.length },
  { id: "work",    label: "Experience" },
];

function TopNav({ theme, onToggleTheme }) {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <nav className="topnav">
      <div className="topnav-inner">
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={active === n.id ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {n.label}
            {n.count != null && <span className="count">/{String(n.count).padStart(2, "0")}</span>}
          </a>
        ))}
      </div>
      <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
        <span className="glyph"></span>
        <span>{theme === "dark" ? "Light" : "Dark"}</span>
      </button>
    </nav>
  );
}

// ---------- Section header ----------
function SectionHead({ num, title, sub }) {
  return (
    <header className="section-head">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      {sub && <span className="section-sub">{sub}</span>}
    </header>
  );
}

// ---------- Publication figure (placeholder visualization per paper) ----------
function PubFigure({ kind }) {
  const yLabel = "LCD impact";
  const xLabel = "Evidence sufficiency";
  let dots = [];
  if (kind === "scatter") {
    dots = [
      { x: 22, y: 28, k: "" }, { x: 30, y: 78, k: "open" }, { x: 45, y: 50, k: "" },
      { x: 58, y: 38, k: "accent" }, { x: 70, y: 22, k: "" }, { x: 78, y: 70, k: "open" },
      { x: 85, y: 35, k: "accent" },
    ];
  } else if (kind === "bars") {
    return (
      <div className="pub-figure">
        <span className="pf-label">PROFES · survey</span>
        <span className="pf-axis y">{yLabel}</span>
        <span className="pf-axis x">{xLabel}</span>
        {[40, 65, 55, 80, 30, 70].map((h, i) => (
          <span key={i} style={{
            position: "absolute", bottom: "18%", left: `${14 + i * 13}%`,
            width: 10, height: `${h * 0.55}%`,
            background: i === 3 ? "var(--accent)" : "var(--ink)",
            opacity: i === 3 ? 1 : 0.78,
          }}/>
        ))}
      </div>
    );
  } else if (kind === "quadrant") {
    dots = [
      { x: 30, y: 30, k: "" }, { x: 30, y: 70, k: "open" },
      { x: 70, y: 30, k: "accent" }, { x: 70, y: 70, k: "" },
      { x: 50, y: 50, k: "" },
    ];
  }
  return (
    <div className="pub-figure">
      <span className="pf-label">{kind === "scatter" ? "JSS · synthesis" : "Thesis · model"}</span>
      <span className="pf-axis y">{yLabel}</span>
      <span className="pf-axis x">{xLabel}</span>
      {dots.map((d, i) => (
        <span key={i} className={`dot ${d.k}`} style={{ left: `${d.x}%`, bottom: `${d.y}%` }} />
      ))}
    </div>
  );
}

function PubCard({ p }) {
  return (
    <article className="pub">
      <PubFigure kind={p.figure} />
      <div>
        <div className="pub-meta">
          <span className="pub-venue">{p.venue}</span>
          <span className="pub-divider">·</span>
          <span>{p.year}</span>
          <span className="pub-divider">·</span>
          <span>{p.type}</span>
          {p.cites > 0 && (
            <span className="cite-pill" style={{ marginLeft: "auto" }}>
              <b>{p.cites}</b> citations
            </span>
          )}
        </div>
        <h3 className="pub-title"><a href={p.href}>{p.title}</a></h3>
        <p className="pub-authors">
          {p.authors.map((a, i) => (
            <span key={a} className={a === "Dongmei Gao" ? "me" : ""}>
              {a}{i < p.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <ul className="pub-bullets">
          {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="pub-actions">
          <a className="primary" href={p.href}>Read paper</a>
          <a href="#">PDF</a>
          <a href="#">BibTeX</a>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, {
  AnimatedNumber, Sidebar, TopNav, SectionHead, PubFigure, PubCard, NAV,
});
