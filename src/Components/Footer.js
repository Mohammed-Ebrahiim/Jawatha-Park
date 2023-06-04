import React, { useEffect } from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
  <div className='footer'>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'  data-aos="fade-up">
          <span>تابعنا علي السوشيال ميديا </span>
        </div>

        <div  data-aos="fade-up">
          
          <a href='https://twitter.com/jawathapark' target='_blank' rel='noreferrer' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.snapchat.com/add/jawathapark' target='_blank' rel='noreferrer' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='snapchat' />
          </a>
          <a href='https://www.instagram.com/jawathapark/?hl=en' target='_blank' rel='noreferrer' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.tiktok.com/@jawathapark'  target='_blank' rel='noreferrer' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='tiktok' />
          </a>
          <a href='https://www.facebook.com/pages/Jawatha%20Park/1812655045476602' target='_blank' rel='noreferrer' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href="https://wa.me/+9660534828285" target="_blank" rel='noreferrer' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='whatsapp' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='4' lg='6' xl='6' className='mx-auto mb-4' 
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500">
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                مدينة جواثا السياحية
              </h6>
              <p>
              يعتبر منتزة جواثا بالأحساء أجمل منتزه طبيعي في الأحساء بالمملكة، 
              حيث أن تلك المنطقة اثرية
               وكانت عاصمة الأحساء قديما تشتهر بوجود مسجد عبد القيس ومسجد جواثا الذي 
              أقيمت فية ثاني صلاة جمعة في الإسلام بعد مسجد الرسول صلى الله عليه وسلم.
              </p>
            </MDBCol>

            

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500">
              <h6 className='text-uppercase fw-bold mb-4'>إتصل بنا </h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
              الأحساء - مدينة جواثا السياحية
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                <a href="mailto:info@jawathapark.com">info@jawathapark.sa</a>
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 
                <a href="tel:+966534828285">0534828285</a>
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' href='/'>
          jawatha Park
        </a> <br />
        <a href="https://mohammed-ebrahiim-portfolio.vercel.app/" target='_blank' rel='noreferrer'>
         © Developed By Mohammed Hania
        </a>
      </div>
    </MDBFooter>
  </div>
  );
}

export default Footer