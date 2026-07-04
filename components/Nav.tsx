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

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
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
