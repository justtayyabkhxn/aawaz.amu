"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";



const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setError("");
        router.push("/success"); // ✅ redirect after success
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
      console.error(error);
    }
  };
  

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center px-4 py-12">
      {/* Aawaz.amu heading */}
      <Link href="/" className="text-3xl font-extrabold text-white mb-5 mt-25">
       📢Aawaz.amu
      </Link>

      <div className="max-w-md w-full bg-zinc-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Log In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-zinc-700 rounded-xl text-white bg-zinc-800 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-zinc-700 rounded-xl text-white bg-zinc-800 focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 text-sm text-green-400 hover:underline focus:outline-none cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300 text-shadow-lg/15 cursor-pointer"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-zinc-400 text-sm text-shadow-lg/10 font-bold">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
