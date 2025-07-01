import React from "react";

function TableRow({ num, index }) {
  return (
    <div className="p-2 text-xl text-indigo-700">
      {num}x{index}={num * index}
    </div>
  );
}

export default TableRow;
