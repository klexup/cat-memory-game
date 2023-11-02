import React, { useState } from "react";
import CatImage from "./CatImage";
import YouWin from "./YouWin";

export default function GameBoard({
  catArray,
  guess,
  currentScore,
  winCondition,
}) {
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
