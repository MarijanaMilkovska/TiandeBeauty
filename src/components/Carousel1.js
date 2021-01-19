import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from './carousel1.jpg';
import Carousel2 from './carousel2.jpg';
import Carousel3 from './carousel3.png';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
     <div className="caro container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
    <Button type="submit" className="buttomNaracaj" variant="light" block>

      <Link to='/naracaj' >НАРАЧАЈ ГО ВЕДНАШ ТВОЈОТ ОМИЛЕН ПРОИЗВОД</Link>
      </Button>
  <br></br>
  <br></br>
     </div>
    );
  }
  
export default ControlledCarousel;