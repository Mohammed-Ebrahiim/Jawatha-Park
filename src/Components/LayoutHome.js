import React from 'react'
import Slider from './Slider'
import AboutUs from './AboutUs'
import Services from './Services'
import ContactUs from './ContactUs'

// import { useEffect, useState } from 'react';

function LayoutHome() {
  
  return (
    <div>
    
      <Slider />
      <AboutUs />
      <Services />
      <ContactUs />
      
    </div>
  )
}

export default LayoutHome