

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import './Css/complaints.css'


function Complaints() {
  const [Name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [msg, setMsg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0easlh7",
        "template_wrax7dd",
        form.current,
        "RL4luMKXKyFrZLLuz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setphone("");
          setMsg("");
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'تم الإرسال بنجاح',
            showConfirmButton: false,
            timer: 1500
          })
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="my-5">&nbsp;</div>
        <div className="row form">
          <div className="col-12 mb-5">
            <h2 className="text-center">Contact Us</h2>
          </div>
          <div className="col-xs-12 col-md-6 mb-3">
            <label htmlFor="userName" className="form-label">
              ما هو اسمك ؟
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              placeholder="إكتب اسمك هنا... "
              onChange={(e) => setName(e.target.value)}
              value={Name}
              required
            />
          </div>
          <div className="col-xs-12 col-md-6 mb-3">
            <label htmlFor="mobilNumber" className="form-label">
              ما هو رقم هاتفك ؟
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobilNumber"
              name="userPhone"
              placeholder="...رقم هاتفك"
              onChange={(e) => setphone(e.target.value)}
              value={phone}
              required
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="msgContent" className="form-label">
              موضوع الرساله
            </label>
            <textarea
              className="form-control"
              id="msgContent"
              name="userMsg"
              placeholder="اترك رسالتك هنا... "
              rows="4"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              required
            ></textarea>
          </div>
          <div className="col-12 mb-3">
            <input type="submit" value="إرسال" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Complaints;
