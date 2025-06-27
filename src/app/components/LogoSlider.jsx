'use client'

import React from 'react'
import Slider from 'react-infinite-logo-slider'
import SliderText from './SliderText'


const LogoSlider = () => {
  return (
    <>
      <div className='h-30 bg-blue-primary w-full lg:flex hidden items-center overflow-hidden'>
        <Slider
        width="600px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={'#fff'}
        >
          <Slider.Slide>
            <SliderText className={'text-white text-4xl'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
          <Slider.Slide>
            <SliderText className={'text-white text-4xl'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
        </Slider>
      </div>
      
      {/* Mobile Ticker */}
      <div className='h-40 bg-blue-primary w-full flex items-center overflow-hidden lg:hidden'>
        <Slider
        width="600px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={'#fff'}
        >
          <Slider.Slide>
            <SliderText className={'text-white'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
          <Slider.Slide>
            <SliderText className={'text-white'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
          <Slider.Slide>
            <SliderText className={'text-white'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
          <Slider.Slide>
            <SliderText className={'text-white'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
          <Slider.Slide>
            <SliderText className={'text-white'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
          <Slider.Slide>
            <SliderText className={'text-white'}>Driving Lessons that Stick</SliderText>
          </Slider.Slide>
        </Slider>
      </div>
    </>
  )
}

export default LogoSlider