import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  
  return (
    <div className="w-48 md:w-[200px] pr-4 mb-8 p-1 m-1 md:m-0 group">
      <div className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300
        group-hover:scale-105 group-hover:z-10 group-hover:-translate-y-1">
        
        {/* Movie poster */}
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Movie card"
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
        </div>
        
        {/* Glowing red border */}
        <div className="absolute inset-0 rounded-xl shadow-[0_0_0px_rgba(239,68,68,0)] 
          group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]
          transition-shadow duration-300">
        </div>
        
        {/* Simple border */}
        <div className="absolute inset-0 rounded-xl border border-transparent
          group-hover:border-red-500/30 transition-colors duration-300">
        </div>
      </div>
    </div>
  );
};

export default MovieCard;