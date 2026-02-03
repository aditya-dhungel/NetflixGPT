import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ICON } from "../utils/constants";
import { clearGptResults } from "../utils/gptSlice";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // GPT search logic moved to custom hook
  const { handleGptSearch } = useGptSearch();

  return (
    <div className="pt-[20%] md:pt-[7%] flex flex-col items-center">
      {/*Search feature Info */}
      <div className="mb-5 flex justify-center">
        <div className="mx-4 px-6 py-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm">
          <p className="md:text-lg text-sm font-thin md:font-medium text-gray-100 tracking-wide text-center">
            {/* "Search movies by name, plot, genre, mood, or anything you can describe!" */}
            {lang[langKey].gptSearchInfo}
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <form
          className="relative w-10/12 ml-3 md:w-1/2 grid grid-cols-12 rounded-full h-auto md:h-full"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Translucent background ONLY */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-full"></div>

          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="relative col-span-9 h-9 md:h-auto py-2 md:p-4 px-4 m-4 rounded-3xl text-xs md:text-base text-black"
          />

          <button
            className="text-center text-xs md:text-lg relative col-span-3 m-4 mx-1 px-4 mr-3 -ml-2 md:ml-0 md:mr-5 bg-red-600 text-white rounded-3xl hover:bg-red-700 hover:scale-105 transition-transform duration-500"
            onClick={() => handleGptSearch(searchText.current?.value?.trim())}
          >
            {lang[langKey].search}
          </button>
        </form>

        {/* Delete button */}
        <button
          type="button"
          onClick={() => {
            searchText.current.value = "";
            dispatch(clearGptResults());
          }}
          className="w-12 md:w-16 h-12 md:h-16 p-1 md:ml-3 md:mr-0 mr-2 ml-1 md:mt-3 mt-3 bg-neutral-800/70 rounded-3xl backdrop-blur-sm border border-neutral-700 hover:bg-neutral-900/80 hover:scale-[1.03] transition-all duration-300"
        >
          <img src={DELETE_ICON} alt="delete" className="mx-auto h-18 w-18" />
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
