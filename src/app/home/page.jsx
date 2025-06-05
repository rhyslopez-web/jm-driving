import React from 'react'
import HeroSection from '../components/HeroSection'
import HomeAbout from '../components/HomeAbout'
import LogoSlider from '../components/LogoSlider'
import HomeServicesRow from '../components/HomeServicesRow'
import HomeReviews from '../components/HomeReviews'
import HomeGallery from '../components/HomeGallery'
import AnimatedGridBG from '../components/AnimatedGridBG'

const page = () => {
  return (
    <>
      <HeroSection/>
      <HomeAbout/>
      <LogoSlider/>
      <HomeServicesRow/>
      <HomeReviews/>
      <HomeGallery/>
    </>
  )
}

export default page