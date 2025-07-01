import React from "react";

export default function Page() {
  return (
    <div className="flex justify-start mt-10">
      <nav className="flex gap-2">
        <button className="bg-red-500 text-white px-4 py-2 border border-red-500 rounded">
          1
        </button>
        <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100">
          2
        </button>
        <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100">
          →
        </button>
      </nav>
    </div>
  );
}
