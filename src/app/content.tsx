import { Space_Grotesk, Noto_Serif } from "next/font/google";

const serif = Noto_Serif({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-serif",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const projects = [
  {
    num: "01",
    name: "PROMPTOPS",
    desc: "Full-stack prompt engineering workbench, run prompts across multiple LLMs in parallel, compare outputs side-by-side, and evaluate results with an AI-as-judge pipeline. Includes token tracking, cost estimation, and a versioning system for repeatable experiments.",
    stack: "REACT • TYPESCRIPT • FASTAPI • OPENROUTER API",
    href: "https://github.com/arnavsaxena62/PromptOps",
  },
  {
    num: "02",
    name: "POLLUTION TRACKER",
    desc: "Simulates pollutant dispersion using real wind-field data and bilinear interpolation on lat-lon grids. Optimized particle tracking for high-frequency real-time updates, with visualizations of spread patterns and regional directional flow.",
    stack: "PYTHON • NUMPY • GEOSPATIAL DATA",
    href: "https://github.com/arnavsaxena62/pollution-tracker",
  },
  {
    num: "03",
    name: "STAR MAP",
    desc: "GPU-accelerated 3D star field renderer with smooth pan, zoom, and rotation. Handles large point-cloud datasets at stable real-time framerates using camera transforms and depth-based scaling for intuitive spatial navigation.",
    stack: "PYTHON • VISPY • OPENGL",
    href: "https://github.com/arnavsaxena62/star-map",
  },
];

export default function Content() {
  return (
    <div className={`min-h-screen text-[#e7dcc3] text-5 ${serif.className}`}>
      <main className="p-6">
        <div className="border border-[#8f7d55]/50 uppercase tracking-[0.18em]">

          {/* NAVBAR */}
          <nav className="grid grid-cols-5">
            <a
              href="#hero"
              className={`${sans.className} tracking-normal border-r border-[#8f7d55]/50 p-3 text-5xl font-bold leading-none flex items-start no-underline text-[#e7dcc3]`}
            >
              arnav <br /> saxena
            </a>
            <a href="#hero" className="border-r border-[#8f7d55]/50 p-6 flex items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">
              home
            </a>
            <a href="#about" className="border-r border-[#8f7d55]/50 p-6 flex items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">
              about
            </a>
            <a href="#projects" className="border-r border-[#8f7d55]/50 p-6 flex items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">
              projects
            </a>
            <a href="#contact" className="p-6 flex items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">
              contact
            </a>
          </nav>

          {/* HERO */}
          <section id="hero" className="border-t border-[#8f7d55]/50 p-25 flex items-center justify-center">
            <div className="text-center space-y-5">
              <p className="text-sm tracking-[0.3em] text-[#c9b68b]/80">
                SYSTEMS · LLMS · MACHINE LEARNING
              </p>
              <h1 className={`${sans.className} font-bold text-5xl md:text-5xl leading-none`}>
                BUILDING <br /> INTELLIGENT <br /> SYSTEMS
              </h1>
              <p className="max-w-2xl text-sm normal-case tracking-normal leading-relaxed text-[#c9b68b]/80">
                From low-level C to large language models, engineering systems
                that span hardware, physics simulation, and intelligent interfaces.
              </p>
              <div>
                <a
                  href="https://drive.google.com/file/d/1bbPaAkSP1uUqR6XqwcG5H240NgELriYk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${sans.className} inline-block normal-case tracking-wider text-sm px-8 py-3 border border-[#8f7d55]/70 text-[#c9b68b] hover:bg-white/5 transition duration-300 no-underline`}
                >
                  Download Resume ↗
                </a>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="grid grid-cols-5 border-t border-[#8f7d55]/50">
            <div className="col-span-3 min-h-[400px] p-10 space-y-8">
              <h2 className={`${sans.className} text-4xl font-bold`}>about</h2>
              <p className="normal-case tracking-normal leading-loose text-[#c9b68b]/80 text-sm max-w-2xl">
                I'm a first-year CS student at Jaypee Institute of Information Technology, specialising in AI/ML ,
                but I've been building things long before university. In school I led the tech club, placed first
                in an interschool hackathon, and kept showing up on the podium at intraschool competitions for
                four years running.
              </p>
              <p className="normal-case tracking-normal leading-loose text-[#c9b68b]/80 text-sm max-w-2xl">
                My projects tend to live at the intersection of rigour and curiosity, whether that's simulating
                pollutant dispersion with real wind data, building a GPU-accelerated star renderer, or wiring up
                an LLM evaluation framework from scratch. I care about understanding systems at a low level, which
                is why I enjoy working across Python, C++, and OpenGL in the same week.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "C++", "TypeScript", "React", "FastAPI", "OpenCV", "SciKit Learn", "OpenGL"].map((s) => (
                  <span key={s} className="text-[10px] tracking-[0.14em] px-3 py-1 border-[#8f7d55]/35 text-[#c9b68b]/70">
                    {s.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-2 border-l border-[#8f7d55]/50 p-10">
              <h2 className={`${sans.className} text-4xl font-bold mb-8`}>education</h2>
              <div className="space-y-6 text-[#c9b68b]/80">
                <div>
                  <p className="text-sm mb-2">2025 - PRESENT</p>
                  <h3 className="text-xl">B.Tech Computer Science</h3>
                  <p className="text-sm mt-1 normal-case tracking-normal text-[#c9b68b]/60">
                    Jaypee Institute of Information Technology
                  </p>
                  <p className="text-sm mt-1 normal-case tracking-normal text-[#c9b68b]/60">
                    Specialisation in AI / ML
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2">2025</p>
                  <h3 className="text-xl">High School Diploma</h3>
                  <p className="text-sm mt-1 normal-case tracking-normal text-[#c9b68b]/60">
                    Step By Step School, Noida
                  </p>
                  <p className="text-sm mt-1 normal-case tracking-normal text-[#c9b68b]/60">
                    O-Levels · JEE Mathematics & Physics
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2">ACHIEVEMENTS</p>
                  <p className="text-sm normal-case tracking-normal text-[#c9b68b]/60 leading-relaxed">
                    1st, Interschool Hackathon 2024<br />
                    Tech Club Lead 2025<br />
                    4× Intraschool Hackathon Podium
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS TITLE */}
          <div id="projects" className="border-t border-[#8f7d55]/50 p-5 flex items-center">
            <h2 className={`${sans.className} text-4xl font-bold`}>projects</h2>
          </div>

          {/* PROJECT GRID */}
          <section className="grid grid-cols-3 border-t border-[#8f7d55]/50">
            {projects.map((p, i) => (
              <a
                key={p.num}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-[360px] p-8 hover:bg-white/5 transition duration-500 cursor-pointer no-underline text-[#e7dcc3] ${i < projects.length - 1 ? "border-r border-[#8f7d55]/50" : ""}`}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-sm text-[#c9b68b]/60 mb-4">{p.num}</p>
                    <h3 className="text-3xl font-bold mb-6">{p.name}</h3>
                    <p className="normal-case tracking-normal text-sm text-[#c9b68b]/70">{p.desc}</p>
                  </div>
                  <p className={`${serif.className} text-xs  text-[#c9b68b]/50`}>{p.stack}</p>
                </div>
              </a>
            ))}
          </section>

          {/* CONTACT */}
          <section id="contact" className="border-t border-[#8f7d55]/50">
            <div className="h-32 px-10 flex items-center">
              <h2 className="text-5xl font-bold">contact</h2>
            </div>

            <a
              href="https://github.com/arnavsaxena62"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 block"
            >
              <div className="grid grid-cols-5 border-t border-[#8f7d55]/50">
                <div className="col-span-3 p-3 border-r border-[#8f7d55]/50 px-10 flex items-center">github</div>
                <div className="col-span-2 p-3 px-10 flex items-center normal-case tracking-normal text-[#c9b68b]/70">github.com/arnavsaxena62</div>
              </div>
            </a>

            <a
              href="mailto:arnavsaxena62@gmail.com"
              className="no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 block"
            >
              <div className="grid grid-cols-5 border-t border-[#8f7d55]/50">
                <div className="col-span-3 p-3 border-r border-[#8f7d55]/50 px-10 flex items-center">email</div>
                <div className="col-span-2 p-3 px-10 flex items-center normal-case tracking-normal text-[#c9b68b]/70">arnavsaxena62@gmail.com</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/arnavsaxena"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 block"
            >
              <div className="grid grid-cols-5 border-t border-[#8f7d55]/50">
                <div className="col-span-3 p-3 border-r border-[#8f7d55]/50 px-10 flex items-center">linkedin</div>
                <div className="col-span-2 p-3 px-10 flex items-center normal-case tracking-normal text-[#c9b68b]/70">linkedin.com/in/arnavsaxena</div>
              </div>
            </a>
          </section>

        </div>
      </main>
    </div>
  );
}