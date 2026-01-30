import React from 'react'
import './Newsletter.css'
function Newsletter() {
  return (
    <div className="newsletter">
        <h1>Get Exclusive offer on Your Email</h1>
        <p>Subscribe to our newsletter and stay update</p>
        <div>
            <input type="enail" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
