import React, { useState } from "react";
import Product from "./Product.jsx";
import Dropdown from "./Dropdown.jsx";
import Page from "./Pagechanger.jsx";
import Search from "./Search.jsx";

const products = [
  {
    category: "Mugs",
    title: "Black Printed Coffee Mug",
    price: "15.00",
    image: "https://dummyimage.com/300x300/000/fff&text=Black+Mug",
  },
  {
    category: "Mugs",
    title: "Father’s Day Coffee Mug",
    price: "19.00",
    image: "https://dummyimage.com/300x300/111/fff&text=Father's+Mug",
  },
  {
    category: "Tshirts",
    title: "Green Printed Tshirt",
    price: "34.00",
    image: "https://dummyimage.com/300x300/6bf/fff&text=Thankful",
  },
  {
    category: "Mugs",
    title: "Personalised Mug",
    price: "15.00",
    image: "https://dummyimage.com/300x300/222/fff&text=Personalized",
  },
  {
    category: "Tshirts",
    title: "Printed Brown Tshirt",
    price: "25.00",
    originalPrice: "34.00",
    image: "https://dummyimage.com/300x300/f4a261/fff&text=Brown",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Printed Dark Blue Tshirt",
    price: "34.00",
    image: "https://dummyimage.com/300x300/264653/fff&text=Dark+Blue",
  },
  {
    category: "Tshirts",
    title: "Printed Green Tshirt",
    price: "28.00",
    originalPrice: "35.00",
    image: "https://dummyimage.com/300x300/2a9d8f/fff&text=Green",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Printed Tshirt Coffee Black Color",
    price: "25.00",
    originalPrice: "35.00",
    image: "https://dummyimage.com/300x300/c2185b/fff&text=Coffee",
    sale: true,
  },
  {
    category: "Tshirts",
    title: "Typography Teal Printed Tshirt",
    price: "22.00",
    originalPrice: "30.00",
    image: "https://dummyimage.com/300x300/e76f51/fff&text=Teal",
    sale: true,
  },
];

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
    <div className="max-w-6xl mx-auto py-20 ">
      <div className="flex justify-center items-center bg-gray-100 py-20 rounded-xl">
        <div className="flex flex-col gap-5 w-full px-28">
          <div className="w-full flex justify-center">
            <Search searchChange={setQuery} />
          </div>

          <div className="w-full flex justify-end mb-4">
            <Dropdown sortChange={setSort} />
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            {filterPro.map(function (item, index) {
              return <Product key={index} {...item} />;
            })}
          </div>

          <div>
            <Page />
          </div>
        </div>
      </div>
    </div>
  );
}
