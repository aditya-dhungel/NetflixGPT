import React, { useEffect, useRef, useState } from "react";
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

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

  //profile signout dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
              onChange={handleLanguageChange}
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
          )}

          {/* GPT/Home button */}
          <button
            className="w-50 h-10 mt-4 flex items-center gap-1.5 font-semibold text-white
             bg-emerald-500/20 hover:bg-emerald-500/30
             border border-emerald-400/30 backdrop-blur-sm
             hover:scale-105 transition-transform duration-200
             px-4 py-2 m-4 rounded-full whitespace-nowrap group"
            onClick={handleGptSearchClick}
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

          {/* Profile icon */}
          {/* Profile dropdown */}
          <div className="relative mt-4 mr-2" ref={profileRef}>
            {/* Profile icon button */}
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="relative group"
            >
              {/* Ring */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-red-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-black p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={user?.photoURL}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition blur-md bg-red-500/40 -z-10"></div>
            </button>

            {/* Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-72 bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl overflow-hidden animate-slideUp z-50">
                {/* User info */}
                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={user?.photoURL}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-white truncate">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-sm text-gray-400 truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-3">
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-3 rounded-xl font-semibold transition active:scale-95
                     bg-red-600 text-white hover:bg-red-700"
                  >
                    Sign Out
                  </button>

                  <p className="mt-3 text-[11px] text-gray-400 text-center">
                    You’ll be signed out of NetflixGPT
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
