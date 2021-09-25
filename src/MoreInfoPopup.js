import React, {useState} from "react";
import "./MoreInfoPopup.css";







function MoreInfoPopup(props){

    const [errorLight, setErrorLight] = useState(props.errorLight);
   
   function handleClose(){
       props.closeFunc()
   }

    return(props.trigger) ?(
            <div className={errorLight ? "error-empty" : "popup-inner" }>
                {props.children}
                <h4 className="close-btn"  onClick={handleClose} >close</h4>
            </div>
     ) : "";
}


export default MoreInfoPopup;