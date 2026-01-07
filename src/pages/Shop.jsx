import React from 'react'
import Hero from '../component/Hero'
import "../component/Hero.css"
import Popular from '../component/popular/Popular'
import Offer from '../component/Offer/Offer'
import Newcollection from '../component/Newcollection/Newcollection'
import Newsletter from '../component/Newsletter/Newsletter'




function Shop() {
  return (
    <div>
     <Hero/>
     <Popular/>
     <Offer/>
     <Newcollection/>
     <Newsletter/>
    
    </div>
  )
}

export default Shop
