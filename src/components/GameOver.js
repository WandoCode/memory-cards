import React from "react";

const GameOver = (props) => {
  return (
    <div className="gameover">
      <button onClick={props.makeNewGame}>New Game</button>
    </div>
  );
};

export default GameOver;
