import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import SecondaryButton from './SecondaryButton'
import services from '../data'
import ServiceCard from './ServiceCard'

const HomeServicesRow = () => {
  return (
    <div className='flex justify-center'>
        <div className='py-40 flex flex-col justify-center gap-20 max-w-7xl px-5'>
            <div className='flex flex-col gap-10 lg:flex-row justify-between'>
                <div className='lg:w-1/2'>
                    <MainHeading>MY SERVICES</MainHeading>
                    <Paragraph>Whether you're a complete beginner or brushing up for your road test, I offer personalized driving lessons tailored to your needs</Paragraph>
                </div>

                <div className=''>
                    <SecondaryButton href='/services'>View All Services</SecondaryButton>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {services
                .filter(service => service.id !== 3)
                .map((service, index)=> (
                    <ServiceCard key={index} title={service.title} description={service.description} image={service.image}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeServicesRow