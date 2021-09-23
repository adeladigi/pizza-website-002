import React from "react";
import "./MoreInfo.css"


function MoreInfo(props){

    function cartBtn(){
       props.cartFunc(props.info)
    }


    return(
        <div className="product-container">

         <div className="img-div">
         <img className="img-chosen" src={props.info.img} ></img>
         </div>

         <div className="info-22-div">
         <h3 id="title-32">{props.info.title}</h3>
         <h3>$ {props.info.price}</h3>
         <h4 onClick={cartBtn}  type="button" class="btn btn-danger btn-sm">Add to Cart</h4>
         </div>
          
        </div>
    )
}

export default MoreInfo;