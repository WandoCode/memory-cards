import React from "react";

const Card = (props) => {
  const altImg = props.imgSrc[0].split("/")[3].split(".")[0];
  return (
    <div className="card">
      <img
        id={props.id}
        src={props.imgSrc}
        alt={altImg}
        style={{ width: "200px" }}
        onClick={(e) => props.handleClick(e.target.id)}
      />
    </div>
  );
};
export default Card;
