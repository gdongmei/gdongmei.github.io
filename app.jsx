const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "deep-blue",
  "density": "regular",
  "theme": "light",
  "showStats": true
}/*EDITMODE-END*/;

const ACCENTS = {
  "deep-blue":   { c: "oklch(0.45 0.12 250)", soft: "oklch(0.45 0.12 250 / 0.10)", dark: "oklch(0.78 0.12 250)", softDark: "oklch(0.78 0.12 250 / 0.16)" },
  "forest":      { c: "oklch(0.42 0.10 155)", soft: "oklch(0.42 0.10 155 / 0.10)", dark: "oklch(0.78 0.12 155)", softDark: "oklch(0.78 0.12 155 / 0.16)" },
  "rust":        { c: "oklch(0.55 0.14 40)",  soft: "oklch(0.55 0.14 40 / 0.10)",  dark: "oklch(0.78 0.14 40)",  softDark: "oklch(0.78 0.14 40 / 0.16)"  },
  "ink":         { c: "oklch(0.30 0.02 280)", soft: "oklch(0.30 0.02 280 / 0.10)", dark: "oklch(0.85 0.02 280)", softDark: "oklch(0.85 0.02 280 / 0.16)" },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const theme = t.theme;

  // Apply theme + density on <html>
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.density = t.density;
  }, [theme, t.density]);

  // Apply accent palette via CSS vars
  useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS["deep-blue"];
    const root = document.documentElement;
    root.style.setProperty("--accent", theme === "dark" ? a.dark : a.c);
    root.style.setProperty("--accent-soft", theme === "dark" ? a.softDark : a.soft);
  }, [t.accent, theme]);

  const toggleTheme = () => setTweak("theme", theme === "dark" ? "light" : "dark");

  // Publications filter
  const years = useMemo(() => ["All", ...Array.from(new Set(PUBS.map(p => p.year))).sort((a,b)=>b-a)], []);
  const [pubFilter, setPubFilter] = useState("All");
  const filteredPubs = pubFilter === "All" ? PUBS : PUBS.filter(p => p.year === pubFilter);

  return (
    <div className="page">
      <Sidebar />
      <main className="main">
        <TopNav theme={theme} onToggleTheme={toggleTheme} />

        {/* About */}
        <section id="about" className="section" data-screen-label="about">
          <SectionHead num="01" title="About" sub="researcher · builder · teacher" />
          <p className="about-lede">{SITE.lede}</p>
          <div className="about-body">
            {SITE.bioParas.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {t.showStats && (
            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-value">
                    <AnimatedNumber value={s.value} />
                    {s.unit && <span className="unit">{s.unit}</span>}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* News */}
        <section id="news" className="section" data-screen-label="news">
          <SectionHead num="02" title="News" sub="recent activity" />
          <div className="news">
            {NEWS.map((n, i) => (
              <div className="news-item" key={i}>
                <span className="news-date">{n.date}</span>
                <span className="news-body">{n.body}</span>
                <span className={`news-tag ${n.tag === "publication" ? "pub" : ""}`}>{n.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="pubs" className="section" data-screen-label="publications">
          <SectionHead num="03" title="Publications" sub={`${PUBS.length} papers · ${PUBS.reduce((a,p)=>a+p.cites,0)} citations`} />
          <div className="pub-filter">
            {years.map((y) => {
              const c = y === "All" ? PUBS.length : PUBS.filter(p => p.year === y).length;
              return (
                <button key={y} className={pubFilter === y ? "on" : ""} onClick={() => setPubFilter(y)}>
                  {y}<span className="count">{c}</span>
                </button>
              );
            })}
          </div>
          {filteredPubs.map((p, i) => <PubCard p={p} key={i} />)}
        </section>

        {/* Honors */}
        <section id="honors" className="section" data-screen-label="honors">
          <SectionHead num="04" title="Honors & Awards" />
          {HONORS.map((h, i) => (
            <div className="row" key={i}>
              <span className="row-date">{h.date}</span>
              <div>
                <h3 className="row-title">{h.title}</h3>
                <div className="row-place">{h.place}</div>
                <div className="row-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section id="edu" className="section" data-screen-label="education">
          <SectionHead num="05" title="Education" />
          {EDU.map((h, i) => (
            <div className="row" key={i}>
              <span className="row-date">{h.date}</span>
              <div>
                <h3 className="row-title">{h.title}{i === 0 && <span className="row-badge">Current</span>}</h3>
                <div className="row-place">{h.place}</div>
                <div className="row-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Work */}
        <section id="work" className="section" data-screen-label="experience">
          <SectionHead num="06" title="Experience" />
          {WORK.map((h, i) => (
            <div className="row" key={i}>
              <span className="row-date">{h.date}</span>
              <div>
                <h3 className="row-title">{h.title}</h3>
                <div className="row-place">{h.place}</div>
                <div className="row-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </section>

        <footer className="foot">
          <div className="big">
            Always <em>building</em>,<br/>always <em>asking</em>.
          </div>
          <div>
            © 2026 · Dongmei Gao · last updated May 10, 2026
          </div>
        </footer>
      </main>

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={["light", "dark"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakSelect
          label="Accent"
          value={t.accent}
          options={["deep-blue", "forest", "rust", "ink"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "airy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakToggle
          label="Show stats strip"
          value={t.showStats}
          onChange={(v) => setTweak("showStats", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
