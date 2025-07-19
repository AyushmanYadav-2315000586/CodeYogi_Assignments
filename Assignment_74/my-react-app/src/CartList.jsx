import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import { getProductData } from "./api";

export default function CartList({ cart, onRemove, onUpdate }) {
  const [items, setItems] = useState([]);
  const productIds = Object.keys(cart);
  const [localQuantity, setLocalQuantity] = useState({});
   
  useEffect(
    function () {
      const promises = productIds.map(function (id) {
        return getProductData(id);
      });

      Promise.all(promises).then(function (products) {
        setItems(products);
      });
    },
    [cart]
  );

  function handleQuantityChange(productId, newValue) {
    if (newValue < 1) return;
    setLocalQuantity({ ...localQuantity, [productId]: newValue });
  }

  function handleUpdateCart() {
    Object.entries(localQuantity).forEach(function ([id, count]) {
      onUpdate(id, count);
    });
  }

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
        {items.map(function (items) {
          return (
            <CartRow
              key={items.id}
              item={items}
              quantity={localQuantity[items.id] || cart[items.id]}
              onRemove={onRemove}
              cart={cart}
              onQuantityChange={handleQuantityChange}
            />
          );
        })}
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
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded ml-auto hover:bg-gray-400"
                onClick={handleUpdateCart}
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
