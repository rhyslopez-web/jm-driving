import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import MainButton from './MainButton'
import SecondaryButton from './SecondaryButton'

const HeroSection = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 border-b border-blue-primary">
      {/* Hero Content */}
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-col w-4/5 gap-10">
          <MainHeading>
            FROM NERVOUS TO NATURAL. LET’S HIT THE ROAD.
          </MainHeading>

          <div className="w-4/5">
            <Paragraph>
              Patient, professional driving lessons designed to help you gain confidence and pass with ease
            </Paragraph>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-5">
            <MainButton>Book A Lesson Now</MainButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </div>

          <div className="flex justify-start gap-10">
            <div className="flex flex-col gap-1">
              <span className="text-3xl fw-medium text-blue-primary">100+</span>
              <span className="text-blue-primary">Passed Clients</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-3xl fw-medium text-blue-primary">100+</span>
              <span className="text-blue-primary">Passed Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-full hero-image rounded-bl-5xl"></div>
    
    </div>
  )
}

export default HeroSection