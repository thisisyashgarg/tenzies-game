import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

type DiceObject = {
  value: number;
  isHeld: boolean;
  id: string;
};

export default function App() {
  const [dice, setDice] = useState<Array<DiceObject>>([]);

  useEffect(() => {
    allNewDie();
  }, []);

  function createAnArrayOf10RandomDice(): DiceObject[] {
    const array: DiceObject[] = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return array;
  }

  function allNewDie() {
    setDice(createAnArrayOf10RandomDice());
  }

  function changeColor(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
    console.log(id);
  }

  return (
    <main className=" h-[90vh] mr-9 m-10 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-5 gap-12 mx-10 p-5">
        {dice.map((dice: DiceObject) => {
          return (
            <Die
              value={dice.value}
              changeColor={() => changeColor(dice.id)}
              isHeld={dice.isHeld}
              key={dice.id}
            />
          );
        })}
      </div>

      <button
        className="p-4 px-10 text-white rounded-md text-2xl m-4 bg-[#5036FF] tracking-wider "
        onClick={createAnArrayOf10RandomDice}
      >
        Roll
      </button>
    </main>
  );
}
