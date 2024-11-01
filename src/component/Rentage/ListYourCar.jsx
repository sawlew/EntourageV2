import React from 'react'
import Yellow from '../../assets/aboutrentage/2.jpeg';
import ListYourCarData from '../../utils/ListYourCarData';

const ListYourCar = () => {
  return (
    <div>
    <div className='rentage-header'>
        <h1>Maximize Your Luxury Car’s Potential with Entourage</h1>
        <p>
        Join Entourage and showcase your premium vehicle to a discerning audience seeking top-tier rentals. Our platform connects you with affluent clients, providing a secure and user-friendly environment to list your car. Benefit from increased visibility, optimal utilization, and dedicated support, making Entourage the premier choice for luxury car owners looking to monetize their assets effortlessly.
        </p>
    </div>
    <div className='rentage-body'>
        <div className='rentage-body-details rentage-left'>
          {ListYourCarData.map((data) => (  
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

export default ListYourCar