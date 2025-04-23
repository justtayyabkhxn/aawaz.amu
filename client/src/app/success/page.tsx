"use client";

import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-green-400">🎉 Login Successful!</h1>
      <p className="text-lg text-zinc-300 mb-8">Welcome to Aawaz.AMU. You’re all set to start exploring!</p>
      
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-300"
      >
        Go to Homepage
      </Link>
    </main>
  );
};

export default SuccessPage;
