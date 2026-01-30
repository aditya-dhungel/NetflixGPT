import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((store) => store.movies);

  const isDataLoaded =
    nowPlayingMovies?.length &&
    popularMovies?.length &&
    topRatedMovies?.length &&
    upcomingMovies?.length;

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <>
          {" "}
          <GptSearch />
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          {/* Render footer ONLY after data is loaded */}
          {isDataLoaded && <Footer />}
        </>
      )}
    </div>
  );
};

export default Browse;
