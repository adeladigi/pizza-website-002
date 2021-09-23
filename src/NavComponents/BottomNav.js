import React, {useState} from "react"
import "./BottomNav.css";


function BottomNav(props){

const [currentPage, setCurrentPage] = useState("MENU");

function handlePage(event){
 const button = event.target.innerText;
 setCurrentPage(button)
 props.setPage(button)
}

  return(
      <div className="bottom-nav">
        <h3 className={currentPage === "MENU" ? "current-page" : ""} onClick={handlePage} >MENU</h3>
        <h3 className={currentPage === "ABOUT" ? "current-page" : ""} onClick={handlePage} >ABOUT</h3>
        <h3 className={currentPage === "CART" ? "current-page" : ""} onClick={handlePage} >CART <i class="fas fa-shopping-cart"></i></h3>
      </div>
    )
}


export default BottomNav;