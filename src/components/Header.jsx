import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  GPT_ICON,
  LOGO,
  SUPPORTED_LANGUAGES,
  HOME_ICON,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
// import { TiltButton } from "react-tilt-button";
// import "/node_modules/react-tilt-button/dist/react-tilt-button.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between ">
      <img className="w-44 m-5" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 my-5 mx-2  bg-gray-800 text-white rounded-xl"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier} >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT/Home button */}
          <button
            className="w-50 h-10 mt-4 flex items-center gap-1.5 font-semibold text-white bg-green-600 hover:scale-105 hover:bg-green-700 transition-transform duration-200 px-4 py-2 m-4 rounded-full whitespace-nowrap group"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}

            <img
              className={`object-contain transition-transform duration-500 group-hover:rotate-[360deg] ${
                showGptSearch ? "w-5 h-5" : "w-8 h-8"
              }`}
              src={showGptSearch ? HOME_ICON : GPT_ICON}
              alt={showGptSearch ? "Home icon" : "GPT icon"}
            />
          </button>

          {/* Profile icon */}
          <img
            src={user?.photoURL}
            alt="profile icon"
            className="w-10 h-10 mt-4 mr-2 rounded-3xl ring-2 ring-red-600 "
          />
          
          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="font-bold text-white bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform duration-200 h-10 w-30 mt-4 ml-1 p-2 rounded-lg"
          >
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
