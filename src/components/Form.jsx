import React from "react";

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
            className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-red-600"
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
        className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-red-600"
      />

      <label className="mb-1 block text-sm font-medium text-zinc-300">
        Password
      </label>
      <input
        ref={password}
        type="password"
        placeholder="Minimum 6 characters"
        className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-red-600"
      />

      {errorMessage && (
        <p className="mb-3 text-sm font-medium text-red-500">{errorMessage}</p>
      )}

      <button
        onClick={handleButtonClick}
        className="mb-5 mt-4 w-full rounded-xl bg-red-600 py-3.5 text-base font-semibold hover:bg-red-700 transition"
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>

      <div className="mb-5 flex items-center gap-3 text-sm text-zinc-400">
        <div className="h-px flex-1 bg-zinc-700" />
        OR
        <div className="h-px flex-1 bg-zinc-700" />
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="mb-4 flex w-full items-center justify-center gap-3 rounded-xl bg-zinc-900 py-3.5 text-base font-medium hover:bg-zinc-800 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
        Continue with Google
      </button>

      <p className="text-center text-sm text-zinc-400">
        {isSignInForm ? (
          <>
            New to NetflixGPT?{" "}
            <span
              onClick={toggleSignInform}
              className="cursor-pointer font-medium text-red-600 hover:underline"
            >
              Create account
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span
              onClick={toggleSignInform}
              className="cursor-pointer font-medium text-red-600 hover:underline"
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
