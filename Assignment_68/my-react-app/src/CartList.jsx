import React from "react";
import CartRow from "./CartRow";

export default function CartList() {
  const item1 = {
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  };

  const item2 = {
    title: "Eyeshadow Palette with Mirror",
    price: 19.99,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  };

  return (
    <table className="w-full border text-sm text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4 text-center"></th>
          <th className="p-4">Product</th>
          <th className="p-4 text-center">Price</th>
          <th className="p-4 text-center">Quantity</th>
          <th className="p-4 text-center">Subtotal</th>
        </tr>
      </thead>

      <tbody>
        <CartRow item={item1} quantity={1} />
        <CartRow item={item2} quantity={2} />
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="5">
            <div className="flex items-center gap-3 mt-6 px-4 pb-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-4 py-2 rounded w-44"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                APPLY COUPON
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded ml-auto"
                disabled
              >
                UPDATE CART
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
