import React, { useEffect } from 'react'
import svg from '../assets/imgs/About/What-We-Do.svg'
import svg2 from '../assets/imgs/About/Our-Leaders.svg'
import svg3 from '../assets/imgs/About/Mission-Vision.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Css/about_style.css'
function AboutUs() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='about-us' id='about'>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6" data-aos="fade-down">
            <h4 className='my-2 mb-3'>عن مدينة جواثا السياحية</h4>
            <p>
              تم تدشين مدينة جواثا السياحية من قبل
             صاحب السمو الملكى الأمير سعود بن نايف بن عبد العزيز أمير المنطقه الشرقيه
             وبحضور صاحب السمو الأمير بدر بن محمد بن جلوى محافظ الإحساء .
              <br />
              وتعد مدينة جواثا السياحية منتزه متكامل  يحتوى علي جميع الأنشطه الترفيهيه 
              والسياحية الفريدة لجميع الفئات العمرية 
              والتى تميزه بمكانه خاصة بين الوجهات السياحية.
            </p>
          </div>
        </div>
        <div className="row gy-3 my-5 content">
          <div className="col-xs-12 col-md-6 col-lg-3" data-aos="fade-down">
            <div className="card h-100">
              <div className="card-body">
                <img src={svg} alt="our views" />
                <h5 className="card-title">رؤيتنا </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">&nbsp;</h6>
                <p className="card-text">
                أن نكون موقعًا سياحيًا وترفيهيًا وتراثيًا
                فريد من نوعة في المنطقة من خلال مواكبة
                أهداف رؤية المملكة في القطاعين السياحي والترفيهي بهدف تحسين جودة الحياة.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3" data-aos="fade-up">
          <div className="card h-100">
              <div className="card-body">
                <img src={svg2} alt="our goal" />
                <h5 className="card-title">هدفنا </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">&nbsp;</h6>
                <p className="card-text">
                مواكبة رؤية المملكة في مبادرة السعودية الخصراء
                 من خلال المشاركة في التشجير و زيادة الغطاء النباتي والمساعدة في مكافحة التصحر.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3" data-aos="fade-down">
          <div className="card h-100">
              <div className="card-body">
              <img src={svg3} alt="our message" />
                <h5 className="card-title">رسالتنا </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">&nbsp;</h6>
                <p className="card-text">
                نسعى للتميز والارتقاء بالخدمات التي نقدمها للفرد والعائلة بمشاركة المستثمرين لدينا من أبناء الوطن والجهات ذات العلاقة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs