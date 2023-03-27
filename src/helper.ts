import { nanoid } from "nanoid";
export type DiceObject = {
  value: number;
  isHeld: boolean;
  id: string;
};

export function createAnArrayOf10RandomDice(): DiceObject[] {
  const array: DiceObject[] = [];
  for (let i = 0; i < 10; i++) {
    array.push(generateNewDie());
  }
  return array;
}

export function generateNewDie() {
  return {
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
  };
}
