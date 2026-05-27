import Content from "./content";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#021b1b] text-[#e7dcc3]">

      {/* BACKGROUND IMAGE */}
      <div
        className="
          fixed inset-0
          bg-cover bg-left-top
          opacity-30
          mix-blend-screen
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/background.webp')",
          filter: `
            grayscale(100%)
            sepia(100%)
            hue-rotate(65deg)
            saturate(300%)
            brightness(0.6)
            contrast(1.5)
          `,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-[#021b1b]/85 pointer-events-none" />

      {/* NOISE OVERLAY */}
      <div
        className="
          fixed inset-0
          opacity-[0.03]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/noise.jpg')",
        }}
      />

      {/* CONTENT */}
      <main className="relative z-10">
        <Content />
      </main>

    </div>
  );
}