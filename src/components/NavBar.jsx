import React from "react";

export default function NavBar({
  setCatArray,
  randomizeArray,
  cats,
  currentScore,
  highScore,
  setDifficulty,
  resetGame,
}) {
  function goHome() {
    setDifficulty(0);
  }
  return (
    <>
      <div className="nav-container select-disable">
        <div className="wrapper">
          <button onClick={goHome}>Home</button>
          <h3> Score: {currentScore}</h3>
          <h3> High Score: {highScore}</h3>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    </>
  );
}
