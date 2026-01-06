import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const fromOrder = location.state?.fromOrder;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      login({
        name: user.displayName,
        email: user.email,
      });

      fromOrder ? navigate("/address") : navigate("/");
    } catch (error) {
      setError("Google login failed");
    }
  };

  const handleFacebookLogin = () => {
    login({
      name: "Facebook User",
      email: "facebookuser@gmail.com",
    });
    fromOrder ? navigate("/address") : navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3) return setError("Name must be at least 3 characters");

    if (!email.includes("@")) return setError("Please enter a valid email");

    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    if (!agree) return setError("You must agree to the Terms & Conditions");

    login({ name, email });
    fromOrder ? navigate("/address") : navigate("/");
  };

  return (
    <div className="min-h-screen flex dark:bg-[#070b0f] text-gray-900 dark:text-white mt-14">
      {/* LEFT SIGNUP FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            Create an account
          </h2>

          <p className="text-gray-400 mb-8">
            Join MedFinder to search medicines and order easily
          </p>

          {error && <div className="mb-4 text-sm text-red-400">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <User
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-emerald-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-emerald-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-emerald-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-emerald-400"
              />
              I agree to all the{" "}
              <span className="text-emerald-400 cursor-pointer">
                Terms & Conditions
              </span>
            </label>

            {/* Sign up button */}
            <button className="w-full py-3 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition cursor-pointer">
              Sign Up
            </button>
          </form>

          {/* OR */}
          <div className="my-6 flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-white/10"></div>
            OR
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition cursor-pointer"
            >
              Continue with Google
            </button>

            <button
              onClick={handleFacebookLogin}
              className="w-full py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition cursor-pointer"
            >
              Continue with Facebook
            </button>
          </div>

          {/* Login */}
          <p className="mt-6 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT MEDICAL THEME PANEL */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
          alt="medicine"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-black/90"></div>

        <div className="relative z-10 p-14 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-4">
            Smart Medicine <br /> Discovery Platform
          </h2>

          <p className="text-gray-200 max-w-md mb-10">
            Search medicines, compare prices, and discover verified generic
            alternatives with MedFinder.
          </p>

          {/* Medicine Info Cards */}
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <InfoCard title="10,000+ Medicines" />
            <InfoCard title="Verified Generics" />
            <InfoCard title="Live Pricing" />
            <InfoCard title="Easy Ordering" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-4 text-sm text-center">
      <p className="text-emerald-400 font-semibold">{title}</p>
    </div>
  );
}
