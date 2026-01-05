import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { signInWithPopup } from "firebase/auth";

import { useAuth } from "../context/AuthContext";
import { auth, googleProvider } from "../firebase";

export default function Login() {
  /* -------------------- hooks -------------------- */
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  /* -------------------- state -------------------- */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fromOrder = location.state?.fromOrder;

  /* -------------------- effects -------------------- */
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  /* -------------------- handlers -------------------- */

  // Email + Password login (dummy)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      return setError("Please enter a valid email address");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    login({
      name: email.split("@")[0],
      email,
    });

    fromOrder ? navigate("/address") : navigate("/");
  };

  // Google login (Firebase)
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      login({
        name: googleUser.displayName,
        email: googleUser.email,
      });

      fromOrder ? navigate("/address") : navigate("/");
    } catch (err) {
      console.error("Google login error:", err);
      setError(err.message);
    }
  };

  // Facebook login (dummy)
  const handleFacebookLogin = () => {
    login({
      name: "Facebook User",
      email: "facebookuser@gmail.com",
    });

    fromOrder ? navigate("/address") : navigate("/");
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="min-h-screen flex bg-[#070b0f] text-white mt-6">
      {/* ================= LEFT : LOGIN FORM ================= */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-12">
        <div className="max-w-md w-full">
          {/* Header */}
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-400 mb-8">
            Sign in to continue your medicine search journey
          </p>

          {/* Error */}
          {error && <div className="mb-4 text-sm text-red-400">{error}</div>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Email address"
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
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-emerald-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Forgot password */}
            <div className="text-right text-sm text-gray-400 hover:text-emerald-400 cursor-pointer">
              Forgot password?
            </div>

            {/* Submit */}
            <button className="w-full py-3 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-white/10" />
            OR
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition"
            >
              Continue with Google
            </button>

            <button
              onClick={handleFacebookLogin}
              className="w-full py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
            >
              Continue with Facebook
            </button>
          </div>

          {/* Signup */}
          <p className="mt-6 text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-emerald-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* ================= RIGHT : VISUAL ================= */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
          alt="medicine"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-black/90" />

        <div className="relative z-10 p-14 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-4">
            Smarter Medicine <br /> Search Platform
          </h2>

          <p className="text-gray-200 max-w-md mb-8">
            MedFinder helps users discover affordable medicines, verified
            generics, and real-time pricing with a clean and intelligent UI.
          </p>

          <div className="flex gap-4">
            <MedicineCard name="Paracetamol" price="₹25" />
            <MedicineCard name="Amoxicillin" price="₹80" />
            <MedicineCard name="Ibuprofen" price="₹40" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= MEDICINE CARD ================= */
function MedicineCard({ name, price }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-4 text-sm">
      <p className="font-semibold text-emerald-400">{name}</p>
      <p className="text-gray-200">{price}</p>
    </div>
  );
}
