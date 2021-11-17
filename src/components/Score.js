import React from "react";

const Score = (props) => {
  return (
    <div className="score">
      <div> Current score {props.currentScore}</div>
      <div> Best score {props.bestScore}</div>
    </div>
  );
};

export default Score;
