import React, {useState} from "react";
import './App.css';

import NavBar from "./NavComponents/NavBar";
import SideNav from "./SideNavComponents/SideNav";
import BottomNav from "./NavComponents/BottomNav";
import MenuShowCase from "./MenuShowCase";
import MenuTitle from "./MenuTitle";
import pizzaMenu from "./pizzaMenu";
import papadiaMenu from "./papadiaMenu";
import dessertMenu from "./dessertMenu";
import sidesMenu from "./sidesMenu";
import drinksMenu from "./drinksMenu";

import AboutUs from "./AboutUs";
import Deals from "./Deals";
import ContactInfo from "./ContactInfo";
import Map from "./Map";
import Footer from "./Footer";
import MoreInfo from "./MoreInfo";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import PlaceOrderBtn from "./PlaceOrderBtn";
import CartBanner from "./CartBanner";


//import drinksMenu from "./drinksMenu";

function App() {
  // this is the total amount of all items in cart
  let newAmount = 0;
  let itemNum = 0;

const [showMenu, setShowMenu] = useState(false)
const [menuTitle, setMenuTitle] = useState("PIZZA MENU")
const [currentMenu, setCurrentMenu] = useState(pizzaMenu)
const [currentPage, setCurrentPage] = useState("menu")
const [chosenproduct, setChosenProduct] = useState({img: "", title: "", price: 0})
const [cartList, setCartList] = useState([])

if(showMenu === true){
  const body = document.body.style="overflow-y: hidden";
}else{
  // do nothing
}

function setPage(page){
  if(page === "MENU"){
    setCurrentPage("menu")
  }else if(page === "ABOUT"){
    setCurrentPage("about")
  }else if(page === "CART"){
    setCurrentPage("cart")
  }else if(page === "PRODUCT"){
    setCurrentPage("product")
  }

}


function sideMenuClicked(){

  if(showMenu === false){
    setShowMenu(true);
    
  }else if(showMenu === true){
    setShowMenu(false)
      
  }
}

function newMenuChosen(menu){
  if(menu === "PIZZA" || menu === "Pizza's"){
    setCurrentMenu(pizzaMenu);
    setMenuTitle("PIZZA MENU")
    setCurrentPage("menu")
  }else if(menu === "PAPADIAS" || menu === "Papadia's"){
    setCurrentMenu(papadiaMenu);
    setMenuTitle("PAPADIAS MENU")
    setCurrentPage("menu")
  }else if(menu === "DESSERTS" || menu ===  "Desserts"){
    setCurrentMenu(dessertMenu);
    setMenuTitle("DESSERT MENU")
    setCurrentPage("menu")
  }else if(menu === "SIDES" || menu === "Side's"){
    setCurrentMenu(sidesMenu);
    setMenuTitle("SIDES MENU")
    setCurrentPage("menu")
  }else if(menu === "DRINKS" || menu === "Drinks"){
    setCurrentMenu(drinksMenu);
    setMenuTitle("BEVERAGE MENU")
    setCurrentPage("menu")
  }
  
}

function newMenuTitle(menu){
  //setMenuTitle()
}



function productInfoRequest(currentProduct){
   setChosenProduct(currentProduct)
   setCurrentPage("product")
}

function addToCart(product){
   const id = Math.floor(Math.random() * 100);
   
   const newObj = {
   img: product.img,
   title: product.title,
   price: product.price,
   id: id
   } 

   setCartList(cartList.concat(newObj))
   
}

function deleteCartItem(num){

  const newList = cartList.filter((item) => item.id !== num);
   setCartList(newList);
}

let n = newAmount.toFixed(2)

if(currentPage === "menu"){

  return (
    <div>
     <NavBar sideMenuClicked={sideMenuClicked} newMenuChosen={newMenuChosen}/>
     <SideNav showMenu={showMenu} newMenuChosen={newMenuChosen} sideMenuClicked={sideMenuClicked} />
     <BottomNav setPage={setPage} />
     <MenuTitle title={menuTitle} />
     <MenuShowCase newMenuTitle={newMenuTitle} menu={currentMenu} topInfoFunc={productInfoRequest}/>
     <Deals />
     <div className="stn">
     <ContactInfo />
     <Map />
     </div>
     <Footer />
    
    </div>
      );
    }else if(currentPage === "about"){

  return (
    <div>
     <NavBar sideMenuClicked={sideMenuClicked} newMenuChosen={newMenuChosen} />
     <SideNav showMenu={showMenu} newMenuChosen={newMenuChosen} sideMenuClicked={sideMenuClicked} />
     <BottomNav setPage={setPage} />
     <AboutUs />
     <div className="etj">
     <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/ndB9HRDWJo5JzNT1xUiXYj9a42Y=/506x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ANSADPFZAYI6PI7MVN5DCE5XF4.jpg" alt="pizza-staff"/>
     </div>
     <div className="stn">
     <ContactInfo />
     <Map />
     </div>
     <Footer />
    </div>
      );

    }else if(currentPage === "cart"){
      if(cartList.length === 0){
        return(
          <div>
          <NavBar sideMenuClicked={sideMenuClicked} newMenuChosen={newMenuChosen}/>
          <SideNav showMenu={showMenu} newMenuChosen={newMenuChosen} sideMenuClicked={sideMenuClicked} />
          { 
          // function adds amount total and item position in array
          cartList.forEach(function(item){
               newAmount = newAmount+ item.price;
             
            })}
          <BottomNav setPage={setPage} />
           <CartBanner />
          <EmptyCart />
          <div className="total-div">
            <h1>Total Amount $  {n}</h1>
          </div>
          <PlaceOrderBtn />
          <div className="body-blank">
          </div>
   
          <Footer />
         </div>

        )
      }else{
        return (
          <div>
           <NavBar sideMenuClicked={sideMenuClicked} newMenuChosen={newMenuChosen}/>
           <SideNav showMenu={showMenu} newMenuChosen={newMenuChosen} sideMenuClicked={sideMenuClicked} />
           { 
           // function adds amount total and item position in array
           cartList.forEach(function(item){
                newAmount = newAmount+ item.price;
              
             })}
           <BottomNav setPage={setPage} />
  
           {cartList.map(function(item){
             return (
              <CartList deleteFunc={deleteCartItem}  cartArray={item} />
             )
           })}

           <div className="total-div">
             <h1>Total Amount $  {newAmount}</h1>
           </div>
           <PlaceOrderBtn />
           <div className="body-blank">
           </div>
    
           <Footer />
          </div>
            );

      }
         

    }else if(currentPage === "product"){
      return (
        <div>
         <NavBar sideMenuClicked={sideMenuClicked} newMenuChosen={newMenuChosen}/>
         <SideNav showMenu={showMenu} newMenuChosen={newMenuChosen} sideMenuClicked={sideMenuClicked} />
         <BottomNav setPage={setPage} />
         <MoreInfo info={chosenproduct} cartFunc={addToCart} />
         <Deals />
         <div className="stn">
         <ContactInfo />
         <Map />
         </div>
         <Footer />
        </div>
          );

    }

}


export default App;


// 1# show a list of products that have be added to cart in cart section

