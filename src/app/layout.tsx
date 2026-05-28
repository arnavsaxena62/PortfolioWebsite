import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arnav Saxena",
    template: "%s | Arnav Saxena",
  },

  description: "Portfolio of Arnav Saxena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          relative
          min-h-screen
          overflow-x-hidden
          bg-[#021b1b]
          text-[#e7dcc3]
        "
      >

        {/* BACKGROUND IMAGE */}
        <div
          className="
            fixed inset-0
            bg-cover
            bg-left-top
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
              brightness(0.7)
              contrast(1.7)
            `,
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="
            fixed inset-0
            bg-[#021b1b]/85
            pointer-events-none
          "
        />

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
          {children}
        </main>

      </body>
    </html>
  );
}