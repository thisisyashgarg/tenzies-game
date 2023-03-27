import React from "react";

export default function Die({ value, changeColor, isHeld, tenzies }) {
  return (
    <div
      className={`w-16 h-16 shadow-md rounded-md flex justify-center items-center my-4 ${
        isHeld ? "bg-[#59E391]" : "bg-white"
      }`}
      onClick={changeColor}
    >
      <h2 className="font-bold text-4xl ">{value}</h2>
    </div>
  );
}
