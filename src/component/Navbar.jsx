import React, { useContext, useState } from 'react'
import "../component/Navbar.css"
import logo from '../assets/logo.png'
import { FaCartPlus } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Datacontext } from '../context/Shopcontext'
function Navbar() {
  const [menu,setmenu]=useState('home')
  const {gettotalcarditem}=useContext(Datacontext)
  return (
    <div className='nav'>
      <div className="nav-logo">
        <img src={logo} alt=""  />
        <h1>JKmart</h1>
      </div>
      <ul>
        <li ><Link to="/" className={menu==="Home"?"across":""} onClick={()=>setmenu("Home")} >Home</Link></li>
        <li><Link to="/Mens" className={menu==="Men"?"across":""} onClick={()=>setmenu("Men")}>Men</Link></li>
        <li><Link to="/Women" className={menu==="Women"?"across":""} onClick={()=>setmenu("Women")}>Women</Link></li>
        <li><Link to="/kid" className={menu==="Kid"?"across":""} onClick={()=>setmenu("Kid")}>Kid</Link></li>
      </ul>
      <div className="login-cart">
    <Link to="/login" className="login-btn" onClick={()=>setmenu("")}>Login</Link>
        <Link to="/Cart"><FaCartPlus fontSize={35} className='icon' onClick={()=>setmenu("")}/></Link>
        <div className="nav-cart-count">
          {gettotalcarditem()}
        </div>
      </div>
    </div>
  )
}

export default Navbar
