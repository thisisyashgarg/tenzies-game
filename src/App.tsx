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
    checkWinningCondition();
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

  function checkWinningCondition() {
    const firstDiceValue = dice[0].value;
    const allDiceAreHeld = dice.every((curr) => curr.isHeld);
    const allDiceHaveSameValue = dice.every(
      (curr) => curr.value === firstDiceValue
    );

    if (allDiceAreHeld && allDiceHaveSameValue) {
      setTenzies(true);
      console.log("you have won");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      {tenzies && <ConfettiEffect />}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 sm:mt-8 text-center">
        Tenzies
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-md mt-4 sm:mt-6 mb-8 text-center">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-8 md:gap-12 p-2 sm:p-5">
        {dice.map((dice) => (
          <Die
            key={dice.id}
            value={dice.value}
            isHeld={dice.isHeld}
            changeColor={() => changeColor(dice.id)}
            tenzies={tenzies}
          />
        ))}
      </div>
      <button
        className="mb-4 px-4 sm:px-6 md:px-8 py-2 sm:py-4 md:py-6 text-lg sm:text-xl md:text-2xl text-white font-semibold rounded-md bg-[#5036FF]  mt-8 sm:mt-10  tracking-wider "
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
