import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptError = ({ message }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="relative mx-auto my-10 max-w-xl w-full px-6 animate-fade-in">
      <div className="relative p-8 rounded-2xl overflow-hidden">
        {/* Glass backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-2xl"></div>

        {/* Soft glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-transparent to-red-600/30 blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          {/* Icon */}
          <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-red-600/20 border border-red-600/40">
            <span className="text-2xl">⚠️</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold tracking-wide">
            {lang[langKey].gptErrorTitle}
          </h2>

          {/* Message */}
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            {message || lang[langKey].gptErrorFallback}
          </p>

          {/* Hint */}
          <p className="mt-2 text-xs text-gray-400">
            {lang[langKey].gptErrorHint}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GptError;
