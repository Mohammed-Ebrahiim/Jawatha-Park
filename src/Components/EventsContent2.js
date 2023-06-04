// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Css/EventsContentStyle.css";

// import racing3 from '../assets/imgs/Eventss/WhatsApp Image 2023-05-12 at 3.31.41 PM.jpeg'
// import aidEvent from '../assets/imgs/Eventss/EidEvent.jpg'
// import waterEvent from '../assets/imgs/Eventss/waterEvent.jpg'
// import eating from '../assets/imgs/Eventss/WhatsApp Image 2023-05-12 at 10.15.20 PM (1).jpeg'
// import flowers from '../assets/imgs/Eventss/flowers.jpeg'
// import jawathaTalent from '../assets/imgs/Eventss/jawathaTalents.JPG'
// import buildingDay from '../assets/imgs/Eventss/buid.jpeg'
// import FlyDay from '../assets/imgs/Eventss/AM0I9657-min.jpg'

// import flowers3 from '../assets/imgs/Eventss/flowers3.jpg'
// import Highking from '../assets/imgs/Eventss/Highking.jpg'
// import jawathaEid from '../assets/imgs/Eventss/jawathaEid.jpg'
// import safari from '../assets/imgs/Eventss/safari.jpg'
// import walking from '../assets/imgs/Eventss/Walking.jpeg'
// import smallGoat from '../assets/imgs/Eventss/goat.jpg'
// import ChildDay from '../assets/imgs/Eventss/child.JPG'
// import buildingDay2 from '../assets/imgs/Eventss/building.jpeg'

// import flower2 from '../assets/imgs/Eventss/Events2021/flower2.jpg'
// import teeth from '../assets/imgs/Eventss/Events2021/teeth.jpeg'
// import grandfather from '../assets/imgs/Eventss/Events2021/grandfather.jpeg'
// import fishing from '../assets/imgs/Eventss/Events2021/fishing.jpeg'
// import countryDay from '../assets/imgs/Eventss/Events2021/countryDay.jpeg'
// import market from '../assets/imgs/Eventss/Events2021/market.jpeg'
// import birds from '../assets/imgs/Eventss/Events2021/birds.jpeg'

// import fourbyfour from '../assets/imgs/Eventss/Events2020/fourbyfour.jpeg'
// import tree from '../assets/imgs/Eventss/Events2020/tree.jpeg'
// import patient1 from '../assets/imgs/Eventss/Events2020/patient1.jpeg'
// import patient2 from '../assets/imgs/Eventss/Events2020/patient2.jpeg'
// import paint from '../assets/imgs/Eventss/Events2020/paint.jpeg'
// import rallyJawatha from '../assets/imgs/Eventss/Events2020/rallyJawatha.jpeg'

// import tree2 from '../assets/imgs/Eventss/Events2019/tree2.jpeg'
// import EidPark from '../assets/imgs/Eventss/Events2019/EidPark.jpeg'
// import countryDay89 from '../assets/imgs/Eventss/Events2019/countryDay89.jpeg'
// import health from '../assets/imgs/Eventss/Events2019/health.jpeg'
// import jawathaNights from '../assets/imgs/Eventss/Events2019/jawathaNights.jpeg'
// import yesICan from '../assets/imgs/Eventss/Events2019/yesICan.jpeg'
// import sprinting from '../assets/imgs/Eventss/Events2019/sprinting.jpeg'
// import Autism from '../assets/imgs/Eventss/Events2019/Autism.jpeg'

// import SprintHasa from '../assets/imgs/Eventss/Events2018/SprintHasa.jpeg'
// import countryFly from '../assets/imgs/Eventss/Events2018/countryFly.jpeg'
// import jawathaPink from '../assets/imgs/Eventss/Events2018/jawathaPink.jpeg'
// import safari2 from '../assets/imgs/Eventss/Events2018/safari.jpeg'
// import img1 from '../assets/imgs/Eventss/Events2018/img1.jpeg'
// import disability from '../assets/imgs/Eventss/Events2018/disability.jpeg'


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >

        {/* 2023 Events */}
        <SwiperSlide className="CardContainerSlide">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-white pb-3">فعاليتنا هذا العام </h2>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    // effect="black-and-white"
                    src="https://ucarecdn.com/144d9c76-9b21-42c7-83f6-f6e9b529df39/"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> فعالية الأنشطة المائية</h5>
                    <p className="card-text">
                      <span className="text-muted">13,12 مايو 2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  {/* <img src={racing3} className="card-img-top img-fluid" alt="..wwww." /> */}
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    // effect="black-and-white"
                    src="https://ucarecdn.com/b071d1c8-fa56-46c2-9402-7fabf2fd0fa4/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">لنركض معاً</h5>
                    <p className="card-text">
                      <span className="text-muted">6 مايو 2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  {/* <img src={eating} className="card-img-top img-fluid" alt="أكبر طبق كبسة حساوى " /> */}
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    // effect="black-and-white"
                    src="https://ucarecdn.com/37bef5b4-f393-4274-ba85-db98f5962c6d/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">  أكبر طبق كبسة حساوى </h5>
                    <p className="card-text">
                      <span className="text-muted">28 أبريل 2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  {/* <img src={aidEvent} className="card-img-top img-fluid" alt="aidEvent" /> */}
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    // effect="black-and-white"
                    src="https://ucarecdn.com/d05949ea-e461-4d7d-ade0-26e669f5f06b/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">عيدنا فرحة </h5>
                    <p className="card-text">
                      <span className="text-muted">23 أبريل  2023</span>
                    </p>
                  
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  {/* <img src={jawathaTalent} className="card-img-top img-fluid" alt="مواهب جواثا " /> */}
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    src="https://ucarecdn.com/9e83a78e-7b3c-41f6-be4d-73a497e70bab/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">مواهب جواثا  </h5>
                    <p className="card-text">
                      <span className="text-muted">2 فبراير 2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    src="https://ucarecdn.com/a7031f17-2de0-424b-86b7-e0cbc5e11c5b/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">يوم التأسيس السعودى</h5>
                    <p className="card-text">
                      <span className="text-muted">22 فبراير 2023</span>
                    </p>
                  
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  {/* <img src={FlyDay} className="card-img-top img-fluid" alt="يوم العلم السعودي " /> */}
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    src="https://ucarecdn.com/c42915c9-9a2c-4325-9b1c-24b1d478b749/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">يوم العلم السعودي  </h5>
                    <p className="card-text">
                      <span className="text-muted">10 مارس 2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  {/* <img src={flowers} className="card-img-top img-fluid" alt="كرنفال الزهور (4) " /> */}
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    src="https://ucarecdn.com/ef8d20ca-19ae-4028-ba9f-f039f36b2945/"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> كرنفال الزهور (4)   </h5>
                    <p className="card-text">
                      <span className="text-muted">16 يناير 2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        

        {/* 2022 Events */}
        {/* <SwiperSlide className="CardContainerSlide">
          <div className="container">
          <div className="row">
              <div className="col-12">
                <h2 className="text-white pb-3">فعاليتنا لعام 2022 </h2>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    src="https://ucarecdn.com/264491ad-5069-4252-a7fd-f4b835c3edfb/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">   كرنفال الزهور (3)</h5>
                    <p className="card-text">
                      <span className="text-muted">5 يناير 2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  <LazyLoadImage
                    className="h-90"
                    alt="يوميات الأكوا بارك "
                    src="https://ucarecdn.com/88810190-c330-4e3b-b81c-b20d4ae05c00/"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> فعالية الهايكنج</h5>
                    <p className="card-text">
                      <span className="text-muted">5 فبراير 2022</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  <LazyLoadImage
                    className="h-90"
                    alt="مهرجان الطفل "
                    src="https://ucarecdn.com/8d653a3b-babd-4543-bd9f-51dc13ad1724/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">  مهرجان الطفل </h5>
                    <p className="card-text">
                      <span className="text-muted">23,22 فبراير 2022</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-90">
                  <LazyLoadImage
                    className="h-90"
                    alt="مهرجان يوم التأسيس "
                    src="https://ucarecdn.com/21e6f8db-faf9-4298-84fc-90827f8bffc2/"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> مهرجان يوم التأسيس  </h5>
                    <p className="card-text">
                      <span className="text-muted">24,23 فبراير 2022</span>
                    </p>
                  
                  </div>
                </div>
              </div>
              
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-90"
                    alt="مهرجان سفارى "
                    src="https://ucarecdn.com/42095725-ed3f-447d-b639-e1a1543711a7/"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> مهرجان سفارى (3)  </h5>
                    <p className="card-text">
                      <span className="text-muted">11,..,18 مارس 2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-90"
                    alt=" الماعز القزم "
                    src="https://ucarecdn.com/f9042478-5b12-40cb-a135-eae4344560a5/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">رابطة الماعز القزم   </h5>
                    <p className="card-text">
                      <span className="text-muted">26,25 مارس 2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-90"
                    alt=" برنامج مشاة العدالة "
                    src="https://ucarecdn.com/29544718-95f6-48d6-9e8c-6da2b7fa6473/"
                  />
                
                  <div className="card-body">
                    <h5 className="card-title">  برنامج مشاة العدالة   </h5>
                    <p className="card-text">
                      <span className="text-muted">8,7 نوفمبر 2022  </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-90"
                    alt=" برنامج مشاة العدالة "
                    src="https://ucarecdn.com/94a8811d-0d3f-47df-ba50-65a9fd51e193/"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> عيد جواثا  </h5>
                    <p className="card-text">
                      <span className="text-muted">2 مايو 2022</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}


        {/* 2021 Events */}
        {/* <SwiperSlide className="CardContainerSlide">
          <div className="container">
          <div className="row">
              <div className="col-12">
                <h2 className="text-white pb-3">فعاليتنا لعام 2021 </h2>
              </div>
            </div>
            <div className="row gy-2">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-90 special-dimensions"
                    alt="مهرجان الطفل "
                    src={flower2}
                  />
                  <div className="card-body">
                    <h5 className="card-title">   كرنفال الزهور (2)</h5>
                    <p className="card-text">
                      <span className="text-muted">31 ديسمبر 2021</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-100"
                    alt="مهرجان الطفل "
                    src={teeth}
                  />
                  <div className="card-body">
                    <h5 className="card-title">  معرض الفم والأسنان</h5>
                    <p className="card-text">
                      <span className="text-muted">5,4,3 يونيو 2021  </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-100"
                    alt="مهرجان الطفل "
                    src={birds}
                  />
                  <div className="card-body">
                    <h5 className="card-title">   مبادرة سقيا الطيور </h5>
                    <p className="card-text">
                      <span className="text-muted">3 يوليو 2021</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-100"
                    alt="مهرجان الطفل "
                    src={fishing}
                  />
                  <div className="card-body">
                    <h5 className="card-title">   متعة الصيد   </h5>
                    <p className="card-text">
                      <span className="text-muted">10 أغسطس 2021</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-100"
                    alt="مهرجان الطفل "
                    src={flower2}
                  />
                  <div className="card-body">
                    <h5 className="card-title">  اليوم الوطنى (91)  </h5>
                    <p className="card-text">
                      <span className="text-muted">5,4,3 يونيو 2021  </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-100"
                    alt="مهرجان الطفل "
                    src={market}
                  />
                  <div className="card-body">
                    <h5 className="card-title">  سوق الدار   </h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-100"
                    alt="مهرجان الطفل "
                    src={grandfather}
                  />
                  <div className="card-body">
                    <h5 className="card-title">    بركتنا للكبار بالسن   </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        

        {/* 2020 Events */}
        {/* <SwiperSlide className="CardContainerSlide">
          <div className="container">
          <div className="row">
              <div className="col-12">
                <h2 className="text-white pb-3">فعاليتنا لعام 2020 </h2>
              </div>
            </div>
            <div className="row gy-2">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <LazyLoadImage
                    className="h-100"
                    alt="مهرجان الطفل "
                    src={fourbyfour}
                  />
                  <div className="card-body">
                    <h5 className="card-title">   كرنفال الزهور </h5>
                    
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={fourbyfour} className="card-img-top img-fluid" alt="..wwww." />
                  <div className="card-body">
                    <h5 className="card-title">  تحديات الدفع الرباعي</h5>
                    
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={tree} className="card-img-top img-fluid" alt="التشجير" />
                  <div className="card-body">
                    <h5 className="card-title">   مبادرة التشجير </h5>
                  
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={safari} className="card-img-top img-fluid" alt="aidEvent" />
                  <div className="card-body">
                    <h5 className="card-title">  مهرجان سفاري 2  </h5>
                    
                  
                  </div>
                </div>
              </div>
              
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={paint} className="card-img-top img-fluid" alt="رحلة الرسم في الهواء الطلق " />
                  <div className="card-body">
                    <h5 className="card-title"> رحلة الرسم في الهواء الطلق </h5>
                
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={patient2} className="card-img-top img-fluid" alt="حملة التوعية بالسرطان " />
                  <div className="card-body">
                    <h5 className="card-title"> حملة التوعية بالسرطان  </h5>
                
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={patient1} className="card-img-top img-fluid" alt="يوم السكر العالمي " />
                  <div className="card-body">
                    <h5 className="card-title">   يوم السكر العالمي  </h5>
              
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={rallyJawatha} className="card-img-top img-fluid" alt="رالي جواثا المالحي " />
                  <div className="card-body">
                    <h5 className="card-title"> رالي جواثا المالحي </h5>
              
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide> */}
        

        {/* 2019 Events */}
        {/* <SwiperSlide className="CardContainerSlide">
          <div className="container">
          <div className="row">
              <div className="col-12">
                <h2 className="text-white pb-3">فعاليتنا لعام 2019 </h2>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={sprinting} className="card-img-top img-fluid" alt="wwww" />
                  <div className="card-body">
                    <h5 className="card-title">    الحسا تركض </h5>
                    
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={tree2} className="card-img-top img-fluid" alt="..wwww." />
                  <div className="card-body">
                    <h5 className="card-title">    مبادرة التشجير</h5>
                    
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={yesICan} className="card-img-top img-fluid" alt="نعم أقدر" />
                  <div className="card-body">
                    <h5 className="card-title"> فعالية نعم أقدر </h5>
                  
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={health} className="card-img-top img-fluid" alt="aidEvent" />
                  <div className="card-body">
                    <h5 className="card-title">  وزارة الصحة للفم و الألسنان </h5>
                    
                  
                  </div>
                </div>
              </div>
              
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={Autism} className="card-img-top img-fluid" alt="اليوم العالمي للتوحد" />
                  <div className="card-body">
                    <h5 className="card-title">  اليوم العالمي للتوحد</h5>
                
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={jawathaNights} className="card-img-top img-fluid" alt="ليالي جواثا 2 " />
                  <div className="card-body">
                    <h5 className="card-title"> ليالي جواثا 2 </h5>
                
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={EidPark} className="card-img-top img-fluid" alt=" حديقة العيد " />
                  <div className="card-body">
                    <h5 className="card-title"> حديقة العيد </h5>
              
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={countryDay89} className="card-img-top img-fluid" alt=" اليوم الوطني 89" />
                  <div className="card-body">
                    <h5 className="card-title"> اليوم الوطني 89</h5>
              
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide> */}


        {/* 2018 Events */}
        {/* <SwiperSlide className="CardContainerSlide">
          <div className="container">
          <div className="row">
              <div className="col-12">
                <h2 className="text-white pb-3">فعاليتنا لعام 2018 </h2>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={SprintHasa} className="card-img-top img-fluid" alt="wwww" />
                  <div className="card-body">
                    <h5 className="card-title">    الحسا تركض </h5>
                    
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={disability} className="card-img-top img-fluid" alt="..wwww." />
                  <div className="card-body">
                    <h5 className="card-title">   اليوم العالمي للإعاقة </h5>
                    
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={jawathaNights} className="card-img-top img-fluid" alt="ليالي جواثا " />
                  <div className="card-body">
                    <h5 className="card-title"> ليالي جواثا </h5>
                  
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={jawathaPink} className="card-img-top img-fluid" alt="aidEvent" />
                  <div className="card-body">
                    <h5 className="card-title"> جواثا وردية </h5>
                    
                  
                  </div>
                </div>
              </div>
              
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={EidPark} className="card-img-top img-fluid" alt="عيد جواثا " />
                  <div className="card-body">
                    <h5 className="card-title">   عيد جواثا </h5>
                
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={img1} className="card-img-top img-fluid" alt="يوم الصحة النفسية " />
                  <div className="card-body">
                    <h5 className="card-title"> يوم الصحة النفسية </h5>
                
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={countryFly} className="card-img-top img-fluid" alt=" وطن يحلق " />
                  <div className="card-body">
                    <h5 className="card-title"> وطن يحلق </h5>
              
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={safari2} className="card-img-top img-fluid" alt="سفاري" />
                  <div className="card-body">
                    <h5 className="card-title">   سفاري الإحساء </h5>
              
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </SwiperSlide> */}


        
      </Swiper>
    </>
  );
}
