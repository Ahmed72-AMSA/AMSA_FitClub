import React from 'react'
import './Reasons.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'




const Reasons = () => {
  return (
  <div className="reasons" id="reasons">
  
  <div className="left-r">
  <img src={img1} alt="hero1"/>
  <img src={img2} alt="hero2"/>
  <img src={img3} alt="hero3"/>
  <img src={img4} alt="hero4"/>
  
  </div>


  <div className="right-r">
  <span>some reasons</span>

  <div>
  <span className="stroke-text">WHY </span>
  <span> CHOOSE US ?</span>
  </div>

  <div className="details-r">
  <div>
  
  <img src={tick} alt="correct-sign" />
  <span>RELIABLE PARTNERS</span>
  </div>
  

  <div>
  <img src={tick} alt="correct-sign" />
  <span>OVER 140+ EXPERT COACHS </span>
  </div>


  <div>
  <img src={tick} alt="correct-sign" />
  <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
  </div>




  <div>
  <img src={tick} alt="correct-sign" />
  <span>1 FREE PROGRAM FOR NEW MEMBER</span>
  </div>

  <span style={
  {
   color:"var(--gray)",
   fontWeight:"normal",
   fontSize:"1rem",

  }
  }>OUR PARTNERS</span>
  

  <div className="partners">
  <img src={nb} alt="nb" />
  <img src={nike} alt="nike" />
  <img src={adidas} alt="adidas" />
  </div>
  </div>
  
  </div>
  </div>
  )
}

export default Reasons