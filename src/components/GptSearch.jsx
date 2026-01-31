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
        className="fixed inset-0 w-full h-full object-cover opacity-60"
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

// const GptSearch = () => {
//   return (
//     <div>
//       <img
//         src={BACKGROUND_IMG}
//         className="fixed inset-0 w-full h-full object-cover -z-10"
//         alt="background-img"
//       />
//       <GptSearchBar />
//       <GptMovieSuggestions />
//     </div>
//   );
// };

// export default GptSearch;

export default GptSearch;
