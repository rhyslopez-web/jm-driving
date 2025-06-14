import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import { Check } from 'lucide-react'
import MainButton from './MainButton'
import { Phone } from 'lucide-react'

const ServicesRow = ({title, price, long_description, perks, image, index}) => {
  return (
    
    <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-10 px-5 lg:px-0'>
        <div className='flex flex-col gap-10 justify-center'>
            <MainHeading>{title}</MainHeading>
            <Paragraph>{long_description}</Paragraph>
            <span className='text-blue-primary font-bold'>{price}</span>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {perks.map((perk, index) => (
                    <div key={index} className='flex gap-5 text-blue-primary'>
                        <Check color='#5A5CF3'/>
                        {perk}
                    </div>
                ))}
            </div>

            <MainButton>
                <Phone color='#fff' />

                Inquire Now
            </MainButton>

        </div>

        <div className={`${index % 2 === 0 ? '' : 'lg:order-first'}` + ' p-5 border border-blue-primary rounded-4xl'}>
            <img className='rounded-3xl' src={image} alt="" />
        </div>
    </div>
    
  )
}

export default ServicesRow