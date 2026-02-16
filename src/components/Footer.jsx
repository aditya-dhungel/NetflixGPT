import React from "react";
import { ScrambleText } from "./scramble-text";

const Footer = () => {
  const footerLinks = [
    {
      category: "Company",
      items: ["About Us", "Jobs", "Investor Relations", "Media Centre"],
    },
    {
      category: "Help",
      items: ["FAQ", "Help Centre", "Account", "Contact Us"],
    },
    {
      category: "Legal",
      items: ["Terms of Use", "Privacy", "Cookie Preferences", "Legal Notices"],
    },
    {
      category: "Experience",
      items: ["Ways to Watch", "Corporate Information", "Only on NetflixGPT"],
    },
  ];

  const socialIcons = {
    GitHub: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    Twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    LinkedIn: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-neutral-950 to-black text-gray-300 px-6 md:px-16 pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Enhanced gradient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-900/10 blur-3xl pointer-events-none rounded-full" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Brand section */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-4 inline-block cursor-pointer group">
            <span className="inline-flex items-center gap-2">
              <ScrambleText text="NetflixGPT" />
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
            A cinematic discovery experience powered by AI — explore, preview,
            and enjoy movies in a Netflix-inspired interface built for learning
            and experimentation.
          </p>
        </div>

        {/* Links organized by category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h3 className="text-white font-semibold text-sm md:text-base mb-4 tracking-wide">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group cursor-pointer">
                      <span className="group-hover:text-red-500 transition-colors">
                        {item}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Language section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12 pb-8 border-b border-white/10">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 mr-2">Follow us:</span>
            {Object.entries(socialIcons).map(([name, icon]) => (
              <button
                key={name}
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label={name}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Language selector */}
          <div className="relative">
            <select className="appearance-none bg-black/50 backdrop-blur-sm border border-white/20 text-white text-sm px-5 py-2.5 pr-10 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 hover:border-white/40 transition-all">
              <option>🌐 English</option>
              <option>🌐 हिन्दी</option>
              <option>🌐 Español</option>
              <option>🌐 Français</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>© 2026 NetflixGPT</span>
            <span className="text-white/20">•</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-600">Built with</span>
            <span className="text-red-500">♥</span>
            <span className="text-gray-600">using</span>
            <div className="flex items-center gap-2 text-white/70">
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">
                React
              </span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">
                Tailwind
              </span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">
                TMDB API
              </span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10">
                GEMINI API
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
