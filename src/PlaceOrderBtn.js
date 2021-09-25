import React, {useState} from "react";
import "./PlaceOrderBtn.css";

function PlaceOrderBtn(props){

   

   function handleOrder(){
   
       if(props.itemList === undefined){
           // do nothing
           const resObj = {
               list: [],
               res: "You have no items in your Cart."
           }
           
           props.emptyFunc(resObj)

       }else{

        const resObj = {
            list: [],
            res: "your purchase was successful!"
        }
       
        props.emptyFunc(resObj)
        
       }
   }


    return(
       <div className="place-order-container">
        <div className="place-order-btn">
          <h3 onClick={handleOrder}>Place this Order</h3>
        </div>
       </div> 
      
    )
}

export default PlaceOrderBtn;