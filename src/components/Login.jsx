import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    //Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    // Sign in/ Sign up logic
    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //   console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInform = () => {
    setIsSignInform(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-600 rounded-lg"
            />

            {/* <input
              type="tel"
              placeholder="Phone Number"
              className="p-4 my-4 w-full bg-gray-600 rounded-lg"
            /> */}
          </>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4  my-4 w-full bg-gray-600 rounded-lg"
        />
        <p className="text-red-600 font-bold text-md">{errorMessage}</p>
        <button
          className="p-4 my-5 bg-red-700 w-full rounded-lg font-semibold hover:bg-red-800"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-300 text-sm">
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span
                onClick={toggleSignInform}
                className="text-red-600 underline cursor-pointer font-semibold"
              >
                Sign Up now
              </span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span
                onClick={toggleSignInform}
                className="text-red-600 underline cursor-pointer font-semibold"
              >
                Sign In now!
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
