import React from "react";

export default function Search({searchChange}) {
  function handleChange(event) {
    searchChange(event.target.value);
  }

  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
      />
    </div>
  );
}
