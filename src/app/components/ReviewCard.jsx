import React from 'react'
import Paragraph from './Paragraph'

const ReviewCard = ({name, review, status, image}) => {
  return (
    <div className='p-7 bg-white rounded-4xl text-blue-primary flex flex-col justify-between gap-10'>
        <Paragraph>{review}</Paragraph>
        
        <div className='flex gap-5'>
            <img src={image} alt="" width={50} height={50} className='border border-blue-primary rounded-full'/>

            <div className='flex flex-col'>
                <span className='font-primary'>{name}</span>
                <Paragraph>{status}</Paragraph>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard