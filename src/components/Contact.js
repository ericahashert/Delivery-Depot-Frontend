import React from "react"; 
import NavBar from "./NavBar";

function Contact (){
    return(
        <div className="contact-page">
            <NavBar/>
            <h1 className="head">Contact us!</h1>
            <p className = "about-bio">Contact our customer service for problems with orders via email or phone</p>
            <ul className ="contact">
                <li className="phone-number"> Phone: +1 (145)-353-0004</li>
                <li className="email-contact"> Email: delivery.depot@gmail.com</li>
            </ul>

        </div>
    )
}
export default Contact;
