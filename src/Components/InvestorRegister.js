import React from 'react'

import user1 from '../assets/imgs/Users/icon-avatar-6.jpg'
// import user2 from '../assets/imgs/Users/download.png'
// import user3 from '../assets/imgs/Users/user3.jpg'
import user4 from '../assets/imgs/Users/user4.jpg'
import user5 from '../assets/imgs/Users/user5.png'
// import user6 from '../assets/imgs/Users/user6.jpg'


function InvestorRegister() {
  return (
    <div className='my-5'>
      <div className="my-5">&nbsp;</div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h4><mark className='bg-info text-white'>إكتشف</mark> الفرص الإستثمارية في مدينة جواثا السياحية</h4>
            <hr className='w-50 mx-auto my-0'/>
            <p className='text-muted fs-3 mb-5'>
              خيـارك الإستثماري الأمثل فـي الإحسـاء
            </p>
          </div>
          <div className="col-12 text-center">
            <p className='w-lg-25 w-100 m-auto text-muted'>
              نحن جواثا. نسعى للتميز والارتقاء بالخدمات التي نقدمها للفرد والعائلة 
            </p>
            <p className='my-5'>
              مجتمعنا
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-4 text-center">
            <img className="rounded-circle shadow-1-strong mb-4"
              src={user5} alt="avatar"
               />
            <h5 className="mb-3"> حسن أمين  </h5>
            <h6>مدير الفعاليات  </h6>
            <p className="text-muted">
              {/* <i className="fas fa-quote-left pe-2"></i> */}
              {/* <a href="tel:+546990718">0546990718</a> */}
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
            </ul>
          </div>
        <div className="col-xs-12 col-md-6 col-lg-4 text-center">
            <img className="rounded-circle shadow-1-strong mb-4"
              src={user1} alt="avatar"
               />
            <h5 className="mb-3">  زينب السالم  </h5>
            <h6>مدير الفعاليات  </h6>
            <p className="text-muted">
              {/* <i className="fas fa-quote-left pe-2"></i> */}
              {/* <a href="tel:+538941586">0538941586</a> */}
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
            </ul>
          </div>
          
          {/* <div className="col-xs-12 col-md-6 col-lg-3 text-center">
            <img className="rounded-circle shadow-1-strong mb-4"
              src={user6} alt="avatar"
               />
            <h5 className="mb-3">فهد السماعيل </h5>
            <h6>مسئول الأمن </h6>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2"></i>
              <a href="tel:+">0568678950</a>
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
            </ul>
          </div> */}
          <div className="col-xs-12 col-md-6 col-lg-4 text-center">
          <img className="rounded-circle shadow-1-strong mb-4"
              src={user4} alt="avatar"
               />
            <h5 className="mb-3"> حمد عبدالله الحيدان  </h5>
            <h6> إدارة المبيعات والتسويق </h6>
            <p className="text-muted">
              
              {/* <a href="tel:+">0568678950</a> */}
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
            </ul>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default InvestorRegister