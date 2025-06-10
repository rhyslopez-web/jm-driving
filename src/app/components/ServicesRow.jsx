import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import { Check } from 'lucide-react'
import MainButton from './MainButton'

const ServicesRow = ({title, price, long_description, perks, image, index}) => {
  return (
    
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col gap-10 justify-center lg:px-20'>
            <MainHeading>{title}</MainHeading>
            <Paragraph>{long_description}</Paragraph>
            <span>{price}</span>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {perks.map((perk, index) => (
                    <div key={index} className='flex gap-5 text-blue-primary'>
                        <Check color='#5A5CF3'/>
                        {perk}
                    </div>
                ))}
            </div>

            <MainButton>Inquire Now</MainButton>

        </div>

        <div className={`${index % 2 === 0 ? '' : 'lg:order-first'} `}>
            <img className={`${index % 2 === 0 ? 'rounded-l-5xl' : 'rounded-r-5xl'}` + ' w-full aspect-square border border-blue-primary'} src={image} alt="" />
        </div>
    </div>
    
  )
}

export default ServicesRow