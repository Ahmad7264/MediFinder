import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, Pill, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const navClass = ({ isActive }) =>
    `nav-link text-sm transition ${
      isActive ? "active text-emerald-400" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070b0f]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-emerald-400 font-semibold text-lg"
        >
          <Pill size={20} />
          MedFinder
        </Link>

        {/* Center Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>

          <NavLink to="/cart" className={navClass}>
            Cart
          </NavLink>
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-white/20 hover:border-emerald-400 transition cursor-pointer"
        >
          {theme === "dark" ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-emerald-500" />
          )}
        </button>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart
              size={20}
              className="text-gray-300 hover:text-emerald-400 transition cursor-pointer"
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs font-semibold rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1 text-emerald-400">
                <User size={14} />
                {user.name}
              </span>
              <button
                onClick={logout}
                className="text-gray-400 hover:text-red-400 transition text-xs cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              {/* Sign In */}
              <Link
                to="/login"
                className="text-sm text-gray-300 hover:text-white transition cursor-pointer"
              >
                Sign In
              </Link>

              {/* Get Started */}
              <Link
                to="/signup"
                className="ml-1 px-4 py-2 rounded-md bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition cursor-pointer"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
