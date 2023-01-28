import React from "react";

export default function Die(props) {
  return (
    <div className="w-16 h-16 shadow-md rounded-md flex justify-center items-center my-4">
      <h2 className="font-bold text-4xl ">{props.value}</h2>
    </div>
  );
}
