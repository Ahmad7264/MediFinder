import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Address() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen dark:bg-[#070b0f] text-gray-900 dark:text-white flex items-center justify-center px-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-emerald-400 text-center">
          Delivery Details
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 bg-white/10 rounded-lg outline-none"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            required
            className="w-full px-4 py-3 bg-white/10 rounded-lg outline-none"
          />

          <textarea
            placeholder="Delivery Address"
            required
            className="w-full px-4 py-3 bg-white/10 rounded-lg outline-none"
          ></textarea>

          <input
            type="text"
            placeholder="Pincode"
            required
            className="w-full px-4 py-3 bg-white/10 rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 text-black rounded-full font-medium cursor-pointer"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
