import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"

const Join = () => {
  const form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e9sna7c', 'template_547zbip', form.current, 'dhpkw0Ft-VaA3yk27')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className="join" id="join">
  <div className="left-j">
  <hr />
  <div>
   <span className="stroke-text">READY TO </span>
   <span> LEVEL UP</span>
  </div>

  <div>
  <span>YOUR BODY </span>
  <span className="stroke-text"> WITH US?</span>

  </div>
   
  </div>


  <div className="right-j">
  <form ref={form} className="mail" onSubmit={sendEmail}>
  <input type="email" name="user_email" placeholder='Enter your email address' />
  <button className="btn btn-join">Join now</button>
  </form>
  
  </div>
  </div>
  )
}

export default Join