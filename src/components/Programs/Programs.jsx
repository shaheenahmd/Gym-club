import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData.js'
import rightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className='Programs-heading'>
            <h2>Explore Our Programs to Shape You</h2>
        </div>
        <div className="programs-categories">
            {programsData.map((item)=>(

                <div className='category'>
                        {item.image}
                       <h2>{item.heading}</h2>
                      <p>{item.details}</p>
                      <div className="join-now">
                       <span>Join Now</span> <img src={rightArrow} alt="" />
                      </div>
                </div>
                
                
             ) )}
        </div>

    </div>
  )
}

export default Programs