import React from "react";

const InputNbrCards = (props) => {
  return (
    <div className="ndr-card-input">
      <input
        type="range"
        defaultValue="12"
        min="10"
        max="18"
        step="2"
        onChange={(e) => {
          props.changeNbrCards(e.target.value);
        }}
      />
    </div>
  );
};

export default InputNbrCards;
