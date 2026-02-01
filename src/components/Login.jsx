import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { getAuthErrorMessage } from "../utils/firebaseErrorMap";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
              setErrorMessage(getAuthErrorMessage(error));
            });
            
        })
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   setErrorMessage(errorCode + "-" + errorMessage);
        // });
        .catch((error) => {
          setErrorMessage(getAuthErrorMessage(error));
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
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   setErrorMessage(errorCode + "-" + errorMessage);
        // });
        .catch((error) => {
          setErrorMessage(getAuthErrorMessage(error));
        });
    }
  };

  //Google sign in
  const handleGoogleSignIn = async () => {
    try {
      setErrorMessage(null);
      const result = await signInWithPopup(auth, googleProvider);
      // console.log("Google user:", result.user);
      navigate("/browse"); // or "/"
    } catch (error) {
      setErrorMessage(getAuthErrorMessage(error));
    }
    
  };

  const toggleSignInform = () => {
    setIsSignInform(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="fixed">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <div className="relative">
        {/* Disclaimer (OUTSIDE form) */}
        <div className="w-3/12 absolute top-20 right-0 left-0 mx-auto mb-3">
          <div className="flex items-center gap-2 rounded-lg border border-red-400/50 bg-gradient-to-r from-red-600/25 via-red-500/15 to-red-600/25 px-4 py-2 text-xs text-red-100 backdrop-blur-sm shadow-[0_0_16px_rgba(229,9,20,0.35)] animate-[slideDown_0.5s_ease-out]">
            <p className="text-center leading-snug">
              ⚠️ Some content may not load in certain regions. Please use a VPN
              for the best experience.
            </p>
          </div>
        </div>

        {/* Sign In / Sign Up Form */}
        <Form
          name={name}
          email={email}
          password={password}
          errorMessage={errorMessage}
          handleButtonClick={handleButtonClick}
          isSignInForm={isSignInForm}
          handleGoogleSignIn={handleGoogleSignIn}
          toggleSignInform={toggleSignInform}
        />
      </div>
    </div>
  );
};

export default Login;
