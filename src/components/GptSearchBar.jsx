import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded-3xl">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-3xl"
        />
        <button className="col-span-3 m-4 mx-1 py-2 px-4 mr-4 bg-red-600 text-white rounded-3xl hover:bg-red-700 hover:scale-105 transition-transform duration-500">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
