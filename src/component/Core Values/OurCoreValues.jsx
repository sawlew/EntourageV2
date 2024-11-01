import React from 'react'
import ValueCar from '../../assets/value.jpeg'
import OurValuesData from '../../utils/OurValuesData'
import './ourCoreValues.css'

export const OurCoreValues = () => {
  return (
    <div className='values-main-container'>
        <div className='values-container'>
            <h1>Our Core Values</h1>
            <div className='value-detail-container'>
                <div className='value-left'>
                    <img src={ValueCar} alt="" />
                </div>
                <div className='value-right'>
                {OurValuesData.map((data) => (
                    <div className='value-right-container' key={data.id}>
                        <p className='value-title'>{data.title}</p>
                        <p className='value-detail'>{data.detail}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}
