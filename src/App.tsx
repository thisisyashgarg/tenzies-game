import React, { useEffect, useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState([]);

  function createAnArrayOf10RandomNumbers(): void {
    const array: number[] = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 6) + 1);
    }
    setDice(array);
  }

  useEffect(() => {
    createAnArrayOf10RandomNumbers();
  }, []);

  return (
    <main className=" h-[90vh] mr-9 m-10 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-5 gap-12 mx-10 p-5">
        {dice.map((number: number, index) => {
          return <Die value={number} key={index} />;
        })}
      </div>

      <button
        className="p-4 px-10 text-white rounded-md text-2xl m-4 bg-blue-700 tracking-wider hover:bg-blue-600"
        onClick={createAnArrayOf10RandomNumbers}
      >
        Roll
      </button>
    </main>
  );
}
