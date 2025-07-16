import React from "react";

function Input({ name, label, id, className, touched, error, ...rest }) {
  let borderClass = "focus:ring-4 focus:ring-yellow-500";
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
          "rounded-md focus:outline-none border px-2 py-2 focus:z-10 text-gray-800 placeholder-gray-500 " +
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

export default Input;
