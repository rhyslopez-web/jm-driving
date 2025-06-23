import React from 'react'

const CardTitle = ({children, className}) => {
  return (
    <h2 className={className + ' font-primary leading-tight text-[clamp(1rem,3vw,1.75rem)] text-blue-primary'}>
    {children}
    </h2>

  )
}

export default CardTitle