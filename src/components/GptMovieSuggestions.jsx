import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";
import GptError from "./GptError";


const GptMovieSuggestions = () => {

  
  const { movieResults, movieNames, loading, error } = useSelector(
    (store) => store.gpt
  );

  if (loading) {
    return <Shimmer rows={3} />;
  }

  if (error) return <GptError message={error} />;

  if (!movieNames) return null;

  return (
    <div className="relative p-4 m-4 mb-4 z-10">
      {/* Translucent background */}
      <div className="absolute inset-0 bg-black/70 rounded-3xl backdrop-blur-sm"></div>

      {/* Content (fully opaque) */}
      <div className="relative text-white">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
