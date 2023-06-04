import React from 'react'
import EventsSlider from './EventsSlider'
import EventsContent from './EventsContent.js'
import EventsContent2 from './EventsContent2.js'
import './Css/slider_style.css'

function LayoutEvents() {
  return (
    <div className='mb-5'>
      <EventsSlider />
      <EventsContent />
      <EventsContent2 />
    </div>
  )
}

export default LayoutEvents