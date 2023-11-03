import React, { useState } from "react";
import CatImage from "./CatImage";
import YouWin from "./YouWin";
import Mistake from "./Mistake";

export default function GameBoard({
  catArray,
  guess,
  currentScore,
  winCondition,
  toggleMistake,
  setToggleMistake,
}) {
  if (toggleMistake) {
    return <Mistake setToggleMistake={setToggleMistake} />;
  }
  if (winCondition === currentScore) {
    return <YouWin />;
  }
  return (
    <>
      <div className="gameboard-container">
        {catArray === null ? (
          <h1>LOADING...</h1>
        ) : (
          catArray.map((cat) => {
            return (
              <CatImage cat={cat} key={cat.id} id={cat.id} guess={guess} />
            );
          })
        )}
      </div>
    </>
  );
}
