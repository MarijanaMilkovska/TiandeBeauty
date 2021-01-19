import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, price, id, category, code, img }) => {
  let starsArray = [];

  for (let i = 0; i < 0; i++) {
    starsArray.push(<i className="fa fa-star"></i>);
  }

  return (
    <div className="Card col-md-4">
      <Link to={`/Details/${id}`}>
        <img src={img} alt=""/>
       <div className="titleCard">
       <h2>{title}</h2>
       </div>
        <div className="price">{price}</div>
       
      </Link>
    </div>
  );
};

export default Card;
