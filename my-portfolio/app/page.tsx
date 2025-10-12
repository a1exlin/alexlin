"use client"
import React from "react"

export default function Page() {
  const PROFILE = {
    name: "Alexander Lin",
    title: "CS @ Georgia Tech · CEO, EchoFives (SaaS)",
    tagline:
      "Current Georgia Tech student (Threads: Intelligence, Systems & Architecture). 5 years in the U.S. Marine Corps. Building EchoFives — modern SaaS + hardware solutions for local restaurants.",
    location: "Atlanta, GA",
    email: "alexander.lin121801@gmail.com",
    phone: "404-388-2654",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alexander-lin-24858823a/" },
      { label: "GitHub", href: "https://github.com/a1exlin" },
      { label: "EchoFives", href: "https://echofives.com" },
    ],
  }

  // Static assets from /public
  const PHOTO_URL = "/selfie.png"
  const RESUME_URL = "/resume.pdf"
  const RESUME_NAME = "Alexander_Lin_Resume.pdf"

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="border-b border-neutral-300/60 bg-white/70 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <span className="font-semibold text-lg">Alexander Lin</span>
          <nav className="flex gap-4 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="h-40 w-40 rounded-xl overflow-hidden ring-2 ring-neutral-300 mb-4 mx-auto md:mx-0">
            <img src={PHOTO_URL} alt="Alexander Lin headshot" className="object-cover h-full w-full" />
          </div>

          <h1 className="text-3xl font-bold">{PROFILE.name}</h1>
          <p className="opacity-80 mt-1">{PROFILE.title}</p>
          <p className="mt-3 opacity-80 max-w-lg">{PROFILE.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span>📍 {PROFILE.location}</span>
            <a href={`mailto:${PROFILE.email}`} className="underline">{PROFILE.email}</a>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {PROFILE.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" className="border px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={RESUME_URL}
            download={RESUME_NAME}
            className="mt-6 inline-block bg-black text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            Download Resume
          </a>
        </div>

        {/* Resume Preview */}
        <div className="flex-1 hidden md:block">
          <iframe src={RESUME_URL} className="w-full h-[500px] rounded-xl border" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-3">About</h2>
        <p className="opacity-80 leading-relaxed">
          I’m a <strong>Georgia Tech Computer Science student</strong> focusing on Intelligence, Systems & Architecture.
          I served 5 years in the <strong>U.S. Marine Corps</strong>, learning leadership and discipline that now drive my work as
          <strong> CEO of EchoFives</strong> — building SaaS + hardware systems that empower local restaurants.
        </p>
      </section>

      <footer className="text-center py-10 text-xs opacity-60">
        © {new Date().getFullYear()} Alexander Lin
      </footer>
    </main>
  )
}
