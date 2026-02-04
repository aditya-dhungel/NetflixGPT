import { ScrambleText } from "../scramble-text";

const Logo = () => {
  return (
    <h1
      className="text-center text-2xl tracking-tight font-bold cursor-pointer mt-5 -mx-3
      md:text-5xl md:mt-5"
    >
      <ScrambleText text="NetflixGPT" />
    </h1>
  );
};

export default Logo;
