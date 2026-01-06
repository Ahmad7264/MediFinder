import { useCart } from "../context/CartContext";
import { Trash2, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen dark:bg-[#070b0f] text-gray-900 dark:text-white px-6 pt-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-emerald-400 mb-6">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-400">Cart is empty</p>
        ) : (
          <>
            {/* Items */}
            <div className="space-y-4">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-white/5 border border-white/10 p-5 rounded-xl"
                >
                  <div>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-400">
                      ₹{item.price} × {item.qty}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold">₹{item.price * item.qty}</p>

                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-400 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-6">
              <p className="text-lg font-medium">Total</p>
              <p className="text-xl font-semibold flex items-center gap-1">
                <IndianRupee size={18} />
                {total}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={clearCart}
                className="px-6 py-3 border border-red-400 text-red-400 rounded-full hover:bg-red-400/10"
              >
                Clear Cart
              </button>

              <button
                onClick={() => {
                  if (user) {
                    // ✅ User already logged in → continue order
                    navigate("/address");
                  } else {
                    // ❌ Not logged in → go to login
                    navigate("/login", { state: { fromOrder: true } });
                  }
                }}
                className="px-6 py-3 bg-emerald-500 text-black rounded-full font-medium"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
