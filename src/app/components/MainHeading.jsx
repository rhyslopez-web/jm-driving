import React from 'react'

const MainHeading = ({children, className}) => {
  return (
    <h1 className={className + " font-primary leading-tight text-[clamp(2rem,6vw,3.75rem)] lg:text-6xl text-blue-primary" }>
        {children}
    </h1>
  )
}

export default MainHeading