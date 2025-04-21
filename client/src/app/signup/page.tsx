"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate sign-up logic (you can replace this with an actual API call)
    if (formData.email && formData.password) {
      setError(""); // Clear error on successful sign-up
      router.push("/signin"); // Redirect to sign-in page after successful sign-up
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex justify-center items-center px-4 py-12">
      <div className="max-w-md w-full bg-zinc-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
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
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-zinc-700 rounded-xl text-white bg-zinc-800 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-zinc-700 rounded-xl text-white bg-zinc-800 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-zinc-400 text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
