import React from 'react'

const MainButton = ({children}) => {
  return (
    <button className='bg-blue-primary px-10 py-3 rounded-full text-white'>
        {children}
    </button>
  )
}

export default MainButton