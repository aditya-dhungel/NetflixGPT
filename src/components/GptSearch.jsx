import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background image layer */}
      <img
        src={BACKGROUND_IMG}
        className="fixed inset-0 w-screen h-screen object-cover opacity-80"
        alt="background-img"
      />

      {/* Dark overlay for Netflix contrast */}
      <div className="fixed inset-0 bg-black/10"></div>

      {/* Page content */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
