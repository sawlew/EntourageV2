import React from 'react'
import './mission.css'
import MissionImg from '../../assets/mission.jpeg'
import VisionImg from '../../assets/vision.jpeg'

const Mission = () => {
  return (
    <div className='mission-container'>
        <div className='mission'>
            <img src={MissionImg} alt="" />
        </div>
        <div className='mission'>
            <img src={VisionImg} alt="" />
        </div>
        <div className="mission-overlay">
            <div className='vision'>
                <h1>Mission</h1>
                <p>To be the most sought-after people-friendly luxury car hire platform in Africa.</p>
            </div>
            <div className='vision'>
                <h1>Vision</h1>
                <p>To provide people with convenience, comfort and luxury by connecting them with choice car rides at preferred locations leveraging technology.</p>
            </div>
        </div>
    </div>
  )
}

export default Mission