
import React, { useState, useEffect, useContext } from "react";
import Orders from './Orders'
import DishList from './DishList'
import RestaurantSearchBar from "./RestaurantSearchBar";
import SideBar from "./SideBar";
import LoadingScreen from "./LoadingScreen";
import OrderList from "./OrderList";

function DishPage ({ address, AddressForm, addressChange, onAddressChange, handleAddressSubmit, confirmedAddress, unknownAddress, handleClick, subtotal, setSubtotal, deliveryFee, setDeliveryFee, total, setTotal, handleOrderSubmit}) {
    const warningText = <p className="warning-text">the cart is empty</p>
    const [restaurant, setRestaurant] = useState(null);
    const [header, setHeader] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    
   

    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${window.location.href.split(/\//)[5]}/dishes`)
        .then((r) => r.json())
      .then((restaurant) => setRestaurant(restaurant));
  }, []);
console.log(window.location.href.substring(-7))





  if (!restaurant) return <LoadingScreen />;
// REWRITE FILTER METHOD HERE


  return (
    <div className="restaurant-page">
      <SideBar />
      <div className="main-column">
        <div className="restaurant-header">
          <span role="img">
            <a href="/">            
                <img className="delivery-picture" src="https://cdn-icons-png.flaticon.com/512/1048/1048329.png"></img>
            </a>
          </span>
          <h1 className="restaurant-header">Uber Eats</h1>
          </div>
        <DishList restaurants={restaurant}/>
      </div>
    </div>
  );
}


export default DishPage;