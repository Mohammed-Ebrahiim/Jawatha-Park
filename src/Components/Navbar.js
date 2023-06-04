import React from "react";
// import logo from "../assets/imgs/logo/logo2.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleNavClick = () => {
    setShow(false);
  };
  return (
    // <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <LazyLoadImage 
              className="d-inline-block"
              src= "https://ucarecdn.com/590a5380-caf5-4b47-bea5-387556fb845a/-/preview/586x270/-/quality/smart/-/format/auto/"
              effect="black-and-white"
              height={"80px"}
              width={"80px"}   
              alt="Jawatha Logo"             
            />
          مدينة جواثا السياحية
        </NavLink>
        <button
          onClick={() => setShow(!show)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse  ${show ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={handleNavClick}
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about"}
                className="nav-link"
                onClick={handleNavClick}
              >
                من نحن
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/services"}
                className="nav-link"
                onClick={handleNavClick}
              >
                خدماتنا
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/events"}
                className="nav-link"
                onClick={handleNavClick}
              >
                الفعاليات
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/contact"}
                onClick={handleNavClick}
              >
                تواصل معنا
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                خدمات الشركة
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to={"/Investor_registration"}
                    onClick={handleNavClick}
                  >
                    تسجيل المستثمرين
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to={"/complaints"}
                    onClick={handleNavClick}
                  >
                    الشكاوى والإعتراضات
                  </NavLink>
                  <hr />  
                  <a href="https://erp.jawatha.sa" className="dropdown-item" target="_blank" rel="noreferrer">خدمات الموظفين </a>
                  <a href="https://jawatha.sa/webMail" className="dropdown-item" target="_blank" rel="noreferrer">البريد الإلكترونى  </a>

                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={"/online_tickets"}
                onClick={handleNavClick}
              >
                الحجز الأونلاين
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Navbar;
