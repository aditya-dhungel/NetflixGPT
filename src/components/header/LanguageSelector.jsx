import { useDispatch } from "react-redux";
import { changeLanguage } from "../../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../../utils/constants";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <select
      onChange={handleLanguageChange}
      className="
        p-1 md:p-2 md:ml-0 ml-12 md:my-5 w-[4.9rem] -translate-y-1 md:translate-y-0
         text-xs md:text-md h-7 md:w-full md:h-auto
        bg-white/5 text-white
        border border-white/20
        rounded-xl
        backdrop-blur-sm
        focus:outline-none focus:ring-2 focus:ring-gray-400/40
        hover:bg-white/10
        transition-all duration-200
        cursor-pointer
      "
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option
          key={lang.identifier}
          value={lang.identifier}
          className="bg-neutral-900 text-white"
        >
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
