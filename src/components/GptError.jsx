import React from "react";

const GptError = ({ message }) => {
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
            Unable to fetch results
          </h2>

          {/* Message */}
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            {message ||
              "We couldn’t load movie suggestions at the moment. This may be a temporary issue."}
          </p>

          {/* Hint */}
          <p className="mt-2 text-xs text-gray-400">
            Try searching again or adjust your query.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GptError;
