import React from 'react'
import "./Plans.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
const Plans = () => {
  const mobile = window.innerHeight<=768?true:false;
  const header = "";
  if(!mobile){
  header = "!";
  }
  return (
<div className="plans-container">
<div className="blur blur-p"></div>
<div className="blur blur-p2"></div>

<div className="program-header" style={{gap:"2.5rem"}}>
<span className="stroke-text ">READY TO START </span>
<span> YOUR JOURNEY </span>
<span className="stroke-text"> NOW </span>
<span>{header}</span>

</div>


<div className="plans">
{plansData.map((plan,i)=>(
 <div className="plan" key={i}>
 {plan.icon}
 <span>{plan.name}</span>
 <span>$ {plan.price}</span>


 <div className="features">
 {plan.features.map((feature,i)=>(
  <div className="feature" key={i}>
  <img src={whiteTick} alt="w-tick" />
  <span key={i}>{feature}</span>
  
  </div>
  
 )
 )}

 </div>
 <div>
<span>See more benefits -{'>'} </span>

<button className="btn-1">Join now</button>
 </div>


 </div>


))}

</div>

 </div>
  )
}

export default Plans