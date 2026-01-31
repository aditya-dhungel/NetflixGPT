import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 px-6 md:px-16 pt-20 pb-12 overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-[#141414] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-600/10 blur-3xl rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative">
        {/* Brand line */}
        <h2 className="text-white text-lg md:text-xl font-semibold tracking-wide mb-4 inline-block cursor-pointer">
          <span className="group inline-flex items-center">
            <span className="inline-block text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-white">
              Netflix
            </span>
            <span className="inline-block text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-red-600">
              GPT
            </span>
          </span>
        </h2>

        <p className="text-sm text-gray-400 max-w-xl mb-10 leading-relaxed">
          NetflixGPT is a cinematic discovery experience powered by AI —
          explore, preview, and enjoy movies in a Netflix-inspired interface
          built for learning and experimentation.
        </p>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-8 text-sm">
          {[
            "FAQ",
            "Help Centre",
            "Account",
            "Media Centre",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
            "Legal Notices",
            "Only on NetflixGPT",
          ].map((item) => (
            <span
              key={item}
              className="hover:text-white hover:underline underline-offset-4 decoration-red-600 cursor-pointer transition-all duration-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Language */}
          <select className="bg-black border border-gray-600 text-white text-sm px-4 py-2 rounded-md w-max focus:outline-none focus:ring-1 focus:ring-red-600">
            <option>English</option>
            <option>हिन्दी</option>
          </select>

          {/* Meta */}
          <div className="text-xs text-gray-500 tracking-wide">
            <p>NetflixGPT © 2026</p>
            <p className="mt-1">Built with React, Tailwind & TMDB API</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
