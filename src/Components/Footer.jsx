import { HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#06090d] text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 text-emerald-500 mb-3">
            <HeartPulse />
            <span className="font-semibold text-lg">MedFinder</span>
          </div>
          <p className="text-sm leading-relaxed">
            MedFinder is a student project that helps users search medicines,
            explore affordable generic alternatives, and simulate an ordering
            experience using a modern frontend UI.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-emerald-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-emerald-500">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-500 cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} MedFinder. Educational Project.</p>
          <p className="text-gray-500">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
