"use client"
import React, { useState } from "react"

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

  const EDUCATION = [
    {
      school: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      degree: "Bachelor's In Computer Science",
      period: "Jan. 2024 – Present",
      details: "Thread: Intelligence & Systems and Architecture",
      additional: "Full-Stack Web Development Coding Bootcamp: 3 month rigorous course teaching professional and complex software engineering and CS theory. Developed Agile methodology and DevOps usages.",
    },
    {
      school: "Kennesaw State University",
      location: "Kennesaw, GA",
      degree: "Bachelor's In Computer Science",
      period: "Aug. 2021 – Dec. 2023",
      details: "Accomplish Programming and Problem Solving I (Java)",
    },
  ]

  const EXPERIENCE = [
    {
      title: "Chief Executive Officer",
      company: "EchoFives LLC",
      location: "Atlanta, GA",
      period: "Sep. 2024 – Present",
      bullets: [
        "Responsible for all software and hardware applications",
        "Lead and guide software team on codes to meet deadlines",
        "Expand clientele businesses through software solutions",
      ],
    },
    {
      title: "Full-stack Developer",
      company: "NexaCable Technologies LLC",
      location: "Atlanta, GA",
      period: "Dec. 2023 – Apr. 2024",
      bullets: [
        "Worked with CEO of NexaCable Technologies LLC offering cabling solutions and business proposals",
        "Develop front-end code of website and functionalities",
        "Proposed novel concepts and designs for the front end development and backend servers to enhance their user-friendliness",
      ],
    },
    {
      title: "Coding Instructor",
      company: "Code Ninjas",
      location: "Smyrna, GA",
      period: "Sep. 2024 – June 2025",
      bullets: [
        "Instruct students at differently levels of coding such as block code, JavaScript, C# and software systems such as Unity",
        "Debug and assist on Students' daily activities with a friendly and professional approach",
      ],
    },
    {
      title: "U.S. Marines",
      company: "United States Marine Corps",
      location: "Smyrna, GA",
      period: "Oct. 2020 – Present",
      bullets: [
        "Notable AT missions: IRT Custer, Stonewall. These operations allowed me and other Marines to support civilians building new roads and resorts for recreational activities",
        "Lead Marines through monthly counseling and coaching on gear inspection, and record-keeping results in sustainable inventory",
      ],
    },
  ]

  const PROJECTS = [
    {
      name: "ChargeVault",
      period: "Jan. 2025 – May. 2025",
      tech: ["React", "React Native", "Git", "Ruby", "Swift", "TypeScript", "JavaScript"],
      description:
        "A phenomenal Senior Capstone project CreateX with Ga Tech, team 7. This invitation gaved me a opportunity as a sophomore to develop a software application for secure charged drill batteries. This project was aimed for construction sites.",
      features: ["RFID scan", "Secured login and signup", "Live login histories", "Reserve battery slots"],
    },
    {
      name: "China Express",
      period: "Apr. 2025 – Present",
      tech: ["React", "React Native", "Git", "Ruby", "Swift", "Firebase"],
      description:
        "Built applications for China Express Cascade for easier and efficient software operations. This project includes multiple components: website, mobile, and desktop POS.",
    },
    {
      name: "J&J Lighting",
      period: "Aug. 2025 – Present",
      tech: ["React", "Git", "Firebase"],
      description:
        "Successfully collaborated with J&J Lighting LLC developing a user-friendly website, providing administrative quote viewing from clients for real estate properties using led lighting solutions.",
    },
  ]

  const SKILLS = {
    languages: ["Java", "JavaScript", "TypeScript", "Python", "Ruby", "Swift"],
    frameworks: ["MERN", "Apollo GraphQL", "React Native", "Electron", "Firebase"],
    tools: ["Git", "GitHub", "VS Code", "Visual Studio", "IntelliJ", "MongoDB", "Firebase Google"],
  }

  // Static assets from /public
  const PHOTO_URL = "/selfie.png"
  const RESUME_URL = "/resume.pdf"
  const RESUME_NAME = "Alexander_Lin_Resume.pdf"
  const CERTIFICATE_URL = "/certificate.pdf"

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navbar */}
      <header className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          <a href="#home" className="font-bold text-lg sm:text-xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Alexander Lin
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
            {["About", "Education", "Experience", "Projects", "Skills", "Certificate", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              {["About", "Education", "Experience", "Projects", "Skills", "Certificate", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left flex-1 animate-fade-in-up w-full">
            <div className="relative inline-block mb-6 sm:mb-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 rounded-2xl sm:rounded-3xl overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-300 mx-auto md:mx-0">
                <img src={PHOTO_URL} alt="Alexander Lin headshot" className="object-cover h-full w-full" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent leading-tight">
              {PROFILE.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 font-medium">
              {PROFILE.title}
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed mx-auto md:mx-0">
              {PROFILE.tagline}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm mb-6 sm:mb-8 justify-center md:justify-start">
              <span className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
                <span className="text-base sm:text-lg">📍</span> <span className="whitespace-nowrap">{PROFILE.location}</span>
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:scale-105 transition-all duration-200 text-xs sm:text-sm break-all sm:break-normal"
              >
                {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                {PROFILE.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center md:justify-start">
              {PROFILE.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href={RESUME_URL}
                download={RESUME_NAME}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-200 text-white dark:text-slate-900 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            About
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl transition-shadow duration-300">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 mb-4 sm:mb-6">
            I'm a <strong className="text-slate-900 dark:text-slate-100">Georgia Tech Computer Science student</strong> focusing on Intelligence, Systems &
            Architecture. I served 5 years in the <strong className="text-slate-900 dark:text-slate-100">U.S. Marine Corps</strong>, learning leadership and
            discipline that now drive my work as <strong className="text-slate-900 dark:text-slate-100">CEO of EchoFives</strong> — building SaaS + hardware
            systems that empower local restaurants.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
            With experience in full-stack development, I've worked on diverse projects ranging from construction
            site management systems to restaurant POS solutions. I'm passionate about creating software that solves
            real-world problems and enhances user experiences.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 sm:mb-2">{edu.school}</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{edu.location}</p>
                </div>
                <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-2 md:mt-0 px-2 sm:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full inline-block w-fit">
                  {edu.period}
                </span>
              </div>
              <p className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-slate-800 dark:text-slate-200">{edu.degree}</p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-2">{edu.details}</p>
              {edu.additional && (
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 mt-2 sm:mt-3 leading-relaxed">{edu.additional}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 sm:mb-2">{exp.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 mt-2 md:mt-0 px-2 sm:px-3 py-1 bg-purple-50 dark:bg-purple-900/30 rounded-full inline-block w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="list-none space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1 sm:mt-1.5 flex-shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">{project.name}</h3>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded w-fit">
                  {project.period}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
              {project.features && (
                <ul className="list-none space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  {project.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/50 dark:border-slate-800/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Languages", skills: SKILLS.languages, color: "blue" },
              { title: "Frameworks", skills: SKILLS.frameworks, color: "purple" },
              { title: "Developer Tools", skills: SKILLS.tools, color: "pink" },
            ].map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-slate-900 dark:text-slate-100">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section id="certificate" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Full Stack Flex Web Development</h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-1">
              Georgia Institute of Technology - Professional Education
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500">December 02, 2022</p>
          </div>
          <a
            href={CERTIFICATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            View Certificate
            <span className="text-base sm:text-lg">→</span>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/50 dark:border-slate-800/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-5 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-200">
              <p className="font-semibold mb-2 text-sm sm:text-base text-slate-900 dark:text-slate-100">Email</p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline font-medium break-all sm:break-normal"
              >
                {PROFILE.email}
              </a>
            </div>
            <div className="p-5 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform duration-200">
              <p className="font-semibold mb-2 text-sm sm:text-base text-slate-900 dark:text-slate-100">Phone</p>
              <a href={`tel:${PROFILE.phone}`} className="text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:underline font-medium">
                {PROFILE.phone}
              </a>
            </div>
            <div className="p-5 sm:p-6 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/30 dark:to-blue-900/30 rounded-xl border border-pink-200 dark:border-pink-800 hover:scale-105 transition-transform duration-200 sm:col-span-2 lg:col-span-1">
              <p className="font-semibold mb-2 text-sm sm:text-base text-slate-900 dark:text-slate-100">Connect</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {PROFILE.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium hover:shadow-md hover:scale-105 transition-all duration-200"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 sm:py-12 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p>© {new Date().getFullYear()} Alexander Lin. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
