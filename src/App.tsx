import React, { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, newDice] = useState(allNewDice());

  function allNewDice(): number[] {
    const array: number[] = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 6) + 1);
    }
    return array;
  }

  return (
    <main className=" h-[90vh] mr-9 m-10 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-5 gap-12 mx-10 p-5">
        {dice.map((number, index) => {
          return <Die value={number} key={index} />;
        })}
      </div>
    </main>
  );
}
