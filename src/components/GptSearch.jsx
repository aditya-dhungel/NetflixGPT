import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        src={BACKGROUND_IMG}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="background-img"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
