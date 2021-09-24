import React, {useState} from "react";
import "./MoreInfo.css"
import MoreInfoPopup from "./MoreInfoPopup";

function MoreInfo(props){

    const [greenLight, setGreenLight] = useState(false);

    function cartBtn(){
       props.cartFunc(props.info)
       setGreenLight(true)
    }

    function handelLightClick(){
        setGreenLight(true)
    }

    function handleClose(){
        setGreenLight(false)
    }


    return(
        <div className="product-container">

         <div className="img-div">
         <img className="img-chosen" src={props.info.img} ></img>
         </div>

         <div className="info-22-div">
         <h3 id="title-32">{props.info.title}</h3>
         <h3>$ {props.info.price}</h3>
         <h4 onClick={cartBtn}  type="button" class="btn btn-danger btn-sm" >Add to Cart</h4>
         </div>

         <MoreInfoPopup trigger={greenLight} closeFunc={handleClose}>
             <h3>Item has be added to cart !</h3>
         </MoreInfoPopup>
          
        </div>
    )
}

export default MoreInfo;