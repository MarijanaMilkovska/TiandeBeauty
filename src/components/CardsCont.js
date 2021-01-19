import React from "react";
import Card from "./Card";
// import Search from "./Search";


 const CardsCont =({allProducts}) =>{
   
    return (
      <div className="CardCont container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="row">
              <h2 className="titleProducts">ПРОДУКТИ</h2>
              {/* <Search/> */}
            </div>
            <div className="row cardrow">
              {allProducts.map((el) => (
                <Card
                  key={el.id}
                  title={el.title}
                  price={el.price}
                  id={el.id}
                  stars={el.stars}
                  code={el.code}
                  img={require(`../img/${el.id}.jpg`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default CardsCont;
