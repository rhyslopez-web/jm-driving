import React from 'react'

const MainButton = ({children, href, className}) => {
  return (
    <a href={href} className={className + ' bg-blue-primary px-7 py-3 rounded-full text-white flex gap-3 items-center justify-center transition ease-in-out duration-500 hover:shadow-blue-primary hover:shadow-lg'}>
      {children}
    </a>
  )
}

export default MainButton