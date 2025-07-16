import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import CartPage from "./CartPage";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { useCallback } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

export default function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);

  const handleAddToCart = useCallback(
    (productId, count) => {
      let oldCount = cart[productId] || 0;
      let newCart = { ...cart, [productId]: oldCount + count };
      setCart(newCart);
      const cartString = JSON.stringify(newCart);
      localStorage.setItem("my-cart", cartString);
    },
    [cart]
  );

  const handleRemoveFromCart = useCallback(
    function (productId) {
      const newCart = { ...cart };
      delete newCart[productId];
      setCart(newCart);
      localStorage.setItem("my-cart", JSON.stringify(newCart));
    },
    [cart]
  );

  const handleQuantity = useCallback(function (productId, newCount) {
    if(newCount<1) return;
    const newCart={...cart,[productId]:newCount};
    setCart(newCart);
    localStorage.setItem("my-cart",JSON.stringify(newCart));
  },[cart]);

  // The useCallback hook is used to memoize the handleAddToCart function,
  // preventing it from being recreated on every render unless the cart state changes. 
  const totalCount = useMemo(
    () =>
      Object.keys(cart).reduce(function (previous, current) {
        return previous + cart[current];
      }, 0),
    [cart]
  );

  // The useMemo hook is used to optimize the calculation of totalCount,
  // ensuring that it only recalculates when the cart changes.

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <NavBar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route index element={<Main />}></Route>
          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<CartPage cart={cart} onRemove={handleRemoveFromCart} onUpdate={handleQuantity} />}
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
