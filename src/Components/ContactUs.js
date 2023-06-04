import React, { useEffect } from "react";
import "./Css/contact_us.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="py-5 bg-light">
      <section id="call-to-action" className="call-to-action">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3>إتصل بنا الآن</h3>
              <p>مرحبا بك في مدينة جواثا السياحية للسياحه والترفيه </p>
              <a className="cta-btn" href="tel:+966557739059">
                إتصل بنا الآن 
              </a>
              <div className="social-links">
                <a href='https://www.snapchat.com/add/jawathapark' target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-snapchat"></i>    </a> <br/>
                <a href='https://www.instagram.com/jawathapark/?hl=en' target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-instagram"></i>  </a> <br/>
                <a href='https://www.tiktok.com/@jawathapark'  target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-tiktok"></i>   </a> <br/>
                <a href='https://www.facebook.com/pages/Jawatha%20Park/1812655045476602' target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-facebook"></i>   </a> <br/>
                <a href="https://wa.me/+9660534828285" target="_blank" rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-whatsapp"></i>   </a> <br />
                <a href='https://twitter.com/jawathapark' target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-twitter"></i>   </a> <br />
                <a href='https://goo.gl/maps/95QyLiVoE2D53F1i6?coh=178572&entry=tt' target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fas fa-location-dot"></i></a> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
