import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SearchResults from "./pages/SearchResults";
import MedicineDetails from "./pages/MedicineDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import About from "./pages/About";
import Services from "./pages/Services";

import Address from "./pages/Address";
import OrderSuccess from "./pages/OrderSuccess";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/medicine" element={<MedicineDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<Address />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
