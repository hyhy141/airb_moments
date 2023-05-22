import { infos } from "../data/data";
import React, { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        className="card_search"
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search..."
        value={text}
      />
      <div className="cards">
        {infos
          .filter((info) => {
            if (info.heading.toLowerCase().includes(text)) {
              return info;
            }
          })
          .map((info, index) => {
            return <Card key={index} {...info} />;
          })}
      </div>
    </>
  );
};

export default Cards;
