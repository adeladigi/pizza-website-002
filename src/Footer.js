import React from "react";
import "./Footer.css";





function Footer(){


let currentYear = new Date().getFullYear();


    return(
        <div className="footer-div">

            <div className="footer-links">

                <div className="help-box">
                   <h4>Help</h4>
                   <p>Customer Service</p>
                   <p>Ordering</p>
                   <p>Gift Cards</p>
                   <p>Store List</p>
                </div>

                <div className="links-box">
                <a href="#">Accessibility</a>
                <a href="#">Guarantee Policy</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
                </div>

            </div>

            <div className="social-icon">
            <i class="fab fa-facebook-f"></i>
             <i class="fab fa-instagram"></i>
             <i class="fab fa-twitter"></i>
            </div>

            <div className="copyright-div">
              <p>@copyright {currentYear}</p>
            </div>
        </div>
    )
}


export default Footer;