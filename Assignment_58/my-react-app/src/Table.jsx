import React,{ useState } from "react";
import TableRow from "./TableRow";



function Table() {
  const [num, setA] = useState(2);

  function nextTable() {
    setA(num + 1);
  }

  return (
    <div className="p-2">
      <button
        onClick={nextTable}
        className="rounded-e-md px-4 py-1 bg-indigo-700 text-white"
      >
        Next
      </button>
      <TableRow number={num} index={1} />
      <TableRow number={num} index={2} />
      <TableRow number={num} index={3} />
      <TableRow number={num} index={4} />
      <TableRow number={num} index={5} />
    </div>
  );
}

export default Table;
