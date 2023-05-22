import React from "react";
import momentsImg from "../assets/moments.png";

const Main = () => {
  return (
    <div className="main">
      <img src={momentsImg} alt="moments" />
      <div className="main_inner">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by <br />
          one-of-a-kind hosts—all without leaving <br />
          home.
        </p>
      </div>
    </div>
  );
};

export default Main;
