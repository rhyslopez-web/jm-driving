import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import MainButton from './MainButton'
import SecondaryButton from './SecondaryButton'
import AnimatedGridBG from './AnimatedGridBG'
import Hyperspeed from './Hyperspeed'

const HeroSection = () => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-1 container px-5 lg:px-50 py-10">
        {/* Hero Content */}
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5">
            <MainHeading className={'text-center'}>
              FROM NERVOUS TO NATURAL. LET’S HIT THE ROAD.
            </MainHeading>

            <div className="mb-10">
              <Paragraph className={'text-center'}>
                Patient, professional driving lessons designed to help you gain confidence and pass with ease
              </Paragraph>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5 lg:justify-center">
              <MainButton>Book A Lesson Now</MainButton>
              <SecondaryButton>Learn More</SecondaryButton>
            </div>

            <div className="flex justify-center lg:justify-center gap-10">
              <div className="flex flex-col gap-1 text-center">
                <span className="text-3xl fw-medium text-blue-primary">100+</span>
                <span className="text-blue-primary">Passed Clients</span>
              </div>

              <div className="flex flex-col gap-1 text-center">
                <span className="text-3xl fw-medium text-blue-primary">100+</span>
                <span className="text-blue-primary">Passed Clients</span>
              </div>
            </div>
          </div>

          <div className='w-full h-full absolute top-0 right-0 -z-1 blur-xs'>
            {/* <AnimatedGridBG
            speed={0.2} 
            squareSize={40}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#f1f1f1'
            hoverFillColor='#222'
            /> */}

            <Hyperspeed/>
          </div>
        </div>

        {/* Hero Image */}
        {/* <div className="h-full hero-image hidden lg:flex"></div> */}
      
      </div>
    </div>
  )
}

export default HeroSection