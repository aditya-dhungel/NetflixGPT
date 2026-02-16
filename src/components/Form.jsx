import React, { useState, useEffect } from "react";
import { auth, sendPasswordResetEmail } from "../utils/firebase";
import AuthButton from "./AuthButton";
import GoogleSignInButton from "./GoogleSignInButton";

const Form = ({
  name,
  email,
  password,
  errorMessage,
  handleButtonClick,
  handleGoogleSignIn,
  isSignInForm,
  toggleSignInform,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //forgot password
  const handleForgotPassword = async () => {
    const userEmail = email.current?.value;

    if (!userEmail) {
      alert("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, userEmail);
      alert("Password reset email sent successfully.");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await handleButtonClick();
      // Keep loading until navigation happens
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Reset loading on error
  useEffect(() => {
    if (errorMessage) {
      setIsLoading(false);
    }
  }, [errorMessage]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="md:mt-0 mt-12 w-10/12 md:w-3/12 absolute top-36 left-1/2 -translate-x-1/2 rounded-2xl bg-black/60 backdrop-blur-md px-10 py-7 text-white shadow-[0_8px_30px_rgba(0,0,0,0.6)] max-h-[85vh] overflow-y-auto"
    >
      <h1 className="mb-1 text-center text-3xl font-bold">
        <span className="text-red-600">Netflix</span>
        <span className="text-white">GPT</span>
      </h1>

      <p className="mb-5 text-center text-sm text-zinc-400">
        Login to explore movies powered by AI.
      </p>

      {!isSignInForm && (
        <>
          <label className="mb-1 block text-sm font-medium text-zinc-300">
            Full Name
          </label>
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          />
        </>
      )}

      <label className="mb-1 block text-sm font-medium text-zinc-300">
        Email
      </label>
      <input
        ref={email}
        type="email"
        placeholder="you@example.com"
        className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      />

      <label className="mb-1 block text-sm font-medium text-zinc-300">
        Password
      </label>

      <div className="relative mb-4">
        <input
          ref={password}
          type={showPassword ? "text" : "password"}
          placeholder="Minimum 6 characters"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 pr-12 text-sm outline-none focus:border-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition disabled:opacity-50"
          disabled={isLoading}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l18 18"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.73 5.08A9.77 9.77 0 0112 5c5 0 9 7 9 7a17.08 17.08 0 01-2.28 2.95M6.53 6.53C3.9 8.43 2 12 2 12s4 7 10 7a9.9 9.9 0 004.95-1.3"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>

      {isSignInForm && (
        <div className="mb-4">
          <p
            onClick={!isLoading ? handleForgotPassword : undefined}
            className={`text-left text-sm text-zinc-400 transition ${
              !isLoading
                ? "hover:text-white cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Forgot Password?
          </p>
        </div>
      )}

      {errorMessage && (
        <p className="mb-3 text-sm font-medium text-red-500">{errorMessage}</p>
      )}

      <AuthButton
        isLoading={isLoading}
        isSignInForm={isSignInForm}
        onClick={handleSubmit}
      />

      <div className="mb-5 flex items-center gap-3 text-sm text-zinc-400">
        <div className="h-px flex-1 bg-zinc-700" />
        OR
        <div className="h-px flex-1 bg-zinc-700" />
      </div>

      <GoogleSignInButton onClick={handleGoogleSignIn} />

      <p className="text-center text-sm text-zinc-400">
        {isSignInForm ? (
          <>
            New to NetflixGPT?{" "}
            <span
              onClick={!isLoading ? toggleSignInform : undefined}
              className={`font-medium text-red-600 ${
                !isLoading
                  ? "cursor-pointer hover:underline"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Create account
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span
              onClick={!isLoading ? toggleSignInform : undefined}
              className={`font-medium text-red-600 ${
                !isLoading
                  ? "cursor-pointer hover:underline"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Sign in
            </span>
          </>
        )}
      </p>
    </form>
  );
};

export default Form;
