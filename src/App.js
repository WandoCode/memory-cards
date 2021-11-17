import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import InputNbrCards from "./components/InputNbrCards";
import Score from "./components/Score";

const App = () => {
  const [nrbCards, setNrbCards] = useState(12);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [addScore, setAddScore] = useState(false);

  useEffect(() => {
    if (addScore) {
      setCurrentScore(currentScore + 1);
    }
    setAddScore(false);
  }, [addScore]);

  useEffect(() => {
    if (currentScore >= bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  const triggerCounter = () => {
    setAddScore(true);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  return (
    <div className="app">
      <Score currentScore={currentScore} bestScore={bestScore} />
      <InputNbrCards
        changeNbrCards={(n) => {
          setNrbCards(n);
        }}
      />
      <Board
        nbrCards={nrbCards}
        addScore={triggerCounter}
        resetScore={resetScore}
      />
    </div>
  );
};

export default App;
