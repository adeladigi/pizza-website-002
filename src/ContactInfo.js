import React from "react";

import "./ContactInfo.css";




function ContactInfo(){
    return(
        <div className="contact-div">

           <div className="contact-box">
             <div className="banner-div">
                <h3>Contact Us</h3>
             </div>  

             <div className="location-div">
                 <h3> Phone: (917)-344-6758</h3>
                 <h3> Location:  1037 Yonkers Ave, Yonkers, NY 10704</h3>
             </div>
              

           </div>
            
        </div>
    )
}


export default ContactInfo;