import React from "react";
import Confetti from "react-confetti";

export default function ConfettiEffect() {
  const { innerHeight, innerWidth } = window;
  return <Confetti width={innerWidth} height={innerHeight} />;
}
