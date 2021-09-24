import React from "react";
import "./MoreInfoPopup.css";







function MoreInfoPopup(props){
   
   function handleClose(){
       props.closeFunc()
   }

    return(props.trigger) ?(
            <div className="popup-inner">
                {props.children}
                <h4 className="close-btn"  onClick={handleClose} >close</h4>
            </div>
     ) : "";
}


export default MoreInfoPopup;