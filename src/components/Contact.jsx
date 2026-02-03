import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

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

        {/* Glow */}
        <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-red-600/20 blur-[140px]" />

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Contact{" "}
          <span className="text-red-600">
            Netflix<span className="text-white">GPT</span>
          </span>
        </h1>

        <p className="max-w-3xl text-lg text-zinc-400 leading-relaxed">
          Have feedback, questions, or ideas to improve NetflixGPT? Drop a
          message — every suggestion helps make the experience better.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-6 py-20 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          {/* LEFT — FORM */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-semibold mb-6">Send a message</h2>

            <p className="text-zinc-400 mb-10 max-w-2xl">
              This project is built for learning and experimentation. Feel free
              to share bugs, feature ideas, or general feedback.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3
                  outline-none focus:border-red-600 focus:bg-white/10 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3
                  outline-none focus:border-red-600 focus:bg-white/10 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3
                  outline-none focus:border-red-600 focus:bg-white/10 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-red-600 py-3.5 text-base font-semibold
                hover:bg-red-700 active:scale-[0.97] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT — INFO */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

              <p className="text-sm text-zinc-400 mb-4">
                You can also reach out directly via email.
              </p>

              <div className="text-sm text-zinc-300 space-y-2">
                <p>📩 Email</p>
                <p className="text-red-500 font-medium">
                  adityadhungel018@gmail.com
                </p>
                <p className="mt-3">🌍 Location</p>
                <p className="text-zinc-400">India</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-4">Project Note</h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                NetflixGPT is a personal learning project inspired by Netflix’s
                UI and enhanced with AI-powered search. It is not affiliated
                with Netflix.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24" />
    </div>
  );
};

export default Contact;
