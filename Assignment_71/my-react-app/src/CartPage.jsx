import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import EmptyCart from "./EmptyCart";
import Loading from "./Loading";

export default function CartPage({ cart, onRemove, onUpdate }) {
  const productIds = Object.keys(cart);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const promises = productIds.map(function (id) {
      return getProductData(id);
    });
    Promise.all(promises).then(function(products){
      const totalValue=products.reduce(function(prev,curr){
        return prev+curr.price * cart[curr.id];
      },0);
      setTotal(totalValue);
      setLoading(false);
    })
  },[cart]);

  if(loading){
    return <Loading />
  }

  if(productIds.length===0)
  {
    return (
      <div className="px-10 py-20 bg-gray-200 min-h-screen">
        <EmptyCart />
      </div>
    );
  }
  return (
    <div className="p-10 bg-gray-200 min-h-screen mx-auto">
      <div className="bg-white p-20 relative">
        <Link to="/">
          <IoMdArrowBack className="absolute top-1 left-1 text-2xl" />
        </Link>
        <div className="flex flex-col gap-8">
          <div className="col-span-2">
            <CartList cart={cart} onRemove={onRemove} onUpdate={onUpdate}/>
          </div>

          <div className="border p-4 h-fit w-full max-w-xl self-end">
            <h2 className="text-lg font-semibold mb-4">Cart totals</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 mb-4">
              <span>Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
