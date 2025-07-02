import React from "react";
import NavBar from "./NavBar.jsx";
import Main from "./main.jsx";
import Footer from "./Footer.jsx";
export default function ProductListPage() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar photo="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" />
      <Main />
      <Footer />
    </div>
  );
}
