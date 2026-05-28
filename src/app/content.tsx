import { Space_Grotesk, Noto_Serif } from "next/font/google";
import Link from "next/link";
import { ProjectData } from "@/data/projects";
import Navbar from "@/components/navbar";

const serif = Noto_Serif({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-serif",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});



export default function Content() {
  return (
    <div className={`min-h-screen text-[#e7dcc3] text-5 ${serif.className}`}>
      <main className="p-3 sm:p-6">
        <div className="border border-[#8f7d55]/50 uppercase tracking-[0.18em]">

          <Navbar />    

          {/* HERO */}
          <section id="hero" className="border-t border-[#8f7d55]/50 px-6 py-16 sm:p-25 flex items-center justify-center">
            <div className="text-center space-y-5">
              <p className="text-sm tracking-[0.3em] text-[#c9b68b]/80">
                SYSTEMS · LLMS · MACHINE LEARNING
              </p>
              <h1 className={`${sans.className} font-bold text-4xl sm:text-5xl leading-none`}>
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
          <section id="about" className="grid grid-cols-1 sm:grid-cols-5 border-t border-[#8f7d55]/50">
            <div className="col-span-1 sm:col-span-3 p-6 sm:p-10 space-y-8">
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

            <div className="col-span-1 sm:col-span-2 border-t sm:border-t-0 sm:border-l border-[#8f7d55]/50 p-6 sm:p-10">
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
          <section className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#8f7d55]/50">
            {ProjectData.slice(0, 3).map((p, i) => (
                <a
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    rel="noopener noreferrer"
                    className={`
                    p-6 sm:p-8 hover:bg-white/5 transition duration-500 cursor-pointer no-underline text-[#e7dcc3]
                    ${i < ProjectData.length - 1
                        ? "border-b sm:border-b-0 sm:border-r border-[#8f7d55]/50"
                        : ""}
                    `}
                >
                    <div className="flex flex-col justify-between gap-6 sm:h-[360px]">
                    <div>
                        <p className="text-sm text-[#c9b68b]/60 mb-4">
                        {p.num}
                        </p>

                        <h3 className="text-3xl font-bold mb-6">
                        {p.name}
                        </h3>

                        <p className="normal-case tracking-normal text-sm text-[#c9b68b]/70">
                        {p.tagline}
                        </p>
                    </div>

                    <p className={`${serif.className} text-xs text-[#c9b68b]/50`}>
                        {p.stack.join(" • ")}
                    </p>
                    </div>
                </a>
                ))}
            
            
            
            </section>
            <div id="projects" className="border-t border-[#8f7d55]/50">
  <Link
    href="/projects"
    className="no-underline p-3 flex items-center justify-between hover:bg-white/5 transition duration-500 group"
  >
    <p className={` text-xs text-[#c9b68b]/70 px-5`}>
      more projects
    </p>
    <span className="text-[#c9b68b]/40 group-hover:text-[#e7dcc3] px-5 transition duration-500 text-xl">
      ↗
    </span>
  </Link>
</div>

          {/* CONTACT */}
          <section id="contact" className="border-t border-[#8f7d55]/50">
            <div id="projects" className="border-t border-[#8f7d55]/50 p-5 flex items-center">
                <h2 className={`${sans.className} text-4xl font-bold`}>contact</h2>
            </div>

            <a href="https://github.com/arnavsaxena62" target="_blank" rel="noopener noreferrer" className="no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 block">
                <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-[#8f7d55]/50">
                <div className="col-span-1 sm:col-span-3 p-3 border-r border-[#8f7d55]/50 px-4 sm:px-10 flex items-center">github</div>
                <div className="col-span-1 sm:col-span-2 p-3 pl-4 pr-6 sm:px-10 flex items-center normal-case tracking-normal text-[#c9b68b]/70 text-xs sm:text-base truncate min-w-0">github.com/arnavsaxena62</div>
                </div>
            </a>

            <a href="mailto:arnavsaxena62@gmail.com" className="no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 block">
                <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-[#8f7d55]/50">
                <div className="col-span-1 sm:col-span-3 p-3 border-r border-[#8f7d55]/50 px-4 sm:px-10 flex items-center">email</div>
                <div className="col-span-1 sm:col-span-2 p-3 pl-4 pr-6 sm:px-10 flex items-center normal-case tracking-normal text-[#c9b68b]/70 text-xs sm:text-base truncate min-w-0">arnavsaxena62@gmail.com</div>
                </div>
            </a>

            <a href="https://linkedin.com/in/arnavsaxena" target="_blank" rel="noopener noreferrer" className="no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 block">
                <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-[#8f7d55]/50">
                <div className="col-span-1 sm:col-span-3 p-3 border-r border-[#8f7d55]/50 px-4 sm:px-10 flex items-center">linkedin</div>
                <div className="col-span-1 sm:col-span-2 p-3 pl-4 pr-6 sm:px-10 flex items-center normal-case tracking-normal text-[#c9b68b]/70 text-xs sm:text-base truncate min-w-0">linkedin.com/in/arnavsaxena</div>
                </div>
            </a>
            </section>

        </div>
      </main>
    </div>
  );
}