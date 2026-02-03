import React from "react";

/*
   SHIMMER CARD
*/
const ShimmerCard = () => {
  return (
    <div
      className="
        relative
        w-40 h-56
        sm:w-40 sm:h-60
        md:w-[180px] md:h-[264px]
        mr-3 sm:mr-4
        rounded-xl
        bg-neutral-800
        overflow-hidden
        flex-shrink-0
      "
    >
      {/* Sideways shimmer glow */}
      <div
        className="
          absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          animate-[shimmer_1.2s_linear_infinite]
        "
      />
    </div>
  );
};

/*
   SHIMMER ROW
 */
const ShimmerRow = () => {
  return (
    <div className="px-3 sm:px-6 mb-7 md:mb-7 sm:mb-10">
      {/* Title shimmer */}
      <div
        className="
          relative
          h-6 sm:h-8
          w-32 sm:w-48
          mb-3 sm:mb-4
          rounded-lg
          bg-neutral-800
          overflow-hidden
        "
      >
        <div
          className="
            absolute inset-0 -translate-x-full
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            animate-[shimmer_1.2s_linear_infinite]
          "
        />
      </div>

      {/* Cards shimmer row */}
      <div className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

//  SHIMMER CONTAINER

const Shimmer = ({ rows = 3 }) => {
  return (
    <div className="relative p-3 sm:p-4 m-3 md:m-14 sm:m-4 z-10 rounded-xl overflow-hidden">
      {/* Translucent background */}
      <div className="absolute inset-0 bg-black/60 rounded-xl" />

      {/* Shimmer content */}
      <div className="relative">
        {Array(rows)
          .fill(null)
          .map((_, index) => (
            <ShimmerRow key={index} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
