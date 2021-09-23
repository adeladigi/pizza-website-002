import React from "react";
import "./EmptyCart.css";
import { FaDollyFlatbed } from "react-icons/fa";



function EmptyCart(){
    return(
        <div className="empty-container">
            <FaDollyFlatbed id="cart-icon"/>
            <h2>Your Cart is Empty</h2>
        </div>
    )
}

export default EmptyCart;