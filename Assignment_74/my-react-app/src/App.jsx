import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import CartPage from "./CartPage";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";
import Loading from "./Loading";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";

export default function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false)); // Avoid infinite loading if token invalid
    } else {
      setLoading(false);
    }
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("my-cart", JSON.stringify(newCart));
  };

  const handleAddToCart = useCallback(
    (productId, count) => {
      let oldCount = cart[productId] || 0;
      let newCart = { ...cart, [productId]: oldCount + count };
      updateCart(newCart);
    },
    [cart]
  );

  const handleRemoveFromCart = useCallback(
    (productId) => {
      const newCart = { ...cart };
      delete newCart[productId];
      updateCart(newCart);
    },
    [cart]
  );

  const handleQuantity = useCallback(
    (productId, newCount) => {
      if (newCount < 1) return;
      const newCart = { ...cart, [productId]: newCount };
      updateCart(newCart);
    },
    [cart]
  );

  const totalCount = useMemo(
    () => Object.keys(cart).reduce((prev, curr) => prev + cart[curr], 0),
    [cart]
  );

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);  
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <NavBar productCount={totalCount} user={user} onLogout={handleLogout} />
      <div className="grow">
        <Routes>
          <Route
            path="/login"
            element={
              <AuthRoute user={user}>
                <Login setUser={setUser} />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute user={user}>
                <SignUp setUser={setUser} />
              </AuthRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            index
            element={
              <UserRoute user={user}>
                <Main />
              </UserRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <UserRoute user={user}>
                <ProductDetail onAddToCart={handleAddToCart} />
              </UserRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <UserRoute user={user}>
                <CartPage
                  cart={cart}
                  onRemove={handleRemoveFromCart}
                  onUpdate={handleQuantity}
                />
              </UserRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
