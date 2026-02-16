import React, { useEffect, useState } from "react";
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

import VpnWarning from "./VpnWarning";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [showVpnWarning, setShowVpnWarning] = useState(false);

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

  useEffect(() => {
    if (!isDataLoaded) {
      const timer = setTimeout(() => {
        setShowVpnWarning(true);
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setShowVpnWarning(false);
    }
  }, [isDataLoaded]);

  return (
    <div>
      <Header />
      {showVpnWarning && <VpnWarning />}

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
