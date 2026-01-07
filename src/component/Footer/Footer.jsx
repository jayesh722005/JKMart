import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import whatsapp from '../../assets/whatsapp.png'
function Footer() {
  return (
   <div className="footer">
    <div className="footer-logo">
        <img src={logo} alt="" />
        <p>JKmart</p>
    </div>
    <ul className='footer-link' >
        <li>About</li>
        <li>Product</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={facebook} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2026 - All Right Reserved </p>
    </div>
   </div>
  )
}

export default Footer
