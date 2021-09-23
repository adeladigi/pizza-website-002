import React from "react";
import "./Card.css";


function Card(props){


  function infoRequest(){
    
    props.sendInfoFunc(props);
  }
    
    return(
        <div className="card-menu">

        <img src={props.img} alt="">
        </img>

        <div className="info-div">
          <h3>{props.title}</h3> 
          <h4 onClick={infoRequest} type="button" class="btn btn-dark btn-sm">Details</h4>
        </div>
      </div>
    )
}

export default Card;