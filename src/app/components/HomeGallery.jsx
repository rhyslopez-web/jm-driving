import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import SecondaryButton from './SecondaryButton'
import { gallery } from '../data'

const HomeGallery = () => {
  return (
    <div className='flex justify-center py-40'>
        <div className='flex flex-col gap-20 max-w-7xl px-5'>
            <div className='flex flex-col gap-10 lg:flex-row justify-between'>
                <div className='lg:w-2/4'>
                    <MainHeading>Proud Moments Behind the Wheel</MainHeading>
                    <Paragraph>Here are some of the amazing students who passed their road tests all smiles and keys in hand!</Paragraph>
                </div>

                <div className=''>
                    <SecondaryButton href='https://www.facebook.com/jm.driving.school.ltd'>Follow Our Socials</SecondaryButton>
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {gallery.map((image, index) => (
                    <div key={index} className='border border-blue-primary rounded-4xl aspect-square p-5'>
                        <img src={image.image} alt="" className='rounded-3xl'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeGallery