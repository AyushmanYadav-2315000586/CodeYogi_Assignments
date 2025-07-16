import React from "react";

export default function CartRow(props) {
  const item = props.item;
  const quantity = props.quantity;
  const subtotal = (item.price * quantity).toFixed(2);

  function handleRemove(event) {
    props.onRemove(item.id);
  }

  function handleInputChange(event){
    const newValue=+event.target.value;
    props.onQuantityChange(item.id,newValue)
  }

  return (
    <tr className="border-b">
      <td className="p-4 text-center">
        <div className="border rounded-full hover:bg-red-400 w-5 h-5 text-center">
          <button
            productid={item.id}
            className="text-gray-500 hover:text-white"
            onClick={handleRemove}
          >
            ✕
          </button>
        </div>
      </td>
      <td className="flex items-center gap-4 p-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 rounded"
        />
        <span className="text-red-500 font-semibold">{item.title}</span>
      </td>
      <td className="p-4 text-center">${item.price}</td>
      <td className="p-4 text-center">
        <input
          type="number"
          className="w-14 border rounded text-center"
          value={quantity}
          onChange={handleInputChange}
        />
      </td>
      <td className="p-4 text-center font-semibold">${subtotal}</td>
    </tr>
  );
}
