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

export default function ProjectsPage() {
  return (
    <div className={`min-h-screen text-[#e7dcc3] text-5 ${serif.className}`}>
      <main className="p-3 sm:p-6">
        <div className="border border-[#8f7d55]/50 uppercase tracking-[0.18em]">

          <Navbar />

          {/* PAGE HEADER */}
          <section className="border-t border-[#8f7d55]/50 px-6 py-12 sm:px-10 sm:py-16 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#c9b68b]/60 mb-3">
                SELECTED WORK
              </p>
              <h1 className={`${sans.className} font-bold text-4xl sm:text-5xl leading-none`}>
                PROJECTS
              </h1>
            </div>
            <p className="text-xs tracking-[0.2em] text-[#c9b68b]/40 hidden sm:block">
              {ProjectData.length} PROJECTS
            </p>
          </section>

          {/* COLUMN HEADERS */}
          <div className="border-t border-[#8f7d55]/50 grid grid-cols-12 px-6 sm:px-10 py-3">
            <span className="col-span-1 text-[10px] tracking-[0.2em] text-[#c9b68b]/40">NO.</span>
            <span className="col-span-5 text-[10px] tracking-[0.2em] text-[#c9b68b]/40">PROJECT</span>
            <span className="col-span-4 text-[10px] tracking-[0.2em] text-[#c9b68b]/40 hidden sm:block">STACK</span>
            <span className="col-span-2 text-[10px] tracking-[0.2em] text-[#c9b68b]/40 hidden sm:block text-right">STATUS</span>
          </div>

          {/* PROJECT ROWS */}
          <div className="border-t border-[#8f7d55]/50">
            {ProjectData.map((p, i) => {
              const status = p.highlights.find((h) => h.label === "Status")?.value ?? "—";

              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="no-underline text-[#e7dcc3]"
                >
                  <div
                    className={`
                      group grid grid-cols-12 items-start px-6 sm:px-10 py-8
                      hover:bg-white/5 transition duration-500 cursor-pointer
                      border-b border-[#8f7d55]/50
                    `}
                  >
                    {/* NUMBER */}
                    <div className="col-span-1 pt-1">
                      <span className="text-xs text-[#c9b68b]/40">{p.num}</span>
                    </div>

                    {/* NAME + TAGLINE */}
                    <div className="col-span-11 sm:col-span-5 space-y-3 pr-4">
                      <h2 className={`${sans.className} font-bold text-2xl sm:text-3xl leading-none group-hover:text-white transition duration-300`}>
                        {p.name}
                      </h2>
                      <p className="normal-case tracking-normal text-sm text-[#c9b68b]/60 leading-relaxed max-w-sm">
                        {p.fastline}
                      </p>

                      {/* STACK — mobile only */}
                      <div className="flex flex-wrap gap-x-3 gap-y-1 sm:hidden pt-1">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className={`${serif.className} text-[10px] tracking-[0.12em] text-[#c9b68b]/40`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* STACK — desktop */}
                    <div className="col-span-4 hidden sm:flex flex-wrap gap-x-4 gap-y-2 pt-1 pr-4">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className={`${serif.className} text-[11px] tracking-[0.12em] text-[#c9b68b]/50`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* STATUS + ARROW */}
                    <div className="col-span-2 hidden sm:flex items-start justify-end pt-1 gap-3">
                      <span className="text-[11px] tracking-[0.14em] text-[#c9b68b]/50">
                        {status.toUpperCase()}
                      </span>
                      <span className="text-[#c9b68b]/30 group-hover:text-[#c9b68b]/80 group-hover:translate-x-0.5 transition-all duration-300">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* FOOTER ROW */}
          <div className="border-t border-[#8f7d55]/50 px-6 sm:px-10 py-5 flex items-center justify-between">
            <Link
              href="/"
              className={`${sans.className} no-underline normal-case tracking-wider text-xs text-[#c9b68b]/50 hover:text-[#c9b68b] transition duration-300`}
            >
              ← Back to Home
            </Link>
            <a
              href="https://github.com/arnavsaxena62"
              target="_blank"
              rel="noopener noreferrer"
              className={`${sans.className} no-underline normal-case tracking-wider text-xs text-[#c9b68b]/50 hover:text-[#c9b68b] transition duration-300`}
            >
              GitHub ↗
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}