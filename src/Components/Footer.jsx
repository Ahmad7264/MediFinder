import { HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#06090d] text-gray-700 dark:text-gray-300">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 text-emerald-500 mb-4">
            <HeartPulse size={26} />
            <span className="text-xl font-semibold">MedFinder</span>
          </div>

          <p className="text-sm leading-relaxed max-w-sm">
            MedFinder is a student project that helps users search medicines,
            discover affordable generic alternatives, and simulate an ordering
            experience using a clean, modern frontend interface.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/cart">Cart</FooterLink>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
            Support
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterText>Help Center</FooterText>
            <FooterText>Privacy Policy</FooterText>
            <FooterText>Terms of Service</FooterText>
            <FooterText>Contact</FooterText>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 dark:border-white/10" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-emerald-500">MedFinder</span>.  
          Educational Project.
        </p>

        <p className="text-gray-500">
          Built with <span className="text-red-500">♥</span> using React &
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

/* ================= SUB COMPONENTS ================= */

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-emerald-500 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterText({ children }) {
  return (
    <li className="cursor-pointer hover:text-emerald-500 transition-colors">
      {children}
    </li>
  );
}
