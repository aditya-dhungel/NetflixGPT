import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { clearGptResults } from "../utils/gptSlice";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // GPT search logic moved to custom hook
  const { handleGptSearch } = useGptSearch();

  const handleClear = () => {
    searchText.current.value = "";
    dispatch(clearGptResults());
  };

  return (
    <div className="pt-[25%] md:pt-[7%] flex flex-col items-center px-3 md:px-4">
      {/* Search feature Info */}
      <div className="mb-6 md:mb-10 flex justify-center w-full max-w-5xl">
        <div className="px-4 py-1 md:px-8 md:py-3 rounded-2xl md:rounded-3xl bg-black/40 border border-white/20 backdrop-blur-xl shadow-2xl">
          <p className="text-xs md:text-lg font-medium text-gray-100 tracking-wide text-center leading-relaxed">
            {lang[langKey].gptSearchInfo}
          </p>
        </div>
      </div>

      {/* Search Bar Container */}
      <div className="flex items-stretch justify-center w-full max-w-5xl gap-3 md:gap-4">
        <form
          className="relative flex-1 flex items-center rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl hover:border-white/40 hover:shadow-red-500/20 transition-all duration-300 group overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Glowing effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

          {/* Search Icon Left */}
          <div className="pl-4 md:pl-7 text-gray-400 group-hover:text-white transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="flex-1 bg-transparent text-white placeholder-gray-400 px-3 py-3 md:px-4 md:py-5 text-sm md:text-base outline-none"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="m-1.5 md:m-2 px-4 md:px-10 py-2.5 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs md:text-base font-semibold rounded-full hover:from-red-700 hover:to-red-800 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-red-500/50 flex items-center gap-1.5 md:gap-2 group/btn whitespace-nowrap"
            onClick={() => handleGptSearch(searchText.current?.value?.trim())}
          >
            <span>{lang[langKey].search}</span>
            {/* Search icon in button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 md:h-5 md:w-5 group-hover/btn:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        {/* Clear Button - SVG X icon */}
        <button
          type="button"
          onClick={handleClear}
          className="relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/40 backdrop-blur-xl rounded-full border border-white/20 hover:border-red-500/50 hover:bg-red-900/30 active:scale-95 transition-all duration-300 group/clear shadow-xl hover:shadow-red-500/30"
          title="Clear search"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-red-500/0 group-hover/clear:bg-red-500/20 blur-md transition-all duration-300 -z-10"></div>
          
          {/* X icon - SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-7 md:w-7 text-gray-400 group-hover/clear:text-red-500 group-hover/clear:rotate-90 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;