import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Pill,
  ShoppingCart,
  ArrowLeft,
  ShieldCheck,
  Info,
  IndianRupee,
  PackageCheck,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export default function MedicineDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const medicineName = state?.medicine;
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.fda.gov/drug/label.json?search=${query}&limit=5`,
        { signal: controller.signal }
      );
      const data = await res.json();

      const meds =
        data.results?.map(
          (item) =>
            item.openfda?.brand_name?.[0] || item.openfda?.generic_name?.[0]
        ) || [];

      setResults(meds.length ? [...new Set(meds)] : FALLBACK_MEDICINES);
    } catch (e) {
      console.error("API failed, using fallback");
      setResults(FALLBACK_MEDICINES);
    } finally {
      setLoading(false);
    }
  };

  /* 🔹 Extract API data safely */
  const generic = details?.openfda?.generic_name?.[0] || "Not Available";
  const category = details?.openfda?.pharm_class_epc?.[0] || "General Medicine";
  const route = details?.openfda?.route?.[0] || "Not Specified";
  const usage =
    details?.indications_and_usage?.[0]?.slice(0, 140) ||
    "As advised by doctor";
  const warning =
    details?.warnings?.[0]?.slice(0, 140) || "No major warnings listed";

  /* 🔹 Single Price (deterministic) */
  const basePrice = medicineName.length * 12 + 30;
  const price = `₹${basePrice}`;

  /* 🔹 Availability logic */
  const availability = route.toLowerCase().includes("inject")
    ? "Limited Stock"
    : "Available";

  return (
    <section className="min-h-screen dark:bg-[#070b0f] text-gray-900 dark:text-white px-6 pt-28">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm text-emerald-400 hover:underline"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
          {/* Header */}
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-emerald-500/15">
              <Pill size={40} className="text-emerald-400" />
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-emerald-400">
                {medicineName}
              </h1>
              <p className="text-sm text-gray-400 mt-1">{category}</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <InfoCard icon={<Info />} label="Generic Name" value={generic} />
            <InfoCard
              icon={<ShieldCheck />}
              label="Category"
              value={category}
            />
            <InfoCard icon={<Info />} label="Route" value={route} />
            <InfoCard icon={<IndianRupee />} label="Price" value={price} />
            <InfoCard
              icon={<PackageCheck />}
              label="Availability"
              value={availability}
            />
            <InfoCard icon={<Info />} label="Usage" value={usage} />
            <InfoCard icon={<ShieldCheck />} label="Warnings" value={warning} />
          </div>

          {/* Actions */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <button
              onClick={() => {
                addToCart({
                  name: medicineName,
                  price: basePrice,
                });
                setShowSuccess(true);
              }}
              className="flex items-center gap-2 px-8 py-3 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400 cursor-pointer"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 border border-emerald-400/60 text-emerald-400 rounded-full hover:bg-emerald-400/10 cursor-pointer"
            >
              Continue Searching
            </button>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            ⚠ Price and availability are simulated for academic demonstration.
          </p>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold text-emerald-400">
              ✅ Added to Cart
            </h2>

            <p className="mt-3 text-gray-300 text-sm">
              {medicineName} has been added to your cart successfully.
            </p>

            <div className="mt-6 flex gap-3 justify-center">
              <button
                onClick={() => navigate("/cart")}
                className="px-6 py-2 bg-emerald-500 text-black rounded-full font-medium cursor-pointer"
              >
                Go to Cart
              </button>

              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-2 border border-emerald-400/60 text-emerald-400 rounded-full hover:bg-emerald-400/10 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, label, value }) {
  return (
    <div className="flex gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
      <span className="text-emerald-400 mt-1">{icon}</span>
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm text-white mt-1">{value}</p>
      </div>
    </div>
  );
}
