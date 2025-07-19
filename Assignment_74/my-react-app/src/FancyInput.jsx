import React from "react";


function FancyInput({ name, label, id, className, touched, error, ...rest }) {
  let borderClass =
    "border-t-green-500 border-b-green-500 border-l-indigo-500 border-r-indigo-500 focus:border-t-indigo-500 focus:border-b-indigo-500 focus:border-l-green-500 focus:border-r-green-500 ";
  if (touched && error) {
    borderClass = "ring-2 ring-red-500";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        {...rest}
        className={
          "rounded-md focus:outline-none border-t-4 border-b-4 border-l-4 border-r-4 px-2 py-2 focus:z-10 text-gray-800 placeholder-gray-500 " +
          " " +
          className +
          " " +
          borderClass
        }
      />
      {touched && error && <div className="text-red-800">{error}</div>}
    </div>
  );
}

export default FancyInput;
