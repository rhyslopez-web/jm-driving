import React from 'react'
import { ReactLenis} from 'lenis/react'

const Lenis = ({children}) => {
  return (
    <ReactLenis options={{ duration: 2 }} root>
        {children}
    </ReactLenis>
  )
}

export default Lenis