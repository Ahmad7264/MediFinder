import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-[#070b0f] text-white flex items-center justify-center px-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
        <CheckCircle size={56} className="text-emerald-400 mx-auto" />

        <h2 className="mt-4 text-2xl font-semibold">
          Order Placed Successfully
        </h2>

        <p className="mt-3 text-gray-300 text-sm">
          Your order has been placed successfully.
          <br />
          <b>This is a demo order for academic purposes.</b>
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-emerald-500 text-black rounded-full font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
