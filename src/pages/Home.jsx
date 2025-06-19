import React from 'react'
import Hero from '../component/hero/Hero'
import Benefits from '../component/cards/benefits/Benefits'
import SellingProcess from '../component/cards/selling/SellingProcess'
import CitySlider from '../component/cards/citycards/CitySlider'
import FeaturedCars from '../component/cards/featuredcars/FeaturedCars'
import BodyType from '../component/cards/bodytype/BodyType'
import Brands from '../component/cards/brands/Brands'
// import Navbar from '../component/navbar/Navbar'

function Home () {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Benefits/>
      <FeaturedCars/>
      <BodyType/>
      <Brands/>
      <SellingProcess/>
      <CitySlider/>z
    </div>
  )
}   

export default Home
