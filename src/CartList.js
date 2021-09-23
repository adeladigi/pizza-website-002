import React from "react";
import "./CartList.css";




function CartList (props){

  
    function handleDelete(){
       props.deleteFunc(props.cartArray.id)
    }

    return(
        <div>
         <div className="list-container" >
            <div className="list-img-div" >
              <img src={props.cartArray.img} />
            </div>

            <div className="list-info-div" >
              <h3>{props.cartArray.title}</h3> <h3>$ {props.cartArray.price}</h3>  
            </div>  
         </div>
         <div className="list-delet-btn">
             <h4 onClick={handleDelete}>Delete</h4>
         </div>
        </div>
    )
}

export default CartList;