import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { FaBars } from "react-icons/fa6";

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [MenuOpened,setmenuOpened]= useState(false);

 
  return (
    <div className="header">
        <img src={logo} alt="" className='logo'/>
      
      {MenuOpened === false && mobile === true ? (
        <  div>
              <FaBars color='white' />
          </div>
          ) : (
          <div className="navlist">
            <ul>
                <li><Link to='hero'>Home</Link> </li>
                <li><Link to='programs' smooth="true">Programs</Link></li>
                <li><Link to='why-us' smooth="true">Why us</Link></li>
                <li><Link to='plan' smooth="true">Plans</Link> </li>
                <li>Testimoniels</li>
            </ul>
          </div>
        )
      }
    
    </div>
  );
};

export default Header