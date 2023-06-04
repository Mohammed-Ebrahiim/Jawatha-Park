import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Components/Css/EventsSlider.css";
// import slider1 from "../assets/imgs/Eventss/slider/slider1_50.png";
// import slider2 from '../assets/imgs/Eventss/slider/slider2_50.png'
// import slider3 from "../assets/imgs/Eventss/slider/slider3_50.png";
// import slider4 from '../assets/imgs/Eventss/slider/slider1.jpg'
// import slider5 from '../assets/imgs/Eventss/slider/slider2.jpg'
// import slider6 from '../assets/imgs/Eventss/slider/slider3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        
      >
        <SwiperSlide className="SwiperSlide">
          {/* <img src={slider1} alt="slide one" /> */}
          <LazyLoadImage
            className="card-img-top store-img"
            alt="فعاليات أكوا بارك "
            effect="blur"
            src="https://ucarecdn.com/5a204b51-6073-4008-8acf-e984b301bfd4/"
          />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <LazyLoadImage
            className="card-img-top store-img"
            alt="فعاليات مائيه "
            effect="blur"
            src="https://ucarecdn.com/e82819ff-63b9-46f6-bee7-a7102e69bed0/"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
