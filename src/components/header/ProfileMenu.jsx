import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

//   const handleSignOut = () => {
//     signOut(auth).catch(() => {
//       navigate("/error");
//     });
//   };
  const handleSignOut = () => {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          // An error happened.
          navigate("/error");
        });
    };

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative mt-4 mr-2" ref={profileRef}>
      {/* Profile icon */}
      <button
        onClick={() => setIsProfileOpen((prev) => !prev)}
        className="relative group"
      >
        {/* Ring */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-red-400 p-[2px]">
          <div className="w-full h-full rounded-3xl bg-black p-[2px]">
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
              <p className="text-sm text-gray-400 truncate">{user?.email}</p>
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
  );
};

export default ProfileMenu;
