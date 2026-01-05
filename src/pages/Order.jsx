import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div className="min-h-screen bg-[#070b0f] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur">
        <CheckCircle size={56} className="text-emerald-400 mx-auto" />

        <h1 className="mt-4 text-2xl font-semibold">
          Order Placed Successfully
        </h1>

        <p className="mt-3 text-gray-300 text-sm">
          Your order has been placed successfully.  
          <br />
          This is a <b>dummy order</b> for academic demonstration only.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400"
          >
            Go to Home
          </Link>

          <Link
            to="/search"
            className="px-6 py-3 border border-emerald-400/60 text-emerald-400 rounded-full hover:bg-emerald-400/10"
          >
            Search Again
          </Link>
        </div>
      </div>
    </div>
  );
}
