import React from 'react'
import Hero from '../component/hero/Hero'
import Benefits from '../component/cards/benefits/Benefits'
import SellingProcess from '../component/cards/selling/SellingProcess'
// import Navbar from '../component/navbar/Navbar'

function Home () {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Benefits/>
      <SellingProcess/>
    </div>
  )
}   

export default Home
