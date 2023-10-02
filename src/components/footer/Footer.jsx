import React from 'react'
import "./Footer.css"
import git from "../../assets/github.png"
import insta from "../../assets/instagram.png"
import linkedIn from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
  <div className="foot-container">
   <hr />
   <div className="foot">
    <div className="social">
    <img src={git} alt="github" />
    <img src={insta} alt="instagram" />
    <img src={linkedIn} alt="linked-in" />
    </div>
   <div className="logo-f">
    <img src={logo} alt="logo" />
   </div>
   </div>
  <div className="blur blur-f"></div>
  <div className="blur blur-f2"></div>

  </div>
  )
}

export default Footer