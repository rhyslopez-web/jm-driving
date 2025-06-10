import React from 'react'
import services from '../data'
import MainHeading from '../components/MainHeading'
import ServicesRow from '../components/ServicesRow'

const page = () => {
  return (
    <>
        <div className='flex flex-col py-20'>            
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
    </>
  )
}

export default page