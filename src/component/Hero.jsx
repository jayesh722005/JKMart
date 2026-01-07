import React from "react";
import hand from "../assets/hand.png";
import arrow_icon from '../assets/arrow_icon.png'
import men from "../assets/men.png";
// import "../Hero/Hero.css"
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals! Best Prices!</h2>
        <div className="hand-icon">
          <h1>New</h1>
           <img src={hand} alt="" id="hand" />
        </div>
       
        <h1>Collections</h1>
        <h1>For Everyone</h1>
        <div className="hero-latest-btn">
         <h2>Latest collection</h2>
          <img src={arrow_icon} alt="" id="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <img src={men} alt=""  id="men"/>
      </div>
    </div>
  );
}

export default Hero;
