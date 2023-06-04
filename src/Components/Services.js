import React, { useEffect } from "react";
import "./Css/services_style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import enjoy1 from "../assets/imgs/entertainments/enjoy1.jpg";
// import enjoy2 from "../assets/imgs/entertainments/enjoy2.jpg";
// import enjoy3 from "../assets/imgs/entertainments/enjoy3.jpg";
// import enjoy4 from "../assets/imgs/entertainments/enjoy4.jpg";
// import enjoy6 from "../assets/imgs/entertainments/enjoy6.jpg";
// import enjoy7 from "../assets/imgs/entertainments/enjoy7.jpg";
// import enjoy8 from "../assets/imgs/entertainments/enjoy8.jpg";
// import enjoy11 from "../assets/imgs/entertainments/enjoy11.jpg";

// import shop1 from "../assets/imgs/shopping/shop(1).jpg";
// import shop2 from "../assets/imgs/shopping/shop(2).jpg";
// import shop3 from "../assets/imgs/shopping/shop(3).jpg";
// import shop5 from "../assets/imgs/shopping/shop(5).jpg";
// import shop6 from "../assets/imgs/shopping/shop(6).jpg";
// import shop7 from "../assets/imgs/shopping/shop(7).jpg";
// import shop8 from "../assets/imgs/shopping/shop(8).jpg";

// import rest1 from "../assets/imgs/restaurants/restaurants(1).jpg";
// import rest2 from "../assets/imgs/restaurants/restaurants(2).jpg";
// import rest3 from "../assets/imgs/restaurants/restaurants(3).jpg";
// import rest4 from "../assets/imgs/restaurants/restaurants(4).jpg";
// import rest5 from "../assets/imgs/restaurants/restaurants(5).jpg";
// import rest6 from "../assets/imgs/restaurants/restaurants(6).jpg";
// import rest7 from "../assets/imgs/restaurants/restaurants(7).jpg";
// import rest8 from "../assets/imgs/restaurants/restaurants(8).jpg";

// import cafe1 from '../assets/imgs/cafe/cafe1(1).jpg'
// import cafe2 from '../assets/imgs/cafe/cafe1 (2).jpg'
// import cafe3 from '../assets/imgs/cafe/cafe1(3).jpg'
// import cafe4 from '../assets/imgs/cafe/cafe1(4).jpg'
// import cafe5 from '../assets/imgs/cafe/cafe1(5).jpg'
// import cafe7 from '../assets/imgs/cafe/cafe1(7).jpg'
// import cafe8 from '../assets/imgs/cafe/cafe1(8).jpg'
// import cafe10 from '../assets/imgs/cafe/cafe1(10).jpg'

// import legacy1 from "../assets/imgs/legacy/legacy(1).jpg";
// import legacy2 from "../assets/imgs/legacy/legacy(2).jpg";
// import legacy3 from "../assets/imgs/legacy/legacy(3).jpg";
// import legacy4 from "../assets/imgs/legacy/legacy(4).jpg";
// import legacy5 from "../assets/imgs/legacy/legacy(5).jpg";
// import legacy6 from "../assets/imgs/legacy/legacy(6).jpg";
// import legacy7 from "../assets/imgs/legacy/legacy(7).jpg";
// import legacy8 from "../assets/imgs/legacy/legacy(8).jpg";

function Services() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn");
    const storeItems = document.querySelectorAll(".store-item");

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        storeItems.forEach((item) => {
          if (filter === "all") {
            item.style.display = "block";
          } else {
            if (item.classList.contains(filter)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        });
      });
    });
  }, []);
  return (
    <div>
      <section id="service" className="store py-5">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="text-center"> خدمات جواثا السياحية </h2>
            </div>
          </div>

          <div className="row">
            <div className=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
              <button
                className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2"
                data-filter="all"
              >
                جميع الخدمات{" "}
              </button>

              <button
                className="btn px-4 btn-outline-secondary btn-black text-uppercase filter-btn m-2"
                data-filter="shopping"
              >
                {" "}
                التسوق{" "}
              </button>
              <button
                className="btn px-3 btn-outline-secondary btn-black text-uppercase filter-btn m-2"
                data-filter="entertainment"
              >
                {" "}
                الترفيه{" "}
              </button>
              <button
                className="btn px-4 btn-outline-secondary btn-black text-uppercase filter-btn m-2"
                data-filter="restaurants"
              >
                {" "}
                المطاعم{" "}
              </button>
              <button
                className="btn px-3 btn-outline-secondary btn-black text-uppercase filter-btn m-2"
                data-filter="cafe"
              >
                {" "}
                المقاهى{" "}
              </button>
              <button
                className="btn px-4 btn-outline-secondary btn-black text-uppercase filter-btn m-2"
                data-filter="antiquities"
              >
                {" "}
                التراث القديم
              </button>
            </div>
          </div>

          <div className="row" id="store-items">
            {/* row 1 */}

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="مسرح ترفيهي "
                    effect="blur"
                    src="https://ucarecdn.com/fc2f0d77-0684-48fe-b45e-cadd7933fce9/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> المسرح الترفيهي </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="نادى البينتبول"
                    effect="blur"
                    src="https://ucarecdn.com/39245888-d067-4901-befc-a9c2937fa64c/"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex social-icons align-items-center">
                  <h5 id="store-item-name"> نادي البينتبول </h5>
                      <a href='https://www.snapchat.com/add/ahsapaintball?web_client_id=03802c4e-7e42-485d-a9ed-21444287e5bf' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-warning"><i className="fab fa-snapchat"></i>    </a> <br/>
                      <a href='https://www.instagram.com/ahsapaintball/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                      <a href="https://wa.me/+9660599877707" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-success"><i className="fab fa-whatsapp"></i>   </a> <br />
                    </div>
                </div>
              </div>
            </div>
            
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card">
                <div className="img-container">
                  {/* <img src={cafe7} className="card-img-top store-img" alt="DR.Jack" /> */}
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" my Toys "
                    effect="blur"
                    src="https://ucarecdn.com/2d197ad7-983f-4ec1-b01a-d6cbf5d7e80d/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> My Toys </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" الجسر المعلق"
                    effect="blur"
                    src="https://ucarecdn.com/69d8d519-8ebb-4d69-8cfa-5ba8ca97a3f4/"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex social-icons align-items-center">
                  <h5 id="store-item-name"> الجسر المعلق  </h5>
                      {/* <a href='https://www.snapchat.com/add/ahsapaintball?web_client_id=03802c4e-7e42-485d-a9ed-21444287e5bf' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-warning"><i className="fab fa-snapchat"></i>    </a> <br/> */}
                      <a href='https://www.instagram.com/lanofadventure_rd/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                      {/* <a href="https://wa.me/+9660599877707" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-success"><i className="fab fa-whatsapp"></i>   </a> <br /> */}
                    </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="cafe 72"
                    effect="blur"
                    src="https://ucarecdn.com/dff21976-d887-46db-af79-d7229b3be8b3/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                      <h5 id="store-item-name"> ترحال كتاب   </h5>
                      {/* <a href='https://www.snapchat.com/add/jawathapark' target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-snapchat"></i>    </a> <br/> */}
                      <a href='https://www.instagram.com/lnyf6597/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>



            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card">
                <div className="img-container">
                  
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="أسواق هجر "
                    effect="blur"
                    src="https://ucarecdn.com/33f4bc9b-e839-4894-8252-192022d4e603/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">أسواق هجر </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container">
                 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" بوفهد للحرف اليدويه "
                    effect="blur"
                    src="https://ucarecdn.com/741b0abd-ff2c-495d-bada-0499a644e761/"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex social-icons align-items-center">
                      <h5 id="store-item-name">  بوفهد للحرف اليدويه   </h5>
                      <a href="https://wa.me/+9660506915084" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-success text-decoration-none"><i className="fab fa-whatsapp"></i>   </a> <br />
                      <a href='https://www.tiktok.com/@dyxbx1g51a6x'  target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fab fa-tiktok"></i>   </a> <br/>
                      <a href='https://www.instagram.com/muhammad.111_0/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="القوارب"
                    effect="blur"
                    src="https://ucarecdn.com/766ae6b3-2aba-4d60-820e-d40520085a4a/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> القوارب </h5>
                  </div>
                </div>
              </div>
            </div>

            

            {/* row 2 */}

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="cafe 72"
                    effect="blur"
                    src="https://ucarecdn.com/e4e0dc2a-619a-4ec3-8433-30f6400a146d/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                      <h5 id="store-item-name"> Seventy Two Cafe </h5>
                      <a href='https://www.instagram.com/72.72sa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="بوتيرس"
                    effect="blur"
                    src="https://ucarecdn.com/ff73f847-86d9-438d-9f4b-e7bf9d7396fe/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> بوتيرس </h5>
                      <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/>
                      <a href='https://www.instagram.com/butaress/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="ليالى جواثا"
                    effect="blur"
                    src="https://ucarecdn.com/20a0acc0-0205-446b-8411-2344c086ccac/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> مطعم ليالى جواثا </h5>
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      {/* <a href='https://www.instagram.com/butaress/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" المذاق العراقى"
                    effect="blur"
                    src="https://ucarecdn.com/d40f2c07-adf8-4f80-9aa8-02fead26989d/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> المذاق العراقى</h5>
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      {/* <a href='https://www.instagram.com/butaress/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            


            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="التعليم المبكر "
                    effect="blur"
                    src="https://ucarecdn.com/d5986d1b-34ec-4afd-8355-548573f2298c/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> التعليم المبكر </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container">
                
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" زهراء فون  "
                    effect="blur"
                    src="https://ucarecdn.com/91e63cc0-8abb-4684-8ddb-cec19bdfc30c/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> زهراء فون </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" بو تمبه "
                    effect="blur"
                    src="https://ucarecdn.com/c1c04919-2944-4490-a5a5-4a330a2fb022/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> بو تمبه </h5>
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      <a href='https://www.instagram.com/botmbah.sa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container">
                 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="ريحة الحبايب "
                    effect="blur"
                    src="https://ucarecdn.com/edd5fd0f-f414-4ef7-8216-6e73922f6230/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> ريحة الحبايب </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card h-100">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img h-100"
                    alt=" Crep Hut"
                    effect="blur"
                    src="https://ucarecdn.com/d30991c8-79db-4a27-acc1-ebe5ae3f9ae3/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                    <h5 id="store-item-name">  Crep Hut </h5>
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      {/* <a href='https://www.instagram.com/botmbah.sa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" خبز الطيبين"
                    effect="blur"
                    src="https://ucarecdn.com/94133ff4-cd33-490d-b862-a0302f3072cd/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                    <h5 id="store-item-name">  خبز الطيبين  </h5>
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      {/* <a href='https://www.instagram.com/botmbah.sa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="مسرح جواثا "
                    effect="blur"
                    src="https://ucarecdn.com/dc8a1954-0036-4089-a68d-73abf70acf31/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> مسرح جواثا </h5>
                  </div>
                </div>
              </div>
            </div>
            
            {/* row 3 */}

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="مريم للخبز المسح "
                    effect="blur"
                    src="https://ucarecdn.com/5398c25f-a85e-4f51-a733-76a36a8d4b90/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> مريم للخبز المسح </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container">
                 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" دانة هجر "
                    effect="blur"
                    src="https://ucarecdn.com/a742baab-451f-4693-ba7b-df315591ea2b/"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex social-icons align-items-center">
                      <h5 id="store-item-name"> دانة هجر </h5>
                      <a href="https://wa.me/+9660556921268" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-success text-decoration-none"><i className="fab fa-whatsapp"></i>   </a> <br />
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      <a href='https://www.instagram.com/f_t_saad/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container">
                 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" بقشه "
                    effect="blur"
                    src="https://ucarecdn.com/ef209ecd-6069-4f46-bd94-df130d58c4e7/"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex social-icons align-items-center">
                      <h5 id="store-item-name">  بُقشة  </h5>
                      <a href="https://wa.me/+9660537815843" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-success text-decoration-none"><i className="fab fa-whatsapp"></i>   </a> <br />
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      <a href='https://www.instagram.com/buqsha.123/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
              </div>
            </div>
            
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container">
                 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="  عقد جودى "
                    effect="blur"
                    src="https://ucarecdn.com/3eb54cf7-db2f-45b9-848d-1ea6df428677/"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex social-icons align-items-center">
                      <h5 id="store-item-name">  عقد جودى </h5>
                      <a href="https://wa.me/+9660540072041" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-success text-decoration-none"><i className="fab fa-whatsapp"></i>   </a> <br />
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      <a href='https://www.instagram.com/amirty_22/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" خبز الطيبين"
                    effect="blur"
                    src="https://ucarecdn.com/001542bc-967c-444d-94d3-ef4bf23279d9/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div className="d-flex social-icons align-items-center">
                    <h5 id="store-item-name">   مملكة الساندوتش  </h5>
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      {/* <a href='https://www.instagram.com/botmbah.sa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container"> 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="شعبيات حول النخيل "
                    effect="blur"
                    src="https://ucarecdn.com/fc1506b4-4be8-4e11-81ca-3268f089e3e0/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> شعبيات حول النخيل </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* row 4 */}

          

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container"> 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="مشعل جوان لنقوش الحناء "
                    effect="blur"
                    src="https://ucarecdn.com/dbc750b8-76ab-447a-ab0f-e2b1b30c002b/"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex social-icons align-items-center">
                  <h5 id="store-item-name"> مشغل جوان لنقوش الحناء </h5>
                      {/* <a href='https://butares.com/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none"><i className="fa fa-globe"></i>    </a> <br/> */}
                      <a href='https://www.instagram.com/jwnlnqsh.lhn/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="الفرقة المتجوله"
                    effect="blur"
                    src="https://ucarecdn.com/d29748aa-58e7-4860-b282-e0c335880cba/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> الفرقة المتجوله </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card ">
                <div className="img-container">
                  {/* <img src={cafe3} className="card-img-top store-img" alt="مقهى سلى الروح" /> */}
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" مقهى سلى الروح "
                    effect="blur"
                    src="https://ucarecdn.com/3ced560f-7f34-463b-afd7-ca8c16f052e1/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text ">
                    <div className="d-flex social-icons align-items-center">
                      <h5 id="store-item-name"> مقهى سلى الروح </h5>   
                      <a href='https://www.instagram.com/salaalrooh.sa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* row 5 */}
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="أندوميتا"
                    effect="blur"
                    src="https://ucarecdn.com/a265582b-2d4f-49f8-8040-e90fcdd20d23/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> أندوميتا </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="الطيران الشراعي"
                    effect="blur"
                    src="https://ucarecdn.com/f1cbbe51-58ab-4640-8dcf-2fdabd984da8/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> الطيران الشراعي </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="برجر راقي"
                    effect="blur"
                    src="https://ucarecdn.com/0bc8a4d1-9772-4fab-ac77-68066d8777c4/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> برجر راقي </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  {/* <img src={cafe8} className="card-img-top store-img" alt="shots" /> */}
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" SHOTS Cafe"
                    effect="blur"
                    src="https://ucarecdn.com/00f14be3-3352-4a76-b5de-ebab654e9f44/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> SHOTS </h5>
                  
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="تسالى هجر "
                    effect="blur"
                    src="https://ucarecdn.com/b988f951-45bb-4de9-8d87-14e6697a14bf/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> تسالي هجر </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container"> 
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="زهرة سويت"
                    effect="blur"
                    src="https://ucarecdn.com/5302f9d2-5d2d-478d-ad8a-e34d52ddd7c4/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> زهرة سويت </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="أم أحمد للطبخ الشعبى"
                    effect="blur"
                    src="https://ucarecdn.com/24395aaf-b33f-46db-ade0-e7572a731727/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> أم أحمد للطبخ الشعبي </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="عشق ASK"
                    // effect="blur"
                    src="https://ucarecdn.com/7b194ca0-69b3-4755-8d72-97a38a55417c/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> عشق ASK </h5>
                      {/* <a href="https://wa.me/+9660501433408" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-success"><i className="fab fa-whatsapp"></i>   </a> <br /> */}
                      <a href='https://www.instagram.com/ask.kahvesa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  {/* <img src={cafe4} className="card-img-top store-img" alt="Four seasons" /> */}
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" FOUR SEASONS"
                    effect="blur"
                    src="https://ucarecdn.com/805c236d-2f67-440c-8ad6-77f096892df6/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> FOUR SEASONS </h5>
                      <a href='https://www.instagram.com/4_seasons00/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                  </div>
                  
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item entertainment"
              data-item="entertainment"
            >
              <div className="card ">
                <div className="img-container">
                
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="الرجل العملاق"
                    effect="blur"
                    src="https://ucarecdn.com/0d73e2bf-a348-4e51-b205-f0d6a8a72b22/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> الرجل العملاق </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card">
                <div className="img-container">
                  {/* <img src={cafe7} className="card-img-top store-img" alt="DR.Jack" /> */}
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt=" DR.JACK "
                    effect="blur"
                    src="https://ucarecdn.com/c42a9e63-9f37-4bac-acac-f17b2f05e7af/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> DR.JACK </h5>
                  </div>
                </div>
              </div>
            </div>
          

            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  {/* <img src={cafe5} className="card-img-top store-img" alt="مقهى فيوزى" /> */}
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="مقهى فيوزى "
                    // effect="blur"
                    src="https://ucarecdn.com/5ce59c21-16f0-41e4-aae4-6e4c6a4ebb43/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex social-icons align-items-center">
                    <h5 id="store-item-name">مقهى فيورى  </h5>
                      <a href="https://wa.me/+9660501433408" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-success"><i className="fab fa-whatsapp"></i>   </a> <br />
                      {/* <a href='https://www.instagram.com/4_seasons00/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a> */}
                  </div>
                  
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  {/* <img src={cafe5} className="card-img-top store-img" alt="مقهى فيوزى" /> */}
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="سبكة شاى  "
                    // effect="blur"
                    src="https://ucarecdn.com/69732614-a599-4ec4-aa03-c1e37e7ed8da/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> سبكة شاى  </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="java hut"
                      // effect="blur"
                      src="https://ucarecdn.com/ab6585da-febc-4b5d-bd84-0bd9489630db/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> JAVA HUT  </h5>
                      {/* <a href="https://wa.me/+9660534828285" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-success"><i className="fab fa-whatsapp"></i>   </a> <br /> */}
                      <a href='https://www.instagram.com/javahut.sa/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                  </div>
                  
                </div>
              </div>
            </div>
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="Story Cafe"
                    src="https://ucarecdn.com/d16c700c-3f28-40cb-8a6f-5682c0179eb8/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex social-icons align-items-center">
                    <h5 id="store-item-name"> Story Cafe  </h5>
                      {/* <a href="https://wa.me/+9660534828285" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-success"><i className="fab fa-whatsapp"></i>   </a> <br /> */}
                      <a href='https://www.instagram.com/story_coffee.2542/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                      {/* <a href='https://www.snapchat.com/add/jawathapark' target='_blank' rel='noreferrer' className="mx-2 text-decoration-none"><i className="fab fa-snapchat"></i>    </a> <br/> */}
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item cafe"
              data-item="cafe"
            >
              <div className="card">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img h-100"
                    alt="Coffe $"
                    src="https://ucarecdn.com/4b7ce85f-a9c9-4898-8a6e-c4174cdbd85d/"
                  />
                </div>
                <div className="card-body">
                    <div className="card-text d-flex social-icons align-items-center">
                      <h5 id="store-item-name">  Coffe $  </h5>
                      {/* <a href="https://wa.me/+9660501433408" target="_blank" rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-success"><i className="fab fa-whatsapp"></i>   </a> <br /> */}
                      <a href='https://www.instagram.com/coffee_dollar1/' target='_blank' rel='noreferrer' className="mx-2 fs-3 text-decoration-none text-danger"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item shopping"
              data-item="shopping"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="بُقشة"
                    effect="blur"
                    src="https://ucarecdn.com/637e08cc-ba65-4baa-a819-50380ed74b0f/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> بُقشة </h5>
                  </div>
                </div>
              </div>
            </div>


            
            <div
              className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item restaurants"
              data-item="restaurants"
            >
              <div className="card ">
                <div className="img-container">
                  <LazyLoadImage
                    className="card-img-top store-img"
                    alt="حكوكه"
                    effect="blur"
                    src="https://ucarecdn.com/f6893e03-a89c-4316-b43c-9bbe40ee636b/"
                  />
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name"> حكوكه </h5>
                  </div>
                </div>
              </div>
            </div>

          

            <div className="special row">
              <div
                className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item antiquities"
                data-item="antiquities"
              >
                <div className="card ">
                  <div className="img-container">
                    <LazyLoadImage
                      className="card-img-top store-img"
                      alt="تراث جواثا"
                      effect="blur"
                      src="https://ucarecdn.com/34d54c2c-6aed-49f7-9444-2bc3bde0196c/"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-text d-flex justify-content-between text-capitalize">
                      <h5 id="store-item-name">
                          مسجد جواثا السياحي  
                      </h5>

                    </div>
                  </div>
                </div>
              </div>
            

              
              <div
                className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item antiquities"
                data-item="antiquities"
              >
                <div className="card ">
                  <div className="img-container">
                    
                    <LazyLoadImage
                      className="card-img-top store-img"
                      alt="تراث جواثا"
                      effect="blur"
                      src="https://ucarecdn.com/e0cbab45-3b74-44f8-bcc8-90cd3ed50eb2/"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-text d-flex justify-content-between text-capitalize">
                      <h5 id="store-item-name"> تراث جواثا </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item antiquities"
                data-item="antiquities"
              >
                <div className="card ">
                  <div className="img-container">
                    
                    <LazyLoadImage
                      className="card-img-top store-img"
                      alt="تراث جواثا"
                      effect="blur"
                      src="https://ucarecdn.com/2efa4307-e5c5-4b94-ac79-2f304a7fb772/"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-text d-flex justify-content-between text-capitalize">
                      <h5 id="store-item-name">  ساحة السيارات والدبابات </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item antiquities"
                data-item="antiquities"
              >
                <div className="card ">
                  <div className="img-container">
                  
                    <LazyLoadImage
                      className="card-img-top store-img"
                      alt="تراث جواثا"
                      effect="blur"
                      src="https://ucarecdn.com/760de4a9-f19e-4639-b5c0-8c8cee43247d/"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-text d-flex justify-content-between text-capitalize">
                      <h5 id="store-item-name"> تراث جواثا </h5>
                    </div>
                  </div>
                </div>
              </div>
              
              <div
                className="col-10 col-sm-6 col-lg-3 mx-auto my-3 store-item antiquities"
                data-item="antiquities"
              >
                <div className="card ">
                  <div className="img-container">
                    
                    <LazyLoadImage
                      className="card-img-top store-img"
                      alt="تراث جواثا"
                      effect="blur"
                      src="https://ucarecdn.com/f3e89fb6-8b6b-479c-8d69-de3dfee5ba35/"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-text d-flex justify-content-between text-capitalize">
                      <h5 id="store-item-name"> ساحة السيارات والدبابات   </h5>
                    </div>
                  </div>
                </div>
              </div>
            

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
