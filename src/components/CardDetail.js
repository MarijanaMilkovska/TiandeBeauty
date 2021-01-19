

import React, { Fragment } from "react";
import products from "../library";
import Banner from "./Banner";
import FormPayment from './FormPayment'

const CardDetail = (props) => {
  const currentProduct = products[props.match.params.id - 1];
  let starsArray = [];

  for (let i = 0; i < currentProduct.stars; i++) {
    starsArray.push(<i className="fa fa-star"></i>);
  }

  return (
    <Fragment>
      <Banner title={currentProduct.title} />
      <div className="CardDetail container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={require(`../img/${currentProduct.id}.jpg`)} alt="img" />
          </div>
          <div className="col-md-6 info-cont">

            <h2 className="price">{currentProduct.price}</h2>
            <h2 className="title">{currentProduct.title}</h2>
            {starsArray}
            <p>{currentProduct.desc}</p>
            <p className="code"><b className="coding">Шифра:</b>{currentProduct.code} </p>
          <FormPayment/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardDetail;
