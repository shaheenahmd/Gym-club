import React from 'react'
import './reason.css'
import tick from '../../assets/tick.png'
import nike from '../../assets/nike.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'


const Reason = () => {
  return (
    <div className='reason' id='why-us'>
       <div className="re-left">
          <img src={image2} alt="" />
       
       </div>

       <div className="re-right">
        <h2>Why Choose Us?</h2>

        <div className="line">
                <img src={tick} alt="" />
                <p>OVER 140+ EXPERTS COACHS</p>
            </div>
            <div className="line">
                <img src={tick} alt="" />
                <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
            </div>
            <div className="line">
                <img src={tick} alt="" />
                <p>1 FREE PROGRAM FOR NEW MEMBER</p>
            </div>
            <div className="line">
                <img src={tick} alt="" />
                <p>RELIABLE PARTNERS</p>
            </div>
            <div className="line">
                <img src={tick} alt="" />
                <p>OPEN 24 HOURS</p>
            </div>
       </div>
       
    </div>
  )
}

export default Reason