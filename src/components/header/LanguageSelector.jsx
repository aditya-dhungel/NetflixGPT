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
        p-2 my-5 mx-2
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
