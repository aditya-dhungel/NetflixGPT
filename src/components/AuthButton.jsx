import LoadingSpinner from "./LoadingSpinner";

const AuthButton = ({ isLoading, isSignInForm, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="mb-5 mt-4 w-full rounded-xl bg-red-600 py-3.5 text-base font-semibold hover:bg-red-700 transition relative overflow-hidden disabled:opacity-90 disabled:cursor-not-allowed group"
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-3">
          <LoadingSpinner />
          <span className="animate-pulse">
            {isSignInForm ? "Signing In..." : "Creating Account..."}
          </span>
        </span>
      ) : (
        <span>{isSignInForm ? "Sign In" : "Sign Up"}</span>
      )}

      {/* Premium shimmer effect - only shows on hover when not loading */}
      {!isLoading && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      )}
    </button>
  );
};

export default AuthButton;