import React from "react";

export default function DifficultySelection({ setDifficulty, resetGame }) {
  function DifficultySelection(num) {
    setDifficulty(num);
    resetGame();
  }
  return (
    <>
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
