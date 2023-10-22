import React from "react";

export default function DifficultySelection({ setDifficulty, resetGame }) {
  function DifficultySelection(num) {
    setDifficulty(num);
    resetGame();
  }
  return (
    <>
      <div className="rules-container">
        <p>- Click on a cat image to earn a point.</p>
        <p>- After each click, the images shuffle.</p>
        <p>- Clicking the same cat twice resets your score.</p>
        <p>- Aim to beat your highest score!</p>
      </div>
      <div className="difficulty-container">
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
