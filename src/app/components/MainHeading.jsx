'use client'

import React from 'react'
import { motion } from "motion/react"

const MainHeading = ({children, className}) => {
  return (
    <motion.h1
    // initial={{opacity: 0, y:100}}
    // whileInView={{opacity:1, y:0 , transition:{duration:0.5, ease: 'easeInOut'}}}
    className={className + " leading-tight text-[clamp(2rem,6vw,3.75rem)] lg:text-6xl text-blue-primary font-medium font-primary" }
    >
        {children}
    </motion.h1>
  )
}

export default MainHeading