import React from 'react'
import './header.css'
import Logo from "../../assets/logo.png"
import bars from "../../assets/bars.png"
import { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const mobile = window.innerWidth<=768?true:false;
  const [menuOpened , setMenuOpened]=useState(false);
  return (
    <div className="header">
    <img src={Logo} alt="logo" className="logo" />
    {(menuOpened===false && mobile === true)?(
    
    <div style={{backgroundColor:"var(--appColor)",padding:"0.56rem",borderRadius:"5px"}} onClick={()=>setMenuOpened(true)}>
      <img src={bars} alt="navbar" style={{width:"1.5rem",height:"1.5rem"}} />
    </div>
   
    ):
    <ul className="header-menu">
     <li><Link to='hero' spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Home</Link></li>

     <li><Link to='programs' spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Programs</Link></li>
     <li><Link to='reasons' spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Why Us ?</Link></li>
     <li><Link to='plans' spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Plans</Link></li>
     <li><Link to='test' spy={true} smooth={true} onClick={()=>setMenuOpened(false)}> Testimonials</Link></li>



    </ul>
}
    </div>
  )
}

export default Header
