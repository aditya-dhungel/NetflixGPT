import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import Logo from "./header/Logo";
import GptToggleButton from "./header/GptToggleButton";
import LanguageSelector from "./header/LanguageSelector";
import ProfileMenu from "./header/ProfileMenu";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="fixed w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      {/* Logo */}
      <Logo />

      {/* Right section */}
      {user && (
        <div className="flex p-2 items-center">
          {/* Language selector - maintain space when hidden */}
          {showGptSearch ? (
            <LanguageSelector />
          ) : (
            <div className="w-[5.0rem] md:w-[5.5rem]"></div>
          )}

          {/* GPT / Home toggle */}
          <GptToggleButton />

          {/* Profile menu */}
          <ProfileMenu />
        </div>
      )}
    </div>
  );
};

export default Header;
