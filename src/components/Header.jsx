import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 m-5"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            src={user?.photoURL}
            alt="profile icon"
            className="w-10 h-10 mt-4 mr-2 rounded-xl ring-2 ring-red-600 "
          />

          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
