import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieID);

  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key +
          "&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
