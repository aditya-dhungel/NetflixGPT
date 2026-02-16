const GoogleSignInButton = ({ onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="mb-4 flex w-full items-center justify-center gap-3 rounded-xl bg-zinc-900 py-3.5 text-base font-medium hover:bg-zinc-800 transition relative overflow-hidden group"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
        Continue with Google
  
        {/* Premium shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </button>
    );
  };
  
  export default GoogleSignInButton;