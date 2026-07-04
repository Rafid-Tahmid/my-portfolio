import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  CameraIcon,
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/Icons";
import {
  education,
  experience,
  interests,
  links,
  projects,
  skills,
} from "@/lib/data";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative">
      <Nav />

      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <div className="aurora" />
        <div className="grid-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-widest text-accent-2 uppercase">
              Software · AI · Full-Stack
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl">
              Hi, I&apos;m <span className="gradient-text">Rafid Tahmid</span>.
              <br />I turn real problems into working software.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Mathematical and Computer Science student at Adelaide University
              with hands-on experience shipping AI-driven automation and
              full-stack web apps — RAG pipelines, multi-model routing, and
              agentic workflows that solve real operational bottlenecks.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
              >
                Get in touch
              </a>
              <span className="mx-1 hidden h-6 w-px bg-line sm:block" />
              <div className="flex items-center gap-3">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted transition-colors hover:text-ink"
                >
                  <GitHubIcon className="h-6 w-6" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted transition-colors hover:text-ink"
                >
                  <LinkedInIcon className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${links.email}`}
                  aria-label="Email"
                  className="text-muted transition-colors hover:text-ink"
                >
                  <MailIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-4">
              {[
                ["30%", "manual work cut via automation"],
                ["96%", "score on uni full-stack project"],
                ["1.7M+", "views on Pexels photography"],
              ].map(([stat, label]) => (
                <div key={label} className="glow-card px-4 py-5 text-center sm:px-6">
                  <div className="font-display gradient-text text-2xl font-bold sm:text-3xl">
                    {stat}
                  </div>
                  <div className="mt-1.5 text-xs leading-snug text-muted sm:text-sm">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading kicker="About" title="Builder first, student second" />
        <div className="mt-8 grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3" delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m studying Mathematical and Computer Science at Adelaide
                University (expected 2027), but most of what I know comes from
                shipping. I&apos;ve built a multi-model RAG learning platform
                solo, co-built an agentic Gmail subscription tracker, and
                automated real workflows for a USD 2M+ import/export business.
              </p>
              <p>
                My sweet spot is where LLMs meet product engineering: designing
                retrieval pipelines, routing requests across models by cost and
                confidence, and wrapping it all in interfaces people actually
                enjoy using.
              </p>
              <p>
                I also survived the 42 Adelaide Piscine — a month of C,
                shell scripting, and daily peer-reviewed submissions under
                strict style rules. It taught me to write code other people
                can read.
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-2" delay={200}>
            <div className="glow-card p-6">
              <h3 className="font-display mb-4 text-lg font-semibold">
                What I bring
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                <li>
                  <span className="text-ink">AI/LLM engineering depth</span> —
                  RAG, vector search, multi-model routing, agentic workflows
                </li>
                <li>
                  <span className="text-ink">Full-stack shipping ability</span>{" "}
                  — Next.js, Node, SQL, from schema to pixel
                </li>
                <li>
                  <span className="text-ink">Real business impact</span> — 30%
                  time reduction on documentation workflows, automation in
                  production at a 30+ person company
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading kicker="Projects" title="Things I've built" />
        <div className="mt-10 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article
                className={`glow-card p-7 sm:p-9 ${
                  project.featured
                    ? "bg-gradient-to-br from-card via-card to-surface"
                    : ""
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    {project.featured && (
                      <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-xs font-semibold text-bg">
                        Featured
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent-2">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip gap-2 !text-sm hover:!text-ink"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View code
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="mt-5 max-w-3xl leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 max-w-3xl space-y-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                      {h}
                    </li>
                  ))}
                </ul>

                {project.credit && (
                  <p className="mt-4 text-xs text-muted italic">{project.credit}</p>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading kicker="Experience" title="Where I've worked" />
        <div className="mt-10 space-y-12 border-l border-line pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 100}>
              <div className="relative">
                <span className="timeline-dot" style={{ left: "-37px" }} />
                <p className="text-sm text-accent-2">{job.period}</p>
                <h3 className="font-display mt-1 text-xl font-bold">{job.role}</h3>
                <p className="mt-0.5 text-sm text-muted">{job.company}</p>
                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading kicker="Skills" title="Tools of the trade" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div className="glow-card h-full p-6">
                <h3 className="font-display mb-4 text-lg font-semibold">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- EDUCATION ---------- */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading kicker="Education" title="Where I learned the theory" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="glow-card h-full p-7">
                <p className="text-sm text-accent-2">{item.period}</p>
                <h3 className="font-display mt-1 text-xl font-bold">{item.title}</h3>
                <p className="mt-0.5 text-sm text-accent">{item.place}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- BEYOND CODE ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading kicker="Beyond code" title="When I'm not shipping" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <a
              href={links.pexels}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card group block h-full p-7"
            >
              <div className="flex items-center gap-3">
                <CameraIcon className="h-6 w-6 text-accent-2" />
                <h3 className="font-display text-xl font-bold">Photography</h3>
                <ExternalIcon className="h-4 w-4 text-muted transition-colors group-hover:text-ink" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                My photos on Pexels have passed{" "}
                <span className="gradient-text font-semibold">1.7 million views</span>.
                Composition and attention to detail carry over directly into how
                I build interfaces.
              </p>
              <p className="mt-3 text-sm text-accent">pexels.com/@rafid</p>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <div className="glow-card h-full p-7">
              <h3 className="font-display text-xl font-bold">Interests</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="chip">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="relative overflow-hidden py-28">
        <div className="aurora opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m looking for new-grad and internship software engineering
              roles. If you&apos;re hiring — or just want to talk AI engineering —
              my inbox is open.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${links.email}`}
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-105"
              >
                {links.email}
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-5">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-ink"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-ink"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href={links.pexels}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pexels"
                className="text-muted transition-colors hover:text-ink"
              >
                <CameraIcon className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-sm text-muted">{links.location}</p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Rafid Tahmid · Built with Next.js, deployed
        on Vercel
      </footer>
    </div>
  );
}
