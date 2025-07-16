import React, { useState } from "react";
import Product from "./Product.jsx";
import Dropdown from "./Dropdown.jsx";
import Page from "./Pagechanger.jsx";
import Search from "./Search.jsx";
import NoProduct from "./NoProduct.jsx";
import { useEffect } from "react";
import { getProductList } from "./api.js";
import Loading from "./Loading.jsx";
import { useMemo } from "react";
import FancyInput from "./FancyInput.jsx";

export default function Main() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    getProductList(query)
      .then(function (products) {
        setProductList(products);
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  }, []);

  function handleQueryChange(event){
    setQuery(event.target.value);
  }

  const filterPro = useMemo(
    function () {
      const filtered = productList.filter(function (item) {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });

      return filtered.sort(function (a, b) {
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
    },
    [productList, query, sort]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="relative bg-white py-20 rounded-xl">
        <div className="flex flex-col gap-5 w-full px-28">
          <div className="w-full flex justify-end">
            <FancyInput
              onChange={handleQueryChange}
              name="search"
              id="search"
              value={query}
              label="Search"
              placeholder="Search products..."
              className="w-full transition-all duration-300"
            />
          </div>

          <div className="w-full flex justify-end mb-4">
            <Dropdown sortChange={setSort} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
