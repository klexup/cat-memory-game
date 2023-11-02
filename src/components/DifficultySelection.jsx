import React from "react";

export default function DifficultySelection({ setDifficulty, resetGame }) {
  function DifficultySelection(num) {
    setDifficulty(num);
    resetGame();
  }
  return (
    <>
      <div className="rules-container">
        <ul style={{ listStyle: "none" }}>
          <li>Click on a cat image to earn a point.</li>
          <li>After each click, the images shuffle.</li>
          <li>Clicking the same cat twice resets your score.</li>
          <li>Aim to beat your highest score!</li>
        </ul>
      </div>
      <div className="difficulty-container select-disable">
        <button
          onClick={() => {
            DifficultySelection(1);
          }}
        >
          EASY
        </button>
        <button
          onClick={() => {
            DifficultySelection(2);
          }}
        >
          MEDIUM
        </button>
        <button
          onClick={() => {
            DifficultySelection(3);
          }}
        >
          HARD
        </button>
      </div>
    </>
  );
}
