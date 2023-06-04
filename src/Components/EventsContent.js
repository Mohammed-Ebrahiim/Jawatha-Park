// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "../Components/Css/styles.css";

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper";

// import racing1 from '../assets/imgs/Eventss/WhatsApp Image 2023-05-12 at 3.31.41 PM.jpeg'
// import racing2 from '../assets/imgs/Eventss/racing (2).jpeg'
// import event1 from '../assets/imgs/Eventss/WhatsApp Image 2023-05-12 at 10.00.18 PM.jpeg'
// import event2 from '../assets/imgs/Eventss/WhatsApp Image 2023-05-12 at 10.15.20 PM (1).jpeg'
// import event3 from '../assets/imgs/Eventss/WhatsApp Image 2023-05-08 at 4.35.50 PM (2).jpeg'
// import event4 from '../assets/imgs/Eventss/WhatsApp Image 2023-05-12 at 10.15.17 PM.jpeg'
// import event5 from '../assets/imgs/Eventss/EidEvent.jpg'
// import flowers from '../assets/imgs/Eventss/flowers.jpeg'
// import waterEvent from '../assets/imgs/Eventss/water1.jpeg'


export default function EventsContent() {

  return (
    <>
      <div className="my-5"></div>
      <div className="container">
        <div className="row">
          <div className="section-header w-100 mx-auto">
            <h2 className="text-center fs-special p-2"> فعاليات جواثا السياحية </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="">معرض الصور</h2>
          </div>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide className="2023" data-item="2023">
          <div className="card h-100">
            <LazyLoadImage
              className="h-90"
              alt="يوميات الأكوا بارك "
              // effect="black-and-white"
              src="https://ucarecdn.com/71eccbfa-f161-469a-8a57-7a3180fe922f/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary text-primary"> يوميات الأكوا بارك  </h5>
              <p className="card-text">
                <small className="text-muted">
                  20 مايو 2023
                </small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="2023" data-item="2023">
          <div className="card h-100">
            <LazyLoadImage
              className="h-90"
              alt="يوميات الأكوا بارك "
              // effect="blur"
              src="https://ucarecdn.com/a866a9f2-d70a-4d7d-910d-80b1e25f1e1a/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary text-primary">يوميات الأكوا بارك  </h5>
              <p className="card-text"> 
                <small className="text-muted">
                  12 مايو 2023
                </small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="2022" data-item="2022">
        
          <div className="card h-100">
            <LazyLoadImage
              className=" h-90"
              alt="يوميات الأكوا بارك "
              // effect="blur"
              src="https://ucarecdn.com/ff1d9cad-8fdb-4ce5-90e4-55b16780ddb7/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary text-primary">فعالية سباق الدراجات  </h5>
              <p className="card-text"> 
                <small className="text-muted">
                6 مايو 2023
                </small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="2022" data-item="2022">
        
          <div className="card h-100" >
            <LazyLoadImage
              className="h-90"
              alt="يوميات  سباق الدراجات  "
              // effect="blur"
              src="https://ucarecdn.com/2a5014f5-69dc-487a-a0c1-b4b1e7953ef0/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary text-primary">فعالية سباق الدراجات  </h5>
              <p className="card-text"> 
                <small className="text-muted">
                6 مايو 2023
                </small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="2022" data-item="2022">
        
          <div className="card h-100" >
            <LazyLoadImage
              className="h-90"
              alt="فعالية أكبر طبق كبسه حساوية "
              // effect="blur"
              src="https://ucarecdn.com/dcfa1577-1381-4344-870d-fe7205baf566/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary text-primary">فعالية أكبر طبق كبسه حساوية </h5>
              <p className="card-text"> 
                <small className="text-muted">
                  7 أبريل 2023
                </small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="2022" data-item="2022">
        
          <div className="card h-100"> 
            <LazyLoadImage
              className="h-90"
              alt="فعالية أكبر طبق كبسه حساوية "
              // effect="blur"
              src="https://ucarecdn.com/d9e6b47f-e5cd-473a-bea2-55c31338154c/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary text-primary">أكبر كبسة حساوية مع جسوم </h5>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="2022" data-item="2022">
        
          <div className="card h-100"> 
            <LazyLoadImage
              className="h-90"
              alt="الرجل العملاق والتنوره"
              // effect="blur"
              src="https://ucarecdn.com/1dfca2de-220f-4eca-9ce9-a43ebbb7325d/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary text-primary">الرجل العملاق والتنوره</h5>
            
              <small className="text-muted">
              23 أبريل 2023
                </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="2022" data-item="2022">
        
          <div className="card h-100"> 
            <LazyLoadImage
              className="h-90"
              alt="الرجل العملاق والتنوره"
              // effect="blur"
              src="https://ucarecdn.com/b44c13ee-fd82-4662-be6a-b2c120566240/"
            />
            
            <div className="card-body">
              <h5 className="card-title text-primary text-primary">الرجل العملاق والتنوره</h5>
            
              <small className="text-muted">
              23 أبريل 2023
                </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="2022" data-item="2022">
        
          <div className="card h-100">
            <LazyLoadImage
              className="h-90"
              alt="  كرنفال الزهور"
              // effect="blur"
              src="https://ucarecdn.com/0024a7d9-5f22-4257-844f-a4cef0763129/"
            />
            <div className="card-body">
              <h5 className="card-title text-primary">  كرنفال الزهور (4)</h5>
              <small className="text-muted">
                16 يناير 2023
              </small>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
  );
}
