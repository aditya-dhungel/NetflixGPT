import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black pb-8">
      <div className="mt-0 md:-mt-52 pl-4 md:p-9 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

// Movie List 
//   - popular
//       moviecards * n
//   - trending
//       moviecards * n
//   - nowplaying
//       moviecards * n
//   - horror
//       moviecards * n
