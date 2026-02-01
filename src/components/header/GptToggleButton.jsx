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
      className="w-50 h-10 mt-4 flex items-center gap-1.5 font-semibold text-white
        bg-emerald-500/20 hover:bg-emerald-500/30
        border border-emerald-400/30 backdrop-blur-sm
        hover:scale-105 transition-transform duration-200
        px-4 py-2 m-4 rounded-full whitespace-nowrap group"
    >
      {showGptSearch ? "Home" : "GPT Search"}

      <img
        className={`object-contain transition-transform duration-500
          ${!showGptSearch ? "group-hover:rotate-[360deg]" : ""}
          ${showGptSearch ? "w-5 h-5" : "w-8 h-8"}
        `}
        src={showGptSearch ? HOME_ICON : GPT_ICON}
        alt={showGptSearch ? "Home icon" : "GPT icon"}
      />
    </button>
  );
};

export default GptToggleButton;
