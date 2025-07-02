import React, { useState } from "react";
import Product from "./Product.jsx";
import Dropdown from "./Dropdown.jsx";
import Page from "./Pagechanger.jsx";
import Search from "./Search.jsx";
import products from "./DummyData.js";
import NoProduct from "./NoProduct.jsx";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Main() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const filterPro = products.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  filterPro.sort(function (a, b) {
    if (sort === "title") {
      return a.title < b.title ? -1 : 1;
    } else if (sort === "lowHigh") {
      return a.price - b.price;
    } else if (sort === "highLow") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="relative bg-gray-100 py-20 rounded-xl">
        <div className="absolute top-4 right-10 flex items-center gap-2 text-red-600 font-semibold">
          <Link to="/cart">
            <FaCartArrowDown />
          </Link>
          <Link to="/cart">
            <span>Add to cart</span>
          </Link>
        </div>

        <div className="flex flex-col gap-5 w-full px-28">
          <div className="w-full flex justify-center">
            <Search searchChange={setQuery} />
          </div>

          <div className="w-full flex justify-end mb-4">
            <Dropdown sortChange={setSort} />
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            {filterPro.length > 0 &&
              filterPro.map(function (item, index) {
                return <Product key={index} {...item} />;
              })}
            {filterPro.length === 0 && <NoProduct />}
          </div>
          <div>
            <Page />
          </div>
        </div>
      </div>
    </div>
  );
}
