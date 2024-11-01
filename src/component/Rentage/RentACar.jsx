import React from 'react';
import Yellow from '../../assets/aboutrentage/1.jpeg';
import RentACarData from '../../utils/RentACarData';

const RentACar = () => {
  return (
    <div>
        <div className='rentage-header'>
            <h1>Elevate Your Drive with Entourage</h1>
            <p>
            Discover the pinnacle of luxury car rentals tailored for those who appreciate the finer things in life. At Entourage, we offer an exclusive selection of premium vehicles, seamless booking experiences, and exceptional customer service to ensure your journeys are nothing short of extraordinary. Whether for personal indulgence or business excellence, choose Entourage to make every drive memorable.
            </p>
        </div>
        <div className='rentage-body'>
            <div className='rentage-body-details rentage-left'>
              {RentACarData.map((data) => (  
                <div className='rentage-details' key={data.id}>
                    <div className='detail-index'><p>0{data.id}</p></div>
                    <p className='detail-title'>{data.title}</p>
                    <p className='main-detail'>{data.detail}</p>
                </div>
                ))}
                <button className='rentage-button'>
                    Book Now
                </button>
            </div>
            <div className='rentage-body-details rentage-right'>
                <img src={Yellow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default RentACar