"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") ?? "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink"
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4.5 w-4.5" aria-hidden>
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.8 6.8 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4.5 w-4.5" aria-hidden>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-line">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="gradient-text">RT</span>
          <span className="text-muted">.dev</span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          <li className="mr-1">
            <ThemeToggle />
          </li>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === s.id
                    ? "bg-surface text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile: theme + menu */}
        <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-6 py-3 md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block py-2.5 text-sm text-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
