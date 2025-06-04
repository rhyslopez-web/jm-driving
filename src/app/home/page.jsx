import React from 'react'
import HeroSection from '../components/HeroSection'
import HomeAbout from '../components/HomeAbout'
import LogoSlider from '../components/LogoSlider'
import HomeServicesRow from '../components/HomeServicesRow'
import HomeReviews from '../components/HomeReviews'

const page = () => {
  return (
    <>
      <HeroSection/>
      <HomeAbout/>
      <LogoSlider/>
      <HomeServicesRow/>
      <HomeReviews/>
    </>
  )
}

export default page