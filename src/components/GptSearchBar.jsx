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
    <div className="pt-[7%] flex flex-col items-center">
      {/* AI Search Info */}
      <div className="mb-5 flex justify-center">
        <div className="px-6 py-3 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-sm">
          <p className="text-base font-medium text-gray-100 tracking-wide text-center">
            Search movies by name, plot, genre, mood, or anything you can
            describe!
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <form
          className="relative w-1/2 grid grid-cols-12 rounded-3xl"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Translucent background ONLY */}
          <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>

          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="relative p-4 m-4 col-span-9 rounded-3xl"
          />

          <button
            className="relative col-span-3 m-4 mx-1 py-2 px-4 mr-4 bg-red-600 text-white rounded-3xl hover:bg-red-700 hover:scale-105 transition-transform duration-500"
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
          className="w-20 h-20 p-1 ml-3 mt-1 bg-neutral-900/70 rounded-3xl border border-neutral-700 hover:bg-neutral-800/80 hover:scale-[1.03] transition-all duration-300"
        >
          <img src={DELETE_ICON} alt="delete" className="mx-auto h-18 w-18" />
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
