"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios"; // Import axios

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.email && formData.password) {
      setError("");

      try {
        // Send POST request to the server to create a new user
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/signup`,
          {
            email: formData.email,
            password: formData.password,
          }
        );

        // If signup is successful, redirect to signin page
        if (response.status === 201) {
          router.push("/signin");
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || "Signup failed");
        } else {
          setError("Signup failed");
        }
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center px-4 py-12">
      {/* Site Heading */}
      <h2
        className="text-3xl font-bold mb-6 mt-10 text-white cursor-pointer "
        onClick={() => router.push("/")}
      >
        📢Aawaz.amu
      </h2>

      <div className="max-w-md w-full bg-zinc-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-zinc-700 rounded-xl text-white bg-zinc-800 focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 text-sm text-green-400 hover:underline focus:outline-none cursor-pointer"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300 text-shadow-lg/10 cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-zinc-400 text-sm text-shadow-lg/10 font-bold">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
