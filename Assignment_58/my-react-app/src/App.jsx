import React from "react";
import ProductListPage from "./ProductListPage";
import AssignmentPage from "./AssignmentPage";
import LecturePage from "./LecturePage";
import Sidebar from "./Sidebar";
import { Routes,Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";

export default function App() {
  const path=window.location.pathname
  return (
    <div>
      <Routes>
        <Route index element={<ProductListPage/>}></Route>
        <Route path="/products/1" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}
