import { Space_Grotesk, Noto_Serif } from "next/font/google";

const sans = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function Navbar() {
    return (
        <nav className="grid grid-cols-2 sm:grid-cols-5">
            <a
                href="#hero"
                className={`${sans.className} tracking-normal border-r border-[#8f7d55]/50 p-3 sm:p-3 text-2xl sm:text-5xl font-bold leading-tight flex items-center no-underline text-[#e7dcc3]`}
            >
                arnav <br /> saxena
            </a>

            {/* Desktop nav links */}
            <a href="/#hero" className="hidden sm:flex border-r border-[#8f7d55]/50 p-6 items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">home</a>
            <a href="/#about" className="hidden sm:flex border-r border-[#8f7d55]/50 p-6 items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">about</a>
            <a href="/#projects" className="hidden sm:flex border-r border-[#8f7d55]/50 p-6 items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">projects</a>
            <a href="/#contact" className="hidden sm:flex p-6 items-start no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300">contact</a>

            {/* Mobile nav links */}
            <div className="grid grid-cols-2 sm:hidden">
                <a href="/#hero" className="border-l border-b border-[#8f7d55]/50 p-2 flex items-center justify-center no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 text-[9px]">home</a>
                <a href="/#about" className="border-l border-b border-[#8f7d55]/50 p-2 flex items-center justify-center no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 text-[9px]">about</a>
                <a href="/#projects" className="border-l border-[#8f7d55]/50 p-2 flex items-center justify-center no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 text-[9px]">projects</a>
                <a href="/#contact" className="border-l border-[#8f7d55]/50 p-2 flex items-center justify-center no-underline text-[#e7dcc3] hover:bg-white/5 transition duration-300 text-[9px]">contact</a></div>
        </nav>
    );
}