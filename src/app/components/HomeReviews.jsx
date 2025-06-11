import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import SecondaryButton from './SecondaryButton'
import { reviews } from '../data'
import ReviewCard from './ReviewCard'

const HomeReviews = () => {
  return (
    <div className='bg-blue-primary flex justify-center py-40 px-5'>
        <div className='max-w-7xl flex flex-col gap-20'>
            <div className='flex flex-col gap-10 lg:flex-row justify-between'>
                <div className='lg:w-1/2'>
                    <MainHeading className={"text-white"}>Words From my Students</MainHeading>
                    <Paragraph className={'text-white'}>Whether you're a complete beginner or brushing up for your road test, I offer personalized driving lessons tailored to your needs</Paragraph>
                </div>

                <div className=''>
                    <SecondaryButton className={'border-white text-white'}>View All Services</SecondaryButton>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review.review} name={review.name} status={review.status} image={review.image}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeReviews