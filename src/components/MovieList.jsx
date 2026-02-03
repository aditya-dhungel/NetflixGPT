import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies) return null;

  return (
    <div className="-mt-10">
      <h1 className="text-xl md:text-3xl py-4 mt-5 text-white">{title}</h1> 
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
