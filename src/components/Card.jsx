import React from "react";
import round from "../assets/Ellipse.svg";
import star from "../assets/star.svg";

const Card = ({ country, heading, price, rating, status, number, image }) => {
  return (
    <div>
      <div className="card">
        <div className="card_image">
          <img src={image} />
          <div className="card_status">
            <p>{status}</p>
          </div>
        </div>
        <div className="card_content">
          <div className="card_info">
            <img src={star} style={{ width: "14px" }} />{" "}
            <span className="card_rating"> {rating} </span>
            <span className="card_small_info">
              ({number}) <img style={{ width: "2px" }} src={round} /> {country}
            </span>
          </div>
          <h3>{heading}</h3>
          <p className="card_price">
            From {price} <span>/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
