import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { GPT_ICON, HOME_ICON } from "../../utils/constants";

const GptToggleButton = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector(
    (store) => store.gpt.showGptSearch
  );

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <button
      onClick={handleGptSearchClick}
      className="text-sm md:text-md md:px-4 px-3 py-2 m-4 w-full md:w-full h-8 md:h-10 md:mt-4 -translate-y-1 md:translate-y-0 flex items-center gap-1.5 font-semibold text-white
        bg-emerald-500/20 hover:bg-emerald-500/30
        border border-emerald-400/30 backdrop-blur-sm
        hover:scale-105 transition-transform duration-200
        rounded-full whitespace-nowrap group"
    >
      {showGptSearch ? "Home" : "GPT Search"}

      <img
        className={`object-contain transition-transform duration-500
          ${!showGptSearch ? "group-hover:rotate-[360deg]" : ""}
          ${showGptSearch ? "w-4 md:w-5 h-4 md:h-5 hidden md:block" : "w-6 md:w-8 h-6 md:h-8"}
        `}
        src={showGptSearch ? HOME_ICON : GPT_ICON}
        alt={showGptSearch ? "Home icon" : "GPT icon"}
      />
    </button>
  );
};

export default GptToggleButton;
