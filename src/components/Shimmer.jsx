import React from "react";

const ShimmerCard = () => {
  return (
    <div className="relative w-48 h-72 mr-4 rounded-xl bg-neutral-800 overflow-hidden">
      {/* Sideways shimmer glow */}
      <div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                   from-transparent via-white/20 to-transparent
                   animate-[shimmer_1.2s_linear_infinite]"
      />
    </div>
  );
};

const ShimmerRow = () => {
  return (
    <div className="px-6 mb-10">
      {/* Title shimmer */}
      <div className="relative h-8 w-48 mb-4 rounded-lg bg-neutral-800 overflow-hidden">
        <div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                     from-transparent via-white/20 to-transparent
                     animate-[shimmer_1.2s_linear_infinite]"
        />
      </div>

      {/* Cards shimmer */}
      <div className="flex overflow-x-hidden">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

const Shimmer = ({ rows = 3 }) => {
  return (
    <div className="relative p-4 m-4 mb-4 z-10 rounded-xl overflow-hidden">
      {/* Translucent background */}
      <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

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
