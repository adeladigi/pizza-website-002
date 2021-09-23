import React, {useState} from "react";
import './Deals.css';

import imgData from "./imgData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"



function Deals() {

  const [ current, setCurrent] = useState(0);
  const length = imgData.length;

  function prevSlide(){
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  
  console.log(current)

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }


  return (
    <div className="App">
      <div className="deal-log">
          <h3>FEATURED</h3> 
          <h3>SPECIALS</h3>
      </div>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <div className="slide-show">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
       {imgData.map((slide, index) => {
         return(
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <img className="img" src={slide.img} />}
            {index === current && <div className="deal-info-box"> <h3>{slide.title}</h3> <p>{slide.info}</p> <h4>{slide.price}</h4></div> }
            
          </div> 
         )
       })}
           
     
      </div>
    </div>
  );
}

export default Deals;