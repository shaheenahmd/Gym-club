import React from 'react'
import './plan.css'
import {plansData}  from '../../data/plansData.js'
import whitetick from "../../assets/whiteTick.png";


const Plan = () => {
  return (
    <div className='plan' id='plan'>

        <div className='title'>
            <h2>Our Plans</h2>
        </div>

        <div className='plans-container'>
        {/* PLANS CARD */}
            {plansData.map((plan,i)=>(
                <div className="plancard" key={i}>
                    {plan.icon}
                    <span className='name'>{plan.name}</span> 
                    <span className='price'> ${plan.price}</span>
                    <div className="features">
                        {plan.features.map((feat, i)=>(
                            <div className="feature">
                                <img src={whitetick} alt="" /><p>{feat}</p>
                            </div>
                        ))}
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Plan