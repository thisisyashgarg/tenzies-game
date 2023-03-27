import React, { useEffect, useState } from "react";
import ConfettiEffect from "./components/ConfettiEffect";
import Die from "./components/Die";
import {
  DiceObject,
  createAnArrayOf10RandomDice,
  generateNewDie,
} from "./helper";

export default function App() {
  const [dice, setDice] = useState<Array<DiceObject>>(
    createAnArrayOf10RandomDice()
  );
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const firstDiceValue = dice[0].value;
    const allDiceAreHeld = dice.every((curr) => curr.isHeld);
    const allDiceHaveSameValue = dice.every(
      (curr) => curr.value === firstDiceValue
    );

    if (allDiceAreHeld && allDiceHaveSameValue) {
      setTenzies(true);
      console.log("you have won");
    }
  }, [dice]);

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(createAnArrayOf10RandomDice());
    }
  }

  function changeColor(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    // <main className=" h-[90vh] mr-9 m-10 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
    //   {tenzies && <ConfettiEffect />}
    //   <h1 className="text-6xl font-bold mb-4">Tenzies</h1>
    //   <p className="text-2xl max-w-md mb-8 text-center">
    //     Roll until all dice are the same. Click each die to freeze it at its
    //     current value between rolls.
    //   </p>
    //   <div className="grid grid-rows-2 grid-cols-5 gap-12 mx-10 p-5">
    //     {dice.map((dice: DiceObject) => {
    //       return (
    //         <Die
    //           value={dice.value}
    //           changeColor={() => changeColor(dice.id)}
    //           isHeld={dice.isHeld}
    //           key={dice.id}
    //           tenzies={tenzies}
    //         />
    //       );
    //     })}
    //   </div>

    //   <button
    //     className="p-4 px-10 text-white rounded-md text-2xl m-4 mt-10 bg-[#5036FF] tracking-wider "
    //     onClick={rollDice}
    //   >
    //     {tenzies ? "New Game" : "Roll"}
    //   </button>
    // </main>

    <main className="h-screen sm:h-screen  bg-slate-100 rounded-lg flex flex-col justify-center items-center overflow-x-hidden">
      {tenzies && <ConfettiEffect />}
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
        Tenzies
      </h1>
      <p className="text-lg  sm:text-2xl max-w-md mb-8 text-center">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-12 mx-4 sm:mx-10 p-2 sm:p-5">
        {dice.map((dice: DiceObject) => {
          return (
            <Die
              value={dice.value}
              changeColor={() => changeColor(dice.id)}
              isHeld={dice.isHeld}
              key={dice.id}
              tenzies={tenzies}
            />
          );
        })}
      </div>

      <button
        className="p-2 sm:p-4 px-6 sm:px-10 text-white rounded-md text-lg sm:text-2xl m-2 sm:m-4 mt-8 sm:mt-10 bg-[#5036FF] tracking-wider"
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
