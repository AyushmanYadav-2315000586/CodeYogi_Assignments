import React from "react";
import { useParams } from "react-router-dom";
import products from "./DummyData";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function  ProductDetail() {
  const params=useParams();
  const sku=params.sku;

  let item;

  for (let index = 0; index < products.length; index++) {
    const pro=products[index];
    if(sku==pro.sku){
      item=pro;
      break;
    }
    
  }
  console.log("item is ", item);
  

  return (
    <div className="p-4">
      <Link to="/">
        <IoMdArrowBack className="text-2xl" />
      </Link>
      <div className="flex gap-4 p-10 items-start">
        <img
          className="w-80 h-auto object-contain rounded-sm"
          src={item.image}
          alt="Product"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-gray-800">{item.title}</h1>

          <p className="text-lg font-medium text-gray-700">${item.price}</p>

          <p className="text-gray-600 max-w-xl leading-relaxed">
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. Numquam eius modi tempora incidunt lores ta porro ame.
          </p>

          <div className="py-2 flex items-center gap-3">
            <input
              type="number"
              value="1"
              className="w-14 border border-gray-300 rounded px-2 py-1 text-center"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
