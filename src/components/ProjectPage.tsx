"use client";

import { Space_Grotesk, Noto_Serif } from "next/font/google";
import { useState } from "react";
import { ProjectData } from "@/data/projects";
import  Navbar  from "@/components/navbar"

const serif = Noto_Serif({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-serif",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

function Carousel({ images }: { images: ProjectData["images"] }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full border-b border-[#8f7d55]/50">

      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/7" }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.caption}
            className={`
              absolute inset-0
              w-full h-full
              object-contain object-center
              transition-opacity duration-500
              ${i === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        <div className="absolute inset-0 bg-black/30" />

        <p
          className={`
            ${serif.className}
            absolute bottom-4 left-6
            text-xs tracking-widest
            text-[#c9b68b]/70 uppercase
          `}
        >
          {images[current].caption}
        </p>

        <button
          onClick={prev}
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            w-9 h-9
            border border-[#8f7d55]/50
            flex items-center justify-center
            text-[#c9b68b]
            hover:bg-white/10
            transition
          "
        >
          ←
        </button>

        <button
          onClick={next}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            w-9 h-9
            border border-[#8f7d55]/50
            flex items-center justify-center
            text-[#c9b68b]
            hover:bg-white/10
            transition
          "
        >
          →
        </button>
      </div>
    </div>
  );
}

export default function ProjectPage({
  project,
}: {
  project: ProjectData;
}) {
  return (
    <div className={`min-h-screen text-[#e7dcc3] ${serif.className}`}>
      <main className="p-3 sm:p-6">
    <div className="border border-[#8f7d55]/50 uppercase tracking-[0.18em]">
        <Navbar/>
    </div>

        <div className="border border-[#8f7d55]/50 uppercase tracking-[0.18em]">

          {/* HEADER */}
          <div className="border-b border-[#8f7d55]/50 grid grid-cols-1 sm:grid-cols-5">

            <div className="sm:col-span-5 p-6 sm:p-10 border-r border-[#8f7d55]/50">

              <p className="text-xs text-[#c9b68b]/50 mb-3 tracking-[0.3em]">
                PROJECT {project.num}
              </p>

              <h1
                className={`
                  ${sans.className}
                  text-4xl sm:text-6xl
                  font-bold
                  leading-none
                  mb-4
                `}
              >
                {project.name}
              </h1>

            </div>

            {/* HIGHLIGHTS */}
           

          </div>

          {/* CAROUSEL */}
          <Carousel images={project.images} />

          {/* CONTENT */}
          <section className="grid grid-cols-1 sm:grid-cols-5 border-t border-[#8f7d55]/50">

            <div className="sm:col-span-3 p-6 sm:p-10 space-y-6 border-r border-[#8f7d55]/50">

              <h2 className={`${sans.className} text-3xl font-bold`}>
                about
              </h2>

              {project.about.map((para, i) => (
                <p
                  key={i}
                  className="
                    normal-case tracking-normal
                    text-sm text-[#c9b68b]/75
                    leading-loose
                  "
                >
                  {para}
                </p>
              ))}

            </div>

            {/* LINKS */}
            <div className="sm:col-span-2 flex flex-col">
              
               <div className="sm:col-span-2 grid grid-cols-2">

              {project.highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`
                    p-6 sm:p-8
                    flex flex-col justify-between gap-2
                     border-[#8f7d55]/50

                    ${i % 2 === 0 ? "border-r border-[#8f7d55]/50" : ""}

                    ${i < 2 ? "border-b border-[#8f7d55]/50" : ""}
                    border-b
                    border-t
                  `}
                >
                  <p className="text-[10px] tracking-[0.2em] text-[#c9b68b]/50">
                    {h.label.toUpperCase()}
                  </p>

                  <p
                    className={`
                      ${sans.className}
                      xl:text-2xl
                      font-bold
                      normal-case
                      tracking-normal
                      truncate
                      md:text-lg
                    `}
                  >
                    {h.value}
                  </p>
                </div>
              ))}

            </div>
              <div className="p-6 sm:p-10 pb-4">
                <h2 className={`${sans.className} text-3xl font-bold`}>
                  links
                </h2>

              </div>
              {/* {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    grid grid-cols-2
                    border-t border-[#8f7d55]/50
                    no-underline text-[#e7dcc3]
                    hover:bg-white/5
                    transition
                    border-b
                  "
                >
                  <div className="p-4 px-6 sm:px-10 border-r border-[#8f7d55]/50 text-sm">
                    {link.label.toUpperCase()}
                  </div>

                  <div className="p-4 px-6 normal-case tracking-normal text-[#c9b68b]/50 text-xs">
                    {link.href.replace(/^https?:\/\//, "")} ↗
                  </div>
                </a>
              ))} */}

              {project.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid grid-cols-2 border-t border-[#8f7d55]/50 no-underline text-[#e7dcc3] hover:bg-white/5 transition border-b"
                    >
                        <div className="p-4 px-6 sm:px-10 border-r border-[#8f7d55]/50 text-sm">
                        {link.label.toUpperCase()}
                        </div>
                        <div className="p-4 px-6 normal-case tracking-normal text-[#c9b68b]/50 text-xs truncate min-w-0">
                        {link.href.replace(/^https?:\/\//, "")} ↗
                        </div>
                    </a>
                    ))}

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}