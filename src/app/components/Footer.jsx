import React from 'react'
import Paragraph from './Paragraph'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-blue-primary px-10 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0'>
            {/* footer left */}
            <div className='flex flex-col gap-5'>
                <a href='/' className=''>
                    <img src='Logo.svg' className='w-30 lg:w-50'/>
                </a> 
                <div className='lg:w-1/3'>
                    <Paragraph className={'text-white'}>
                        Helping you drive with confidence.
                    </Paragraph>
                </div>
            </div>

            {/* footer right */}
            <div className='flex justify-between lg:justify-end gap-10'>
                <div className='text-white flex flex-col gap-5'>
                    <label className='text-white font-semibold lg:text-end'>Menu</label>
                    <ul className='lg:text-end'>
                        <li><Link href={'/services'}>Services</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/policies'}>Policies</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer