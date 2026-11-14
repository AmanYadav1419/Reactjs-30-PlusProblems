import React from "react";
import { Link } from "react-router-dom";
import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
  Globe,
  ArrowUpRight,
  Code,
  Terminal,
  // Layers,
  Sparkle,
} from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Portfolio",
      url: "https://aman-yadav1419-portfolio.vercel.app/",
      icon: <Globe size={16} weight="regular" />,
      tag: "Live Site",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aman-yadav2003/",
      icon: <LinkedinLogo size={16} weight="regular" />,
      tag: "Connect",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/Aman_Yadav1419",
      icon: <XLogo size={16} weight="regular" />,
      tag: "Follow",
    },
    {
      name: "GitHub",
      url: "https://github.com/Aman-Yadav1419/Reactjs-30-PlusProblems",
      icon: <GithubLogo size={16} weight="regular" />,
      tag: "Star Repo",
    },
  ];

  const tracks = [
    { label: "Beginner Track", range: "#01 - #10", path: "/problem/1" },
    { label: "Intermediate Track", range: "#11 - #20", path: "/problem/11" },
    { label: "Advanced Systems", range: "#21 - #37", path: "/problem/21" },
  ];

  const highlights = [
    "State & Reducer Engines",
    "Context API Architecture",
    "Custom Hooks & Timing",
    "Nested & Dynamic Routing",
    "Recursion & File Explorers",
  ];

  return (
    <footer className="w-full bg-[#09090b] border-t border-white/5 relative overflow-hidden text-zinc-400 font-sans">
      {/* Subtle top edge refraction line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Terminal size={18} weight="bold" />
                </div>
                <div>
                  <span className="font-bold text-white text-base tracking-tight">
                    React.js Practice Lab
                  </span>
                  <span className="ml-2 font-mono text-[10px] uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                    37 Problems
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed max-w-[42ch]">
                A production-grade, interactive laboratory featuring 37+ real-world React.js engineering challenges. Built to master architectural state logic, custom hooks, dynamic routing, and high-performance UI patterns.
              </p>
            </div>

            {/* Author Credit Badge */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-white font-mono">
                AY
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-medium">Curated & Engineered by</p>
                <a
                  href="https://aman-yadav1419-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  Aman Yadav
                  <ArrowUpRight
                    size={12}
                    className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Curriculum Tracks Column */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300 flex items-center gap-2">
              {/* <Layers size={14} weight="bold" className="text-blue-400" /> */}
              Curriculum Tracks
            </h4>

            <ul className="space-y-2.5">
              {tracks.map((track) => (
                <li key={track.label}>
                  <Link
                    to={track.path}
                    className="group flex items-center justify-between text-sm py-1.5 px-3 rounded-lg hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5"
                  >
                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                      {track.label}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500 group-hover:text-blue-400 transition-colors">
                      {track.range}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <h5 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                Core Competencies
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono text-zinc-400 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social & Connect Column */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300 flex items-center gap-2">
              <Sparkle size={14} weight="bold" className="text-blue-400" />
              Connect & Author
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              ))}
            </div>

            {/* Quick Status / GitHub Star CTA */}
            <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Open Source Project
                </span>
              </div>
              <a
                href="https://github.com/AmanYadav1419/Reactjs-30-PlusProblems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg border border-white/10 transition-all flex items-center gap-1.5 active:scale-95"
              >
                <GithubLogo size={14} weight="bold" />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>
            © {currentYear} React Practice Lab. Crafted with passion by{" "}
            <a
              href="https://aman-yadav1419-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline underline-offset-4 transition-colors font-medium"
            >
              Aman Yadav
            </a>
            .
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Code size={13} /> React 18 + Vite + Tailwind
            </span>
            <span className="text-zinc-700">|</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
