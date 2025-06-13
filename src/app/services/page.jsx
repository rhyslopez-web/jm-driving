import React from 'react'
import services from '../data'
import MainHeading from '../components/MainHeading'
import ServicesRow from '../components/ServicesRow'
import FAQ from '../components/FAQ'
import HomeReviews from '../components/HomeReviews'

const page = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center pt-20'>
          <div className='flex flex-col gap-20 py-20'>            
            {services.map((service, index) => (
                <ServicesRow
                key={index} 
                title={service.title} 
                long_description={service.long_description} 
                price={service.price}
                perks={service.perks}
                image={service.image}
                index={index}
                />
            ))}
          </div>            
            <FAQ/>

            <div className='bg-blue-primary w-full'>
              <HomeReviews/>
            </div>
        </div>
    </>
  )
}

export default page