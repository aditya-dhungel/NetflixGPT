import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-6 md:px-20 absolute bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold text-white mb-6 md:mb-0">{title}</h1>
      <p className="hidden md:block py-6 text-md w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 md:py-4 px-6 md:px-12 text-xl rounded-lg opacity-65 md:opacity-100 hover:bg-opacity-80">
        ▶ Play
        </button>
        <button className="hidden md:inline-block mb mt-2 mx-2 bg-gray-500 text-white py-2 md:py-4 px-3 md:px-12 text-xl bg-opacity-50 rounded-lg">
        ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
