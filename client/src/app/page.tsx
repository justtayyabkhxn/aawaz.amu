"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-700">
        <h1 className="text-2xl font-bold text-white">📢 Aawaz.amu</h1>
        <div className="space-x-4">
          <Link href="/signin">
            <button className="bg-white text-black text-md px-3 py-1 rounded-xl font-bold hover:bg-gray-200 cursor-pointer">
              Log In
            </button>
          </Link>
          {/* <Link href="/signup">
            <button className="bg-green-500 text-sm px-3 py-1 rounded-xl font-bold hover:bg-blue-600 text-shadow-md cursor-pointer">
              Sign Up
            </button>
          </Link> */}
        </div>
      </header>

      {/* Tagline */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-extrabold">Speak Up.🗣️ Anonymously.🎭 </h2>
        <p className="mt-2 text-zinc-400 text-lg">
          Confess. Protest. Suggest. Be heard.
        </p>
        <p className="text-zinc-400 text-md font-bold">
          Only on <span className="text-orange-300">Aawaz.amu.</span>{" "}
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 px-4 text-shadow-lg/15">
        <Link href="/category/rants" className="block">
          <div className="rounded-2xl p-6 bg-red-500 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-white/200">Rants</h3>
            <p className="text-sm font-medium leading-snug text-white/90">
              Let it all out. Share your frustrations anonymously.
            </p>
          </div>
        </Link>

        <Link href="/category/complaints" className="block">
          <div className="rounded-2xl p-6 bg-yellow-400 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-white/200">
              Complaints
            </h3>
            <p className="text-sm font-medium leading-snug text-white/90">
              Voice issues about campus, hostel, academics, or anything.
            </p>
          </div>
        </Link>

        <Link href="/category/suggestions" className="block">
          <div className="rounded-2xl p-6 bg-green-500 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-white/200">
              Suggestions
            </h3>
            <p className="text-sm font-medium leading-snug text-white/90">
              Got ideas to improve amu? Drop them here.
            </p>
          </div>
        </Link>

        <Link href="/category/protest-calls" className="block">
          <div className="rounded-2xl p-6 bg-indigo-500 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-white/200">
              Protest Calls
            </h3>
            <p className="text-sm font-medium leading-snug text-white/90">
              Call for unity and action on matters that matter.
            </p>
          </div>
        </Link>

        <Link href="/category/advice" className="block">
          <div className="rounded-2xl p-6 bg-blue-500 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-white/200">Advice</h3>
            <p className="text-sm font-medium leading-snug text-white/90">
              Seeking guidance or want to help others? Post here.
            </p>
          </div>
        </Link>

        <Link href="/category/confessions" className="block">
          <div className="rounded-2xl p-6 bg-pink-500 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2 text-white/200">
              Confessions
            </h3>
            <p className="text-sm font-medium leading-snug text-white/90">
              Reveal secrets or feelings you couldnt share elsewhere.
            </p>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-zinc-500 font-bold border-t border-zinc-700">
        <p className="text-sm text-shadow-2xs">
          &copy; 2025 Aawaz.amu. Built with ❤️ for AMU Students.
        </p>
        <div className="mt-2 space-x-4 text-sm font-bold text-orange-300">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
