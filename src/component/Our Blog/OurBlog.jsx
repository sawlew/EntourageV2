import React from 'react'
import './ourblog.css'
import OurBlogData from '../../utils/OurBlogData'

const OurBlog = () => {
  return (
    <section className='ourblog-main-container'>
        <div className='ourblog-section1'>
            <h1>Experience Great Ride <br />
                And Maximum Comfort
            </h1>
            <p>Businesses who partner with us to list their cars on the platform can access up to 1000+ customers daily looking to rent luxury vehicles for their various occasions, they are also able to build and expand their car fleets through the premium rental income generated on the platform.</p>
            <div className='section1-video'>
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className='section2'>
                <h1 className='ourblog-header'>Our Blog</h1>
                <div className='blog-container'>
                    {OurBlogData.map((data) => (
                    <div className="blog-card" key={data.id}>
                        <div className='blog-image-container'>
                            <img src={data.image} alt="" />
                            <div className='blog-image-title'>
                                <p>{data.imageTitle}</p>
                            </div>
                        </div>
                        <div className='blog-details'>
                            <h1>{data.title}</h1>
                            <p>{data.detail}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default OurBlog