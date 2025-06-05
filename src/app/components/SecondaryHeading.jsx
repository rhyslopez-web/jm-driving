import React from 'react'

const SecondaryHeading = ({children, className}) => {
  return (
    <h2 className={className + ' font-primary leading-tight text-[clamp(1.5rem,4vw,2.5rem)] text-blue-primary'}>
        {children}
    </h2>
  )
}

export default SecondaryHeading