import React, {useState} from "react";
import "./SideNav.css";
import { FaTimes } from "react-icons/fa";



function SideNav(props){
const [menu, setMenu] = useState("PIZZA"); 

function windowHeight(){
    const { innerWidth: width, innerHeight: height} = window;
    //console.log(height);
    return {
      width,
      height
    };
}

function exitSideMenu(){
    props.sideMenuClicked()
}

function selectedMenu(event){
    const newMenu = event.target.innerText;
    setMenu(newMenu)
    props.newMenuChosen(newMenu);
}

let menuHeight = windowHeight();

    return(
        <div className="side-nav-container" style={{display: props.showMenu === true ? "" : "none"}}>
            <div className="side-nav"style={{height: props.showMenu === true ? (menuHeight.height) + "px" : "0px", width: props.showMenu === true ? "250px" : "0px"}} >
            <div className="box-exit-div">
            <FaTimes onClick={exitSideMenu} class="fas fa-times"></FaTimes>
            </div>   
            <h3 className={menu === "PIZZA" ? "current-menu" : ""} onClick={selectedMenu} >PIZZA</h3>
            <h3 className={menu === "PAPADIAS" ? "current-menu" : ""} value="papadias" onClick={selectedMenu} >PAPADIAS</h3>
            <h3 className={menu === "SIDES" ? "current-menu" : ""} value="sides" onClick={selectedMenu} >SIDES</h3>
            <h3 className={menu === "DESSERTS" ? "current-menu" : ""} value="desserts" onClick={selectedMenu} >DESSERTS</h3>
            <h3 className={menu === "DRINKS" ? "current-menu" : ""} value="drinks" onClick={selectedMenu} >DRINKS</h3>
            </div>  
        </div>
    )
}

export default SideNav;

