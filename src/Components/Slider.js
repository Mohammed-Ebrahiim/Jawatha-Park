
import './Css/slider_style.css'
import React from 'react'
// import logo from '../assets/imgs/logo/logo2.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Slider() {

  return (
    <div>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item carousel-image active">
            <LazyLoadImage
              className="card-img-top store-img"
              alt=" jawatha lake"
              effect="black-and-white"
              src="https://ucarecdn.com/faeef5da-38e0-4cd0-b5d7-6c9dba20e042/"
            />
            <LazyLoadImage 
              className='jawatha_logo'
              src= "https://ucarecdn.com/590a5380-caf5-4b47-bea5-387556fb845a/"
              effect="black-and-white"
              alt="Jawatha Logo"
              width={"150px"}                
            />
        
          </div>

          
          {/* <div className="carousel-item carousel-image bg-img-2">
            <div className="container">
              <div className="row gy-4 d-flex justify-content-between">
                <div className="col-lg-9 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h2 className="fw-bold fs-1" data-aos="fade-up">
                  
                  </h2>
                </div>
                <div className="col-lg-2 order-1 jawatha_logo" data-aos="zoom-in">
                  <img src={logo} alt="jawatha_logo" width="150px" />
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

    </div>
  )
}

export default Slider