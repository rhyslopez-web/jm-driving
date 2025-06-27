import React from 'react'
import MainButton from './MainButton'
import Paragraph from './Paragraph'
import SecondaryHeading from './SecondaryHeading'
import { ArrowUpRight } from 'lucide-react'

const ServiceCard = ({title, description, image}) => {
  return (
    <div className='border border-blue-primary p-5 rounded-4xl flex flex-col justify-between gap-10'>
        <img className='aspect-square rounded-2xl' src={image} ></img>

        <div className='flex flex-col gap-5'>
            <SecondaryHeading>{title}</SecondaryHeading>
            <Paragraph>{description}</Paragraph>
        </div>
        
        <MainButton href='/services'><ArrowUpRight/> Learn More</MainButton>
    </div>
  )
}

export default ServiceCard