import React from "react";

import "./MenuShowCase.css";
import Card from "./Card";




function MenuShowCase(props){
   
   function sendProductInfo(chosenProduct){

      const chosenItem = {
         img: chosenProduct.img,
         title: chosenProduct.title,
         price: chosenProduct.price
      }
      props.topInfoFunc(chosenItem)
      
   }


   return(
       <div className="showcase-div">
            
            {props.menu.map(function(item){
           return (
             <Card img={item.img} title={item.title} price={item.price} sendInfoFunc={sendProductInfo}/>
           )
        })} 

       </div>
    
   )
}



export default MenuShowCase;