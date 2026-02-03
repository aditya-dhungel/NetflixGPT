import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.github.com/users/aditya-dhungel")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto">
        {/* Home Button */}
        <button
          onClick={() => navigate("/browse")}
          className="absolute top-24 right-6 md:right-10 px-6 py-2.5 rounded-full
          bg-red-600/25 text-white border border-red-500/40
          backdrop-blur-md shadow-[0_0_20px_rgba(229,9,20,0.35)]
          hover:bg-red-600/35 hover:scale-105
          transition-all duration-300"
        >
          ← Home
        </button>

        <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-red-600/20 blur-[140px]" />

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          About{" "}
          <span className="text-red-600">
            Netflix<span className="text-white">GPT</span>
          </span>
        </h1>

        <p className="max-w-3xl text-lg text-zinc-400 leading-relaxed">
          NetflixGPT is a movie discovery platform inspired by Netflix and
          enhanced with a GPT-powered search experience. It allows users to find
          movies using natural language instead of rigid filters.
        </p>
      </section>

      {/* WHAT IT DOES */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">What is NetflixGPT?</h2>

        <p className="text-zinc-400 max-w-4xl leading-relaxed mb-12">
          NetflixGPT combines a familiar Netflix-style browsing experience with
          AI-powered intelligence. Users can browse trending movies as usual, or
          switch to GPT Search to describe what they want to watch in plain
          English.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold mb-3">
              🎬 Netflix-style browsing
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Browse now-playing, popular, top-rated, and upcoming movies using
              a familiar layout inspired by Netflix.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold mb-3">
              🤖 GPT-powered discovery
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Discover movies by describing the plot, genre, mood, or vibe —
              without knowing the exact movie name.
            </p>
          </div>
        </div>
      </section>

      {/* GPT SEARCH + DEVELOPER */}
      <section className="px-6 py-20 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          {/* LEFT */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-semibold mb-6">
              How GPT Search works
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-10">
              NetflixGPT uses AI to understand intent. You don’t need to know
              the movie name — just describe what you’re in the mood for.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ["Search by mood", "Dark thriller, feel-good, emotional"],
                ["Search by story", "Time travel, underdog sports drama"],
                ["Search by genre", "Sci-fi, romance, mystery"],
                ["Search by vibe", "Slow-burn, cinematic, intense"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-zinc-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-2">
            <h3 className="text-sm uppercase tracking-widest text-red-500 mb-4">
              Developer
            </h3>

            {profile ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="relative mx-auto w-fit mb-6">
                  <div className="absolute -inset-3 rounded-full bg-red-600/20 blur-xl" />
                  <img
                    src={profile.avatar_url}
                    alt="Developer"
                    className="relative w-28 h-28 rounded-full border border-white/20 object-cover ring-red" 
                  />
                </div>

                <h4 className="text-xl font-semibold text-center">
                  {profile.name || profile.login}
                </h4>

                <p className="mt-2 text-sm text-zinc-400 text-center">
                  {profile.bio}
                </p>

                <div className="mt-4 flex justify-center gap-5 text-xs text-zinc-400">
                  <span>⭐ {profile.public_repos} Repositories</span>
                </div>

                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block text-center rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-700 transition"
                >
                  View GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-dhungel"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block text-center rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition"
                >
                  Connect on LinkedIn
                </a>
              </div>
            ) : (
              <p className="text-zinc-400 text-sm">
                Loading developer profile…
              </p>
            )}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 pt-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          Technology behind NetflixGPT
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-zinc-400">
          <ul className="space-y-3">
            <li>• React</li>
            <li>• Redux Toolkit</li>
            <li>• Tailwind CSS</li>
            <li>• Firebase Authentication</li>
          </ul>

          <ul className="space-y-3">
            <li>• TMDB API</li>
            <li>• Gemini / GPT API</li>
            <li>• Custom Hooks</li>
            <li>• React Router</li>
          </ul>
        </div>
      </section>

      <div className="h-24" />
    </div>
  );
};

export default About;
