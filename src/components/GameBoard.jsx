import React from "react";
import CatImage from "./CatImage";

export default function GameBoard({ catArray, guess }) {
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
