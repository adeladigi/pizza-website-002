import React from "react";
import "./MenuTitle.css";



function MenuTitle(props){
 
  

    return(
        <div className="menu-title">
          <h1>{props.title}</h1>
        </div>
    )
}

export default MenuTitle;