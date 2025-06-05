'use client'

import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import { motion } from "motion/react"

const HomeAbout = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-50 gap-20'>
        <div className='flex flex-col gap-10 items-center container px-5 lg:px-0'>
            <div className='lg:text-center w-full'>
                <MainHeading>Helping Drivers Hit the Road with Confidence</MainHeading>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <Paragraph>
                    John Montero has been guiding learners through the streets of Burnaby, BC, for over 3 years and he’s just getting started. With a growing list of successful students and a calm, supportive teaching style, John is the go-to instructor for first-time drivers looking to build real-world driving skills.
                </Paragraph>

                <Paragraph>
                    Whether you’re prepping for your road test or just getting started, John’s personalized lessons are designed to make you feel safe, confident, and in control behind the wheel.
                </Paragraph>
            </div>

        </div>
        
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='h-80 w-full' 
        style={{backgroundImage: "url('/road-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top'}}
        />
    </div>
  )
}

export default HomeAbout