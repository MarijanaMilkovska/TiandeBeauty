import React from "react";
import Button from 'react-bootstrap/Button'

const Filters = ({handleFilter, handleAll}) => {
    let buttonsLabel = [
        "Коса",
        "Лице",
        "Тело",
        "Женско здравје",
        "Декоратива",
        "Парфеми",
        "Еко производи",
        "Чаеви и додатоци",
        "Додатоци",
        "Суплементи"
      ];
  return (
    <div className="Filters">
    <Button variant="outline-warning" onClick={()=> handleAll()}>Сите</Button>{' '}
        {buttonsLabel.map(button => 
         <Button variant="outline-warning" onClick={() => handleFilter(button)}>{button}</Button>
            
            )}
         

    </div>
  );
};

export default Filters;
