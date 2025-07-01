import React from "react";

function TableRow({ number, index }) {

  return (
    <div className="p-2 text-xl text-indigo-700">
      {number}x{index}={number * index}
    </div>
  );
}

export default TableRow
