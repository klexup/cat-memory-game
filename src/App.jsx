import { useEffect, useState } from "react";
import cats from "./data/cats.json";
import NavBar from "./components/NavBar";
import GameBoard from "./components/GameBoard";
import DifficultySelection from "./components/DifficultySelection";

function App() {
  const [catArray, setCatArray] = useState(null);
  const [currentGuesses, setCurrentGuesses] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [winCondition, setWinCondition] = useState();
  const [toggleMistake, setToggleMistake] = useState(false);

  let currentCatArray = catArray;

  useEffect(() => {
    const newArray = randomizeArray(cats);
    switch (difficulty) {
      case 1:
        setCatArray(newArray.splice(0, 8));
        setWinCondition(8);
        break;
      case 2:
        setCatArray(newArray.splice(0, 12));
        setWinCondition(12);
        break;
      case 3:
        setCatArray(newArray);
        setWinCondition(16);
        break;
    }
  }, [difficulty]);

  function randomizeArray(originalArray) {
    let array = [...originalArray];
    let newArray = [];
    const arrayLength = array.length;

    for (let i = arrayLength; i > 0; i--) {
      const randomNumber = Math.floor(Math.random() * i);
      newArray.push(array[randomNumber]);
      array.splice(randomNumber, 1);
    }
    return newArray;
  }

  function guess(id) {
    setCatArray(randomizeArray(currentCatArray));
    if (currentGuesses.includes(id)) {
      if (currentScore > highScore) {
        const c = currentScore;
        setHighScore(c);
      }
      setToggleMistake(() => {
        setTimeout(() => {
          setToggleMistake(false);
        }, 1000);
        return true;
      });
      setCurrentGuesses([]);
      setCurrentScore(0);
      return;
    }

    setCurrentScore((prev) => prev + 1);
    setCurrentGuesses((prev) => {
      const newState = [...prev, id];
      return newState;
    });
  }

  function resetGame() {
    setHighScore(0);
    setCurrentScore(0);
    setCurrentGuesses([]);
  }

  return (
    <>
      {difficulty === 0 ? (
        <DifficultySelection
          setDifficulty={setDifficulty}
          resetGame={resetGame}
        />
      ) : (
        <>
          <NavBar
            setCatArray={setCatArray}
            randomizeArray={randomizeArray}
            cats={cats}
            currentScore={currentScore}
            highScore={highScore}
            setDifficulty={setDifficulty}
            resetGame={resetGame}
          />
          <GameBoard
            catArray={catArray}
            guess={guess}
            currentScore={currentScore}
            winCondition={winCondition}
            toggleMistake={toggleMistake}
          />
        </>
      )}
    </>
  );
}

export default App;
