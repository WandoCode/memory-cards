import React, { useEffect, useState } from "react";
import pictures from "../Images";
import Card from "./Card";
import uniqid from "uniqid";
import GameOver from "./GameOver";

const Board = (props) => {
  const nbrCards = props.nbrCards;
  const [usedLinks, setUsedLinks] = useState();
  const [cardArray, setCardArray] = useState([]);
  const [playedCardArray, setPlayedCardArray] = useState([]);
  const [currentPlayedCardID, setCurrentPlayedCardID] = useState();
  const [gameOver, setgameOver] = useState(false);

  useEffect(() => {
    props.resetScore();
    setPlayedCardArray([]);
    const newUsedLinks = pictures.slice(0, nbrCards);
    const newCardsArray = shuffleArray(newUsedLinks).map((link) => {
      return (
        <Card
          id={uniqid()}
          key={uniqid()}
          imgSrc={link}
          handleClick={clickedCard}
        />
      );
    });
    setCardArray(newCardsArray);
    setUsedLinks(newUsedLinks);
  }, [nbrCards]);

  useEffect(() => {
    if (currentPlayedCardID) {
      if (playedCardArray.includes(currentPlayedCardID)) {
        setgameOver(true);
      } else {
        setPlayedCardArray(playedCardArray.concat([currentPlayedCardID]));
        props.addScore();
        shuffleCards(shuffleArray, cardArray, setCardArray);
      }
      setCurrentPlayedCardID();
    }
  }, [currentPlayedCardID]);

  const clickedCard = (stringID) => {
    setCurrentPlayedCardID(stringID);
  };

  const makeNewGame = () => {
    props.resetScore();
    setgameOver(false);
    setPlayedCardArray([]);
    shuffleCards(shuffleArray, cardArray, setCardArray);
  };

  // Helpers, shuffles cards on the screen
  function shuffleCards(shuffleArray, cardArray, setCardArray) {
    const newCardsArray = shuffleArray(cardArray);
    setCardArray(newCardsArray);
  }

  // Helpers to shuffle an array
  function shuffleArray(array) {
    let newArray = [];
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array.splice(randId, 1);
      newArray.push(tmp);
    }
    return newArray;
  }

  return (
    <div className="board">
      {gameOver ? (
        <GameOver makeNewGame={makeNewGame} />
      ) : (
        <React.Fragment>{cardArray}</React.Fragment>
      )}
    </div>
  );
};

export default Board;
