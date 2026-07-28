"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { useState, type MouseEvent } from "react";

export default function Home() {
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0, active: false });
  const SplineViewer = "spline-viewer" as any;

  const handleCursorMove = (event: MouseEvent<HTMLElement>) => {
    setCursorGlow({ x: event.clientX, y: event.clientY, active: true });
  };

  const handleCursorLeave = () => {
    setCursorGlow((previous) => ({ ...previous, active: false }));
  };

  const scrollToSection = (id: string, block: ScrollLogicalPosition = "center") => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block });
  };

  const handleSectionLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
    block: ScrollLogicalPosition = "center"
  ) => {
    event.preventDefault();
    scrollToSection(id, block);
  };

  const projects = [
    {
      title: "Carbox",
      type: "React + Python",
      summary:
        "Car search platform built for dealership workflows with dynamic vehicle filtering and responsive browsing.",
      stack: ["React", "Python", "Flask-RESTful", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Swing",
      type: "Roblox Game Development",
      summary:
        "Adventure game on Roblox Developer Studio featuring enemy combat, collectible fantasy gear, and persistent player progression.",
      stack: ["Lua", "Roblox Studio", "Blender", "Data Persistence"],
      link: "#",
    },
  ];

  const reveal: Variants = {
    hidden: { opacity: 0, y: 44 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const projectStagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const projectReveal: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <main
      className="relative isolate overflow-hidden"
      onMouseMove={handleCursorMove}
      onMouseLeave={handleCursorLeave}
    >
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-0 h-52 w-52 rounded-full bg-moss/28 blur-3xl"
        animate={{
          x: cursorGlow.x - 104,
          y: cursorGlow.y - 104,
          opacity: cursorGlow.active ? 0.58 : 0,
        }}
        transition={{ type: "spring", stiffness: 140, damping: 24, mass: 0.45 }}
      />
      <div className="grain pointer-events-none" />

      <div className="relative z-10">
        <header className="mx-auto w-[min(1150px,92vw)] pb-5 pt-14 sm:pt-16">
          <div className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6 sm:py-3">
            <a
              href="#home"
              onClick={(event) => handleSectionLinkClick(event, "home")}
              className="font-display text-sm tracking-tight text-ink sm:text-xl"
            >
              Demitri Clark
            </a>
            <nav className="flex flex-nowrap items-center gap-1 text-[10px] font-semibold text-ink/80 sm:justify-end sm:gap-2 sm:text-sm">
              <a
                className="rounded-full px-2 py-1.5 transition hover:bg-white/10 hover:text-ink sm:px-4 sm:py-2"
                href="#about"
                onClick={(event) => handleSectionLinkClick(event, "about")}
              >
                <span className="sm:hidden">Abt</span>
                <span className="hidden sm:inline">About</span>
              </a>
              <a
                className="rounded-full px-2 py-1.5 transition hover:bg-white/10 hover:text-ink sm:px-4 sm:py-2"
                href="#lancaster-farm-fresh"
                onClick={(event) => handleSectionLinkClick(event, "lancaster-farm-fresh")}
              >
                <span className="sm:hidden">Exp</span>
                <span className="hidden sm:inline">Experience</span>
              </a>
              <a
                className="rounded-full px-2 py-1.5 transition hover:bg-white/10 hover:text-ink sm:px-4 sm:py-2"
                href="resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sm:hidden">CV</span>
                <span className="hidden sm:inline">Resume</span>
              </a>
              <a
                className="rounded-full px-2 py-1.5 transition hover:bg-white/10 hover:text-ink sm:px-4 sm:py-2"
                href="#contact"
                onClick={(event) => handleSectionLinkClick(event, "contact")}
              >
                <span className="sm:hidden">Cnt</span>
                <span className="hidden sm:inline">Contact</span>
              </a>
              <a
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-ink/90 transition hover:bg-white/10 hover:text-ink sm:h-9 sm:w-9"
                href="https://www.linkedin.com/in/demitriclark"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.5H6.26V17H8.34M7.3 9.56A1.2 1.2 0 1 0 7.3 7.16A1.2 1.2 0 0 0 7.3 9.56M17.75 17V13.23C17.75 11.26 16.7 10.34 15.3 10.34C14.17 10.34 13.66 10.96 13.38 11.4V10.5H11.3C11.33 11.09 11.3 17 11.3 17H13.38V13.37C13.38 13.18 13.39 12.99 13.45 12.86C13.6 12.48 13.95 12.09 14.51 12.09C15.24 12.09 15.54 12.65 15.54 13.47V17H17.75Z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-ink/90 transition hover:bg-white/10 hover:text-ink sm:h-9 sm:w-9"
                href="https://github.com/zapdzap"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M12 2C6.48 2 2 6.59 2 12.25C2 16.78 4.87 20.62 8.84 21.98C9.34 22.08 9.52 21.76 9.52 21.49C9.52 21.25 9.51 20.62 9.5 19.79C6.73 20.41 6.14 18.42 6.14 18.42C5.68 17.2 5.03 16.88 5.03 16.88C4.12 16.24 5.1 16.26 5.1 16.26C6.11 16.33 6.64 17.33 6.64 17.33C7.54 18.92 9 18.46 9.58 18.18C9.67 17.51 9.93 17.06 10.22 16.8C8.01 16.54 5.69 15.65 5.69 11.67C5.69 10.54 6.08 9.62 6.72 8.89C6.62 8.63 6.27 7.6 6.82 6.2C6.82 6.2 7.67 5.92 9.5 7.2C10.32 6.97 11.2 6.86 12.08 6.86C12.96 6.86 13.84 6.97 14.66 7.2C16.49 5.92 17.34 6.2 17.34 6.2C17.89 7.6 17.54 8.63 17.44 8.89C18.08 9.62 18.47 10.54 18.47 11.67C18.47 15.66 16.15 16.53 13.93 16.79C14.29 17.12 14.61 17.76 14.61 18.74C14.61 20.14 14.6 21.16 14.6 21.49C14.6 21.76 14.78 22.08 15.29 21.98C19.25 20.62 22.12 16.78 22.12 12.25C22.12 6.59 17.64 2 12.12 2H12Z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </nav>
          </div>
        </header>

      <motion.section
        id="home"
        className="relative mx-auto grid min-h-[calc(100dvh-6.5rem)] w-[min(1150px,92vw)] grid-cols-[1.1fr_0.9fr] items-center gap-8 pb-32 pt-20 lg:pb-36 lg:pt-24 [@media(max-aspect-ratio:3/4)]:grid-cols-1"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
      >
        <div className="text-left [@media(max-aspect-ratio:3/4)]:text-center">
          <p className="moss-chip mb-3 inline-block rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
            Software Engineer
          </p>
          <h1 className="font-display text-4xl leading-[0.97] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            I make <span className="moss-highlight">apps</span> that solve problems
          </h1>
        
          <div className="mt-7 flex flex-wrap justify-start gap-3 [@media(max-aspect-ratio:3/4)]:justify-center lg:justify-start">
            <a
              href="#projects"
              onClick={(event) => handleSectionLinkClick(event, "projects")}
              className="moss-pop rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(event) => handleSectionLinkClick(event, "contact")}
              className="rounded-full border border-ink/25 bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-moss/60"
            >
              Let&apos;s Work Together
            </a>
          </div>

          <motion.button
            type="button"
            onClick={() => scrollToSection("about")}
            className="absolute bottom-14 left-1/2 flex h-11 w-11 -translate-x-1/2 rotate-180 items-center justify-center rounded-full border border-ink/15 bg-paper/80 text-ink shadow-sm transition hover:border-moss/50 hover:bg-paper"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to about section"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 5.5 6.5 11l1.4 1.4L11 9.3V18h2V9.3l3.1 3.1L17.5 11 12 5.5Z" />
            </svg>
          </motion.button>
        </div>

        <div className="relative ml-auto max-w-[440px] self-center [@media(max-aspect-ratio:3/4)]:mx-auto">
          <div className="moss-panel mx-auto mb-4 w-[82%] overflow-hidden rounded-[1.4rem] border bg-paper/90 p-1.5 shadow-soft lg:w-[78%]">
            <Image
              src="/Headshot.png"
              alt="Portrait"
              width={800}
              height={800}
              className="aspect-square h-auto w-full rounded-[1rem] object-cover"
              priority
            />
          </div>

          
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="mx-auto w-[min(1150px,92vw)] pb-24"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
      >
        <div className="moss-panel rounded-3xl border border-ink/15 bg-paper/85 p-8 text-left shadow-soft sm:p-11 [@media(max-aspect-ratio:3/4)]:text-center">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            About Me
          </h2>
          
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="flex flex-col gap-4">
              <div className="hero-card moss-panel mx-auto flex w-[82%] items-center gap-4 py-3 lg:mx-0 lg:w-full">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white/60 p-0 shadow-sm">
                  <Image
                    src="/348s.png"
                    alt="Farm Fresh logo"
                    width={96}
                    height={96}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                    Currently
                  </p>
                  <p className="mt-1 text-xl font-semibold text-ink">Software Engineer Intern</p>
                  <p className="text-sm font-normal text-ink/60">Lancaster Farm Fresh Cooperative</p>
                </div>
              </div>
              <div className="hero-card moss-panel mx-auto flex w-[82%] items-center gap-4 py-3 lg:mx-0 lg:w-full">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white/60 p-0 shadow-sm">
                  <Image
                    src="/RIT_seal.jpg"
                    alt="RIT seal"
                    width={96}
                    height={96}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                    Currently
                  </p>
                  <p className="mt-1 text-xl font-semibold text-ink">Software Engineering Student</p>
                  <p className="text-sm font-normal text-ink/60">Rochester Institute of Technology</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-4">
              <p className="max-w-3xl text-ink/80 lg:pt-2">
                I am pursuing a B.S. in Software Engineering at Rochester Institute of Technology,
                where I study secure software, system architecture, algorithms, and project
                management. I enjoy building practical software with strong UX and reliable backend systems.
              </p>
            </div>
          </div>
          
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="mx-auto w-[min(1150px,92vw)] pb-24"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-8 flex items-end justify-between gap-4 text-left [@media(max-aspect-ratio:3/4)]:flex-col [@media(max-aspect-ratio:3/4)]:items-center [@media(max-aspect-ratio:3/4)]:gap-2 [@media(max-aspect-ratio:3/4)]:text-center">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Professional Experience
          </h2>
        </div>

        <motion.div
          className="mb-10 grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          variants={projectReveal}
        >
          <article
            id="lancaster-farm-fresh"
            className="moss-panel rounded-3xl border border-ink/15 bg-paper/90 p-7 shadow-soft sm:p-8 scroll-mt-24"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
              Professional Experience
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-ink sm:text-3xl">
              Software Engineer Intern
            </h3>
            <h2 className="mt-1 text-lg font-normal text-ink/60 sm:text-xl">Lancaster Farm Fresh Cooperative</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/78 sm:text-base">
              Built and published a cross-platform React Native wholesale ordering app to
              the App Store and Google Play, delivering a faster ordering workflow for
              regional business partners.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-ink/78">
              <li className="rounded-2xl border border-ink/10 bg-paper-2 px-4 py-3">
                Engineered dynamic TypeScript search with sub-second querying across
                5,000+ active product SKUs.
              </li>
              <li className="rounded-2xl border border-ink/10 bg-paper-2 px-4 py-3">
                Implemented order history and tracking to support 14-day reorder flows.
              </li>
              <li className="rounded-2xl border border-ink/10 bg-paper-2 px-4 py-3">
                Built secure PHP REST endpoints with password hashing, session tokens,
                and persistent user-state handling.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["React Native", "TypeScript", "PHP", "App Store", "Google Play"].map(
                (item) => (
                  <span
                    key={item}
                    className="moss-chip rounded-full border px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </article>
          
          <div className="relative mx-auto mt-[-10px] w-full max-w-[600px] [@media(max-width:639px)]:mt-[30px] [@media(max-width:639px)]:max-w-[320px] [@media(max-width:639px)]:scale-90">
            <div className="pointer-events-none absolute inset-x-10 top-1/2 h-56 -translate-y-1/2 rounded-full bg-moss/22 blur-3xl" />
            <SplineViewer
              url="https://prod.spline.design/35tW2ydrkzyF0qOL/scene.splinecode"
              class="pointer-events-none relative block h-[460px] w-full sm:h-[540px] lg:h-[620px] [@media(max-width:639px)]:h-[620px]"
            />
          </div>
        </motion.div>
        <h2 className="mb-6 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Projects
          </h2>
        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={projectStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="group flex h-full flex-col moss-panel rounded-3xl border border-ink/15 bg-paper/85 p-6 shadow-soft transition hover:-translate-y-1"
              variants={projectReveal}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
                {project.type}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight text-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {project.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="moss-chip rounded-full border px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="mt-7 inline-flex items-center text-sm font-semibold text-ink underline-offset-4 transition hover:underline"
              >
                Case Study
              </a>
            </motion.article>
          ))}
          <motion.article
            className="group flex h-full flex-col moss-panel rounded-3xl border border-ink/15 bg-paper/85 p-4 shadow-soft transition hover:-translate-y-1"
            variants={projectReveal}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
              Featured Demo
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-ink">
              Swing Gameplay
            </h3>
            <div className="mt-4 flex-1 overflow-hidden rounded-2xl border border-ink/10 bg-black/90">
              <iframe
                className="aspect-video h-full w-full"
                src="https://www.youtube.com/embed/dXBfak1hqYU"
                title="Roblox gameplay video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.article>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="mx-auto w-[min(1150px,92vw)] pb-24"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="rounded-3xl border border-moss/55 bg-ink px-8 py-11 text-left text-paper shadow-[0_0_0_1px_rgba(126,155,205,0.18),0_20px_46px_rgba(0,0,0,0.44)] sm:px-12 [@media(max-aspect-ratio:3/4)]:text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
            Contact
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-5xl">
            Interested in collaborating? Let&apos;s connect.
          </h2>
          <div className="mt-8 flex flex-wrap justify-start gap-3 [@media(max-aspect-ratio:3/4)]:justify-center">
            <a
              href="mailto:dlc3767@rit.edu"
              className="inline-block rounded-full bg-paper px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5"
            >
              dlc3767@rit.edu
            </a>
            <a
              href="https://www.linkedin.com/in/demitriclark"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-paper/35 px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:border-paper/70"
            >
              LinkedIn
            </a>
            <a
              href="tel:+13233515341"
              className="inline-block rounded-full border border-paper/35 px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:border-paper/70"
            >
              +1 (323) 351-5341
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="mx-auto mb-8 mt-2 flex w-[min(1150px,92vw)] items-center justify-between rounded-full border border-ink/15 bg-paper/85 px-6 py-4 text-sm text-ink/75 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:px-8">
        <p className="font-semibold">© 2026 Demitri Clark</p>
        <p className="text-ink/60">Built with Next.js</p>
      </footer>
      </div>
    </main>
  );
}
