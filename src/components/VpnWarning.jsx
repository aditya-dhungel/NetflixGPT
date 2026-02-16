import React from "react";

const VpnWarning = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">

      <div className="relative w-[90%] md:w-[440px] p-9 rounded-3xl 
        bg-gradient-to-b from-neutral-900 to-black 
        border border-white/10 
        shadow-[0_25px_80px_rgba(0,0,0,0.9)] 
        text-center text-white 
        animate-slideUp">

        {/* Subtle outer glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-red-600/20 via-transparent to-red-600/10 blur-xl opacity-40 -z-10"></div>

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M5.07 19a9 9 0 1113.86 0"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold tracking-wide">
          Unable to load content
        </h2>

        {/* Message */}
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          We couldn’t access movie data from your current network.
        </p>

        <p className="mt-2 text-gray-400 text-sm">
          Please connect to a VPN and refresh the page.
        </p>

        {/* Button */}
        <button
          onClick={() => window.location.reload()}
          className="mt-8 w-full rounded-xl bg-red-600 py-3.5 text-base font-semibold hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-lg shadow-red-600/30"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default VpnWarning;
