import React from "react";

export default function Dropdown({ sortChange }) {
  function handleSortChange(event) {
    sortChange(event.target.value);
  }
  return (
    <select
      className="border px-4 py-1 rounded text-sm"
      onChange={handleSortChange}
    >
      <option value="default">Default Sort</option>
      <option value="title">Sort by title</option>
      <option value="lowHigh">Sort by price: low to high</option>
      <option value="highLow">Sort by price: high to low</option>
    </select>
  );
}
