export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar - Fixed */}
      <aside className="fixed left-0 top-0 h-screen w-[200px] md:w-[250px] flex flex-col justify-between p-6 md:p-8 bg-slate-950 border-r border-slate-800 z-10">
        {/* Top: Avatar + Name + Bio */}
        <div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 mb-4 flex items-center justify-center text-white font-bold text-xl">
            DC
          </div>
          <h2 className="text-slate-200 font-bold text-lg mb-1">David Cai</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            AI Engineer building RAG systems & LLM integrations.<br />
            Seeking opportunities in Calgary, Canada.
          </p>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <a href="#about" className="nav-link text-slate-400 hover:text-cyan-400 text-sm transition-colors py-1 border-b border-slate-700 hover:border-cyan-400">About</a>
            <a href="#experience" className="nav-link text-slate-400 hover:text-cyan-400 text-sm transition-colors py-1 border-b border-slate-700 hover:border-cyan-400">Experience</a>
            <a href="#projects" className="nav-link text-slate-400 hover:text-cyan-400 text-sm transition-colors py-1 border-b border-slate-700 hover:border-cyan-400">Projects</a>
            <a href="#contact" className="nav-link text-slate-400 hover:text-cyan-400 text-sm transition-colors py-1 border-b border-slate-700 hover:border-cyan-400">Contact</a>
          </nav>
        </div>

        {/* Bottom: Social Links + Copyright */}
        <div>
          {/* Social Icons */}
          <div className="flex gap-4 mb-4">
            <a href="https://github.com/rodickmini" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.181 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.657.242 2.878.118 3.181.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:rodickcai@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-slate-500 text-xs">© 2026 David Cai</p>
        </div>
      </aside>

      {/* Right Side - Scrollable Content */}
      <main className="ml-[200px] md:ml-[250px] flex-1 flex justify-center">
        <div className="w-full max-w-2xl px-6 md:px-12 py-24 md:py-32">

          {/* Intro Section */}
          <section id="intro" className="mb-32">
            <p className="text-cyan-400 mb-4 font-mono text-sm">Hi, my name is</p>
            <h1 className="text-slate-200 text-5xl md:text-6xl font-bold mb-2">David Cai.</h1>
            <h2 className="text-slate-500 text-4xl md:text-5xl font-bold mb-6">I build AI-powered systems.</h2>
            <p className="text-slate-400 max-w-lg leading-relaxed">
              I&apos;m an AI Engineer specializing in <span className="text-cyan-400">RAG systems</span> and <span className="text-cyan-400">LLM integration</span>.
              Currently seeking opportunities in <span className="text-green-400">Calgary, Canada</span>.
            </p>
          </section>

          {/* About Section */}
          <section id="about" className="mb-32">
            <h3 className="text-slate-200 font-bold text-lg mb-4 flex items-center">
              <span className="text-cyan-400 font-mono mr-2">//</span> About Me
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                With 10+ years spanning software engineering and product management, I&apos;ve evolved into an AI Engineer focused on making LLMs practical for enterprise use.
              </p>
              <p>
                My recent work involves building a <span className="text-cyan-400">RAG-powered knowledge base</span> that processes 10,000+ documents and serves 500+ users with 90% satisfaction. I&apos;ve designed the full pipeline: document parsing, intelligent chunking, vector storage (Milvus), hybrid retrieval, and LLM generation.
              </p>
              <p>
                I use <span className="text-cyan-400">AI-assisted coding</span> (GLM 5.1) to accelerate Python development, combining engineering capability with product thinking to deliver user-centric solutions.
              </p>
              <p>
                <span className="text-green-400">Open to relocating to Calgary, Canada</span> for AI Engineer / ML Engineer roles.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-32">
            <h3 className="text-slate-200 font-bold text-lg mb-6 flex items-center">
              <span className="text-cyan-400 font-mono mr-2">//</span> Where I&apos;ve Worked
            </h3>

            {/* NARI - AI Engineer */}
            <div className="mb-10">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h4 className="text-cyan-400 font-medium">AI Engineer — Knowledge Base</h4>
                <span className="text-slate-500">@</span>
                <span className="text-slate-300">NARI Group</span>
              </div>
              <p className="text-slate-500 font-mono text-xs mb-3">Feb 2026 - Present</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>Built RAG pipeline: parsing → chunking → Milvus → hybrid retrieval → Qwen Reranker → DeepSeek V3</li>
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>10,000+ docs, 500+ users, &lt;200ms latency, 90% satisfaction</li>
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>Python async, Docker, Prometheus + Grafana</li>
              </ul>
            </div>

            {/* NARI - PM */}
            <div className="mb-10">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h4 className="text-cyan-400 font-medium">Product Manager</h4>
                <span className="text-slate-500">@</span>
                <span className="text-slate-300">NARI Group</span>
              </div>
              <p className="text-slate-500 font-mono text-xs mb-3">2022 - Feb 2026</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>Enterprise IM: 30,000+ users, 15,000 DAUs</li>
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>Project management + SAP ERP: 4,000 users, ¥500M contracts</li>
              </ul>
            </div>

            {/* Meipian - PM */}
            <div className="mb-10">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h4 className="text-cyan-400 font-medium">Product Manager</h4>
                <span className="text-slate-500">@</span>
                <span className="text-slate-300">Meipian</span>
              </div>
              <p className="text-slate-500 font-mono text-xs mb-3">2019 - 2022</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>Led 10-member team: 150,000 daily posts, 30M PV</li>
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>WeChat Mini Program: 2M DAUs, ¥40M revenue</li>
              </ul>
            </div>

            {/* Meipian - Frontend */}
            <div className="mb-10">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h4 className="text-cyan-400 font-medium">Front-End Lead</h4>
                <span className="text-slate-500">@</span>
                <span className="text-slate-300">Meipian</span>
              </div>
              <p className="text-slate-500 font-mono text-xs mb-3">2017 - 2019</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>Vue.js + PHP modernization: 80% efficiency gain</li>
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>Speaker: Google DevFest Nanjing 2017</li>
              </ul>
            </div>

            {/* HeqiAuto */}
            <div className="mb-10">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h4 className="text-cyan-400 font-medium">Co-Founder & Tech Lead</h4>
                <span className="text-slate-500">@</span>
                <span className="text-slate-300">HeqiAuto</span>
              </div>
              <p className="text-slate-500 font-mono text-xs mb-3">2014 - 2017</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex"><span className="text-cyan-400 mr-3">▸</span>O2O platform + JD.com APIs: 3,000+ shops, ¥5M profit</li>
              </ul>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-32">
            <h3 className="text-slate-200 font-bold text-lg mb-6 flex items-center">
              <span className="text-cyan-400 font-mono mr-2">//</span> Some Things I&apos;ve Built
            </h3>

            <div className="grid gap-4">
              {/* Knowledge Base */}
              <div className="border border-slate-700 rounded p-5 hover:border-cyan-400/50 transition-colors">
                <h4 className="text-slate-200 font-medium mb-1">Enterprise Knowledge Base</h4>
                <p className="text-slate-500 text-xs mb-2">NARI Group</p>
                <p className="text-slate-400 mb-3 leading-relaxed text-sm">RAG system serving 500+ users. MinerU → Milvus → Qwen → DeepSeek V3.</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="px-2 py-0.5 border border-slate-600 rounded">Python</span>
                  <span className="px-2 py-0.5 border border-slate-600 rounded">Milvus</span>
                  <span className="px-2 py-0.5 border border-slate-600 rounded">DeepSeek</span>
                  <span className="px-2 py-0.5 border border-slate-600 rounded">Docker</span>
                </div>
              </div>

              {/* FeishuDocDownloader */}
              <div className="border border-slate-700 rounded p-5 hover:border-cyan-400/50 transition-colors">
                <a href="https://github.com/rodickmini/FeishuDocDownloader" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors mb-1 block">FeishuDocDownloader</a>
                <p className="text-slate-500 text-xs mb-2">GitHub</p>
                <p className="text-slate-400 mb-3 leading-relaxed text-sm">Python CLI for batch exporting Feishu documents.</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="px-2 py-0.5 border border-slate-600 rounded">Python</span>
                  <span className="px-2 py-0.5 border border-slate-600 rounded">CLI</span>
                </div>
              </div>

              {/* YuzuTask */}
              <div className="border border-slate-700 rounded p-5 hover:border-cyan-400/50 transition-colors">
                <a href="https://github.com/rodickmini/YuzuTask" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors mb-1 block">YuzuTask</a>
                <p className="text-slate-500 text-xs mb-2">GitHub</p>
                <p className="text-slate-400 mb-3 leading-relaxed text-sm">Task app built with AI-assisted coding. TypeScript + Vue.js.</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="px-2 py-0.5 border border-slate-600 rounded">TypeScript</span>
                  <span className="px-2 py-0.5 border border-slate-600 rounded">Vue.js</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <h3 className="text-slate-200 font-bold text-lg mb-4 flex items-center">
              <span className="text-cyan-400 font-mono mr-2">//</span> Get In Touch
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              I&apos;m currently looking for AI Engineer opportunities in Calgary, Canada. Let&apos;s talk.
            </p>
            <a href="mailto:rodickcai@gmail.com" className="inline-block px-5 py-2 border border-cyan-400 text-cyan-400 text-sm rounded hover:bg-cyan-400/10 transition-colors font-mono">
              Say Hello
            </a>
          </section>

        </div>
      </main>
    </div>
  );
}