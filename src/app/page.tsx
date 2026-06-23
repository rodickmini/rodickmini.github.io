import Image from "next/image";

const contact = {
  email: "davidcaiyou@gmail.com",
  github: "https://github.com/rodickmini",
  linkedin: "https://linkedin.com/in/caiyou",
  location: "Nanjing, Jiangsu, China",
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  "12+ years across software engineering, product, and enterprise AI",
  "LLM knowledge platform serving 30,000+ users",
  "Open to Product Management and AI Product roles worldwide",
];

const experience = [
  {
    role: "AI Product Manager",
    company: "NARI Group Corporation",
    context: "Enterprise AI initiatives and internal collaboration products",
    location: "Nanjing",
    period: "Jun 2022 - Present",
    bullets: [
      "Led the design and delivery of an LLM-powered enterprise knowledge platform serving 30,000+ users and reducing information retrieval time by 40%.",
      "Managed a cross-functional AI product team of 12 engineers, data scientists, and product managers, driving product strategy and roadmap execution.",
      "Designed and launched an enterprise communication platform that reached 30,000+ registered users, 15,000 DAUs, and 100,000+ daily messages within six months.",
    ],
  },
  {
    role: "Senior Product Manager",
    company: "Meipian",
    context: "Tencent-backed content creation platform",
    location: "Nanjing, China",
    period: "Jun 2019 - Apr 2022",
    bullets: [
      "Led a 10-member cross-functional team to evolve Meipian's core content publishing platform, supporting 150,000 daily posts and 30M page views.",
      "Spearheaded the development of Meipian's WeChat Mini Program from concept to launch, scaling to 2M DAUs and generating ¥40M revenue through product optimization and monetization initiatives.",
    ],
  },
  {
    role: "Frontend Development Lead",
    company: "Meipian",
    context: "Large-scale consumer publishing products",
    location: "Nanjing, China",
    period: "Jun 2017 - Jun 2019",
    bullets: [
      "Led the modernization of Meipian's front-end architecture by introducing Vue.js-based development practices, improving development efficiency by approximately 80%.",
      "Collaborated closely with product, design, and backend teams to deliver large-scale content creation and publishing features used by millions of users.",
      "Reduced deployment defects and improved release quality through front-end engineering standards and workflow optimization.",
      "Presented a technical session on progressive front-end architecture at Google DevFest Nanjing 2017.",
    ],
  },
  {
    role: "Co-Founder & Front-End Lead",
    company: "HeqiAuto",
    context: "JD.com auto services supplier",
    location: "Beijing, China",
    period: "Mar 2014 - May 2017",
    bullets: [
      "Co-founded an automotive technology startup focused on digital solutions for the automotive industry.",
      "Led front-end architecture design and development, building web-based products and internal management systems from the ground up.",
      "Worked closely with customers and business stakeholders to translate requirements into product features, gaining early experience in product strategy and user-centric design.",
      "Managed the full product development lifecycle from requirements analysis and solution design to deployment and customer support.",
    ],
  },
];

const products = [
  {
    title: "LLM Enterprise Knowledge Platform",
    source: "NARI Group Corporation",
    description:
      "LLM-powered knowledge management product that helps employees search, retrieve, and apply enterprise knowledge at scale.",
    impact: "30,000+ users, 40% faster retrieval",
    tags: ["Enterprise AI", "Knowledge management", "LLM applications", "Roadmapping"],
  },
  {
    title: "Enterprise Communication Platform",
    source: "NARI Group Corporation",
    description:
      "Internal collaboration product launched to enterprise scale within six months, supporting high-volume messaging and daily coordination.",
    impact: "15,000 DAUs, 100,000+ daily messages",
    tags: ["Enterprise collaboration", "Cross-functional leadership", "Stakeholders"],
  },
  {
    title: "Meipian Core Publishing Platform",
    source: "Meipian",
    description:
      "Large-scale content publishing product evolved with a 10-member cross-functional team for creators and consumer publishing workflows.",
    impact: "150,000 daily posts, 30M page views",
    tags: ["Consumer product", "Publishing", "Team leadership", "User scale"],
  },
  {
    title: "Meipian WeChat Mini Program",
    source: "Meipian",
    description:
      "Consumer publishing product taken from concept to launch and scaled through product optimization and monetization initiatives.",
    impact: "2M DAUs, ¥40M revenue",
    tags: ["Mini Program", "Monetization", "Growth", "Product optimization"],
  },
];

const capabilities = [
  "Stakeholder management",
  "Cross-functional leadership",
  "Team leadership",
  "Enterprise AI",
  "Enterprise knowledge management",
  "Generative AI",
  "LLM-powered applications",
  "Product strategy",
  "Roadmapping",
  "AI product management",
  "Vue.js",
  "Frontend architecture",
];

const education = [
  "Master's Degree, Computer Science and Technology - Beijing University of Posts and Telecommunications (Sep 2011 - Mar 2014)",
  "Bachelor's Degree, Computer Science and Technology - Beijing University of Posts and Telecommunications (Sep 2007 - Jun 2011)",
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
        {eyebrow}
      </p>
      <h3 className="text-2xl font-semibold text-slate-100">{title}</h3>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <aside className="border-b border-white/10 bg-slate-950/95 px-5 py-5 backdrop-blur md:fixed md:inset-y-0 md:left-0 md:z-20 md:flex md:w-[280px] md:flex-col md:justify-between md:border-b-0 md:border-r md:px-7 md:py-8">
        <div>
          <a href="#intro" className="group mb-6 flex items-center gap-4 md:block">
            <Image
              alt="Cai You (David)"
              className="h-16 w-16 shrink-0 rounded-full object-cover shadow-[0_0_0_1px_rgba(148,163,184,0.16),0_18px_44px_rgba(2,6,23,0.55)]"
              height={64}
              src="/avatar.jpg"
              width={64}
            />
            <div className="md:mt-4">
              <p className="text-lg font-bold text-slate-100">Cai You (David)</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                AI Product Manager | Enterprise AI | Former Software Engineer.
              </p>
            </div>
          </a>

          <nav aria-label="Primary navigation" className="flex flex-wrap gap-2 md:flex-col">
            {navigation.map((item) => (
              <a
                className="nav-link rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200 md:rounded-none md:border-0 md:border-b md:border-slate-800 md:px-5 md:py-2"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 md:block">
          <div className="flex gap-3">
            <a aria-label="LinkedIn profile" className="icon-link" href={contact.linkedin}>
              <LinkedInIcon />
            </a>
            <a aria-label="GitHub profile" className="icon-link" href={contact.github}>
              <GitHubIcon />
            </a>
            <a aria-label="Email Cai You" className="icon-link" href={`mailto:${contact.email}`}>
              <MailIcon />
            </a>
          </div>
          <p className="text-xs text-slate-500 md:mt-4">© 2026 Cai You</p>
        </div>
      </aside>

      <main className="md:ml-[280px]">
        <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 md:px-12 md:py-20">
          <section id="intro" className="mb-24 scroll-mt-10 md:mb-32">
            <p className="mb-5 font-mono text-sm text-cyan-300">Cai You (David)</p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-normal text-slate-50 sm:text-6xl">
              AI Product Manager for enterprise AI and knowledge management.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              I build Enterprise AI products, knowledge management platforms, and
              LLM-powered applications that help organizations unlock and scale their
              collective knowledge.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
              Open to Product Management and AI Product roles worldwide, with
              relocation and visa sponsorship opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary-button" href={`mailto:${contact.email}`}>
                Contact me
              </a>
              <a className="secondary-button" download href="/resume.pdf">
                <DownloadIcon />
                <span className="ml-2">Download Resume</span>
              </a>
              <a className="secondary-button" href={contact.linkedin}>
                <LinkedInIcon />
                <span className="ml-2">View LinkedIn</span>
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div className="stat-card" key={highlight}>
                  {highlight}
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="mb-24 scroll-mt-10 md:mb-32">
            <SectionTitle eyebrow="About" title="Product leadership with engineering depth" />
            <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
              <div className="space-y-5 text-base leading-8 text-slate-400">
                <p>
                  I am a technical product manager with 12+ years of experience across
                  software engineering, product management, and AI-powered enterprise
                  solutions. My career started as a software engineer, giving me a
                  strong technical foundation for working closely with engineering and
                  AI teams.
                </p>
                <p>
                  Currently, I lead enterprise AI initiatives at NARI Group, focusing
                  on LLM-powered knowledge management platforms and internal
                  collaboration products serving tens of thousands of users.
                </p>
                <p>
                  Previously, I led product development at Meipian, helping scale
                  content publishing products and launching a WeChat Mini Program that
                  reached 2M DAUs and generated ¥40M in revenue.
                </p>
                <p className="text-slate-500">
                  I am passionate about building Enterprise AI products and
                  LLM-powered applications that help organizations make collective
                  knowledge easier to find, use, and scale.
                </p>
              </div>
              <div className="space-y-4">
                <div className="capability-panel">
                  {capabilities.map((capability) => (
                    <span className="skill-pill" key={capability}>
                      {capability}
                    </span>
                  ))}
                </div>
                <div className="info-panel">
                  <p className="info-label">Education</p>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-slate-400">
                    {education.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="mb-24 scroll-mt-10 md:mb-32">
            <SectionTitle eyebrow="Experience" title="Where I have worked" />
            <div className="space-y-8">
              {experience.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.role}`}>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h4 className="font-semibold text-cyan-200">{job.role}</h4>
                    <span className="text-slate-600">@</span>
                    <p className="text-slate-200">{job.company}</p>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{job.context}</p>
                  <p className="mt-2 font-mono text-xs text-slate-500">
                    {job.location} | {job.period}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                    {job.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span className="mt-1 text-cyan-300">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="products" className="mb-24 scroll-mt-10 md:mb-32">
            <SectionTitle eyebrow="Products" title="Selected product work" />
            <div className="grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <article className="project-card" key={product.title}>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    {product.source}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-slate-100">
                    {product.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {product.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-cyan-200">{product.impact}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span className="skill-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-10 pb-12">
            <SectionTitle eyebrow="Contact" title="Let us talk about enterprise AI products" />
            <p className="max-w-2xl text-base leading-8 text-slate-400">
              I am based in {contact.location} and focus on AI product management,
              enterprise knowledge management, internal collaboration products, and
              LLM-powered applications. I am open to Product Management and AI Product
              roles worldwide.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="primary-button" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a className="secondary-button" download href="/resume.pdf">
                <DownloadIcon />
                <span className="ml-2">Download Resume</span>
              </a>
              <a className="secondary-button" href={contact.linkedin}>
                <LinkedInIcon />
                <span className="ml-2">LinkedIn</span>
              </a>
              <a className="secondary-button" href={contact.github}>
                <GitHubIcon />
                <span className="ml-2">GitHub</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
