import React from 'react'
import './hero.css'
import Header from '../header/Header'
import heroimg from '../../assets/hero_image.png'
import heart from '../../assets/heart.png'
import heroback from '../../assets/hero_image_back.png'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className="h-left">
        <Header/>

    {/* hero best fit ads */}
        <div className="best-fit-ad">
          <div></div>
          <span>Best fitness Club Calicut</span>
        </div>
        {/* hero heading */}
          <div className='hero-text'>
            <div>
            <span>Shape</span>
            <span className='stroke-text'> Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div className="description">
              <span>We will help you to shape and build your ideal body to live up your life fullup</span>
            </div>
          </div>

          <div className="figures">
            <div>
              <span>+ 140</span>
              <span>Expert Coaches</span>
            </div>

            <div>
              <span>+ 978</span>
              <span>Members joined</span>
            </div>

            <div>
              <span>+ 50</span>
              <span>Fitness Programs</span>
            </div>

            {/* <div>
              <span>Calorie Burned</span>
              <span>220 Kcal</span>
            </div> */}

          </div>

          <div className="hero-buttons">
            <button className='btn'>Get started</button>
            <button className='btn'>Learn More</button>
          </div>

        </div>



        <div className="h-right">
          <div>
            <button className='btn'>Join Now</button>
          </div>
          <div className="heart-rate">
             <img src={heart} alt="" />
             <span>Heart rate</span> <span>116 Bpm</span>
          </div>

          <div className="hero-img">
            <img src={heroimg} alt="" />
            <img src={heroback} alt="" className='hero-back' />
          </div>
        </div>
    </div>
  )
}

export default Hero