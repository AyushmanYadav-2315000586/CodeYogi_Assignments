import React from "react";
import { ImSpinner } from "react-icons/im";

export default function Loading() {
  return (
    <div className="grow text-indigo-700 h-screen text-8xl flex justify-center items-center">
      <ImSpinner className="animate-spin"/>
    </div>
  );
}
