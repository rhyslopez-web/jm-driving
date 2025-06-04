import React from 'react'

const SecondaryButton = ({children, className}) => {
  return (
    <button className={className + ' border border-dashed border-blue-primary px-10 py-3 rounded-full text-blue-primary'}>
        {children}
    </button>
  )
}

export default SecondaryButton