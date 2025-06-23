import React from 'react'
import SecondaryHeading from './SecondaryHeading'
import { whyus } from '../data'
import Paragraph from './Paragraph'
import CardTitle from './CardTitle'

const BentoCardWithIcon = ({title, description, icon, index}) => {
  return (
    <div className='bg-blue-primary px-5 py-10 rounded-3xl flex flex-col justify-between gap-20'>
        <div className='p-4 bg-white-primary w-15 h-15 rounded-2xl'>
          <img src={icon}/>
        </div>

        <div className='flex flex-col gap-5 justify-start'>
          <span className='text-white text-xs'>0{index + 1}.</span>
          <CardTitle className={'text-white'}>{title}</CardTitle>
          <Paragraph className={'text-white'}>{description}</Paragraph>
        </div>
    </div>
  )
}

export default BentoCardWithIcon