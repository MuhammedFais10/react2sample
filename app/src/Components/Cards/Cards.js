import React from "react";
//import HomePage from "../../pages/HomePage";
import "../../Components/Cards/cardPage.css";
export default function Cards({ data }) {
  return (
    <div className="row main">
      {data.map((card) => (
        <div className="card" style={{ width: "18rem" }} key={card.id}>
          <img
            src={`${card.imgSrc}`}
            className="card-img-top"
            alt={card.title}
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
