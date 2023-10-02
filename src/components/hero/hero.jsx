import React from 'react'
import "./hero.css"
import Header from '../header/header'
import hero_img from "../../assets/hero_image.png";
import heart from "../../assets/heart.png";
import hero_img_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from "number-counter"


export const Hero = () => {
  const transition = {type: "spring",duration:3};
  const mobile = window.innerWidth<=768?true:false;
  return (
  <div className="hero" id='hero'>
  <div className="blur hero-blur"></div>

  <div className="left-h">
  <Header/>
  

  <div className="ad">
  <motion.div
   initial = {{left:mobile?"178px":"238px"}}
   whileInView = {{left:'8px'}}
   transition = {{...transition,type:'tween'}}
  ></motion.div>
  <span>The best fitness club in the town.</span>
  </div>



  <div className="hero-text">
   <div>
  <span className="stroke-text">Shape </span> 
  <span>Your</span>
    <div>
    <span>
    Ideal body
    </span>
    </div>
   </div>


  <div>
  In here we will help you to shape and build your ideal body and live up your life to fullest.
  </div>


  </div>

  



  <div className="figures">
  <div><span>
   <NumberCounter end={140} start={100} delay="4" preFix="+"  />
    
    </span><span>Expert Coaches</span></div>


  <div><span>
  <NumberCounter end={978} start={800} delay="4" preFix="+"  />

  </span><span>MEMBERS JOINED</span></div>
  <div><span>
  <NumberCounter end={50} start={0} delay="4" preFix="+"  />

    
    </span><span>FITNESS PROGRAMS</span></div>
  </div>


  <div className="hero-btns">
  <button className="btn">Get Started</button>
  <button className="btn">Learn More</button>
  </div>
  </div>






  <div className="right-h">
  <button className="btn">Join Now</button>

  <motion.div 
  transition={transition}
  initial={{right:"-1rem"}}
  whileInView={{right:"4rem"}}
  className="heart-rate">
  <img src={heart} alt="heart-rate" />
  <span>Heart Rate</span> <span>116ppm</span>
  </motion.div>

  <img src={hero_img} alt="hero" className="hero-img" />
  <motion.img 
  transition={transition}
  initial={{right:"11rem"}}
  whileInView={{right:"20rem"}}
  
  src={hero_img_back} alt="hero"  className="hero-img-back"/>
  

  <motion.div 
  transition={transition}
  initial={{right:"37rem"}}
  whileInView={{right:"28rem"}}
  
  className="calories">
  
  <img src={calories} alt="calories" />
  <div>
  <span>Calories Burned</span>
  <span>220Kcal</span>
  </div>
  </motion.div>




  </div>

  </div>
  )
}
