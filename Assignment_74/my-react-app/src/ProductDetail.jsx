import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      getProductData(id)
        .then(function (product) {
          setItem(product);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [id]
  );
  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick(){
    onAddToCart(id,count)
  }

  function handleNextOrPrevious(){
    setCount(1) 
  }
  if (loading) {
    return <Loading />;
  }
  if (!item) {
    return <NotFound />;
  }
  return (
    <>
      <div className="p-4 grow">
        <Link to="/">
          <IoMdArrowBack className="text-2xl" />
        </Link>
        <div className="flex gap-4 p-10 items-start">
          <img
            className="w-80 h-auto object-contain rounded-sm"
            src={item.thumbnail}
            alt="Product"
          />

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-gray-800">
              {item.title}
            </h1>

            <p className="text-lg font-medium text-gray-700">${item.price}</p>

            <p className="text-gray-600 max-w-xl leading-relaxed">
              {item.description}
            </p>

            <div className="py-2 flex items-center gap-3">
              <input
                type="number"
                value={count}
                className="w-14 border border-gray-300 rounded px-2 py-1 text-center"
                onChange={handleCountChange}
              />
              <button onClick={handleButtonClick} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            {id > 1 && (
              <Link to={"/products/" + (id - 1)} className="flex" onClick={handleNextOrPrevious}>
                <IoMdArrowBack className="text-2xl" />
                Previous
              </Link>
            )}
          </div>
          <div>
            <Link to={"/products/" + (id + 1)} className="flex" onClick={handleNextOrPrevious}>
              <IoMdArrowForward className="text-2xl" />
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

// Base use -> https://dummyjson.com/

// product list
// path -> /products
// method -> GET
