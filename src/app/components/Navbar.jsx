'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import MainButton from './MainButton'
import { Hamburger, Menu, Phone, X } from 'lucide-react'
import { RemoveScroll } from 'react-remove-scroll'
import { AnimatePresence, motion } from "motion/react"


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)

const handleIsOpen = () => {
    setIsOpen(!isOpen)
}

return (    
    <nav className="bg-blue-primary w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 sticky">
    <div className="max-w-screen-7xl relative flex items-center justify-between mx-auto p-7">
        
        {/* Left - Logo */}
        <a href="/" className="flex items-center space-x-3 z-10">
        <img src='Logo.svg' className='w-30 lg:w-50' />
        </a>

        {/* Center - Menu Links */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
        <ul className="flex space-x-8 text-white">
            <li><Link href="/services" className="text-white-primary hover:text-blue-200 transition ease-in-out duration-200">Services</Link></li>
            <li><Link href="/about" className="text-white-primary hover:text-blue-200 transition ease-in-out duration-200">About</Link></li>
            <li><Link href="/policies" className="text-white-primary hover:text-blue-200 transition ease-in-out duration-200">Policies</Link></li>
            <li><Link href="/contact" className="text-white-primary hover:text-blue-200 transition ease-in-out duration-200">Contact</Link></li>
        </ul>
        </div>

        {/* Right - Button */}
        <div className="items-center space-x-3 z-10">
            <a href="tel:+1-778-980-0645" className='bg-white px-7 py-3 rounded-full text-blue-primary gap-3 items-center justify-center shadow-lg hidden md:flex'>
                <Phone color='#5A5CF3' />
                (778) 980-0645
            </a>

            <div onClick={handleIsOpen} className='flex lg:hidden'>
                {
                isOpen
                ?
                <X color='white' />
                :
                <Menu color='white'/>
                }
            </div>
        </div>
    </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {
                isOpen && (
                    <RemoveScroll>
                    <motion.div 
                    initial={{x: 500}}
                    animate={{x: 0}}
                    exit={{x:500}}
                    transition={{duration: 0.3, type: 'easeinout'}}
                    className='fixed top-0 h-screen bg-blue-primary w-full flex justify-center items-center'
                    >
                        <ul className=" flex flex-col gap-5 text-white-primary">
                            <li><Link href="/services" onClick={handleIsOpen} className="text-white-primary hover:text-blue-200 text-5xl font-semibold transition ease-in-out duration-200">Services</Link></li>
                            <li><Link href="/about" onClick={handleIsOpen} className="text-white-primary hover:text-blue-200 text-5xl font-semibold transition ease-in-out duration-200">About</Link></li>
                            <li><Link href="/policies" onClick={handleIsOpen} className="text-white-primary hover:text-blue-200 text-5xl font-semibold transition ease-in-out duration-200">Policies</Link></li>
                            <li><Link href="/contact" onClick={handleIsOpen} className="text-white-primary hover:text-blue-200 text-5xl font-semibold transition ease-in-out duration-200">Contact</Link></li>
                            <li className=''>
                                <a href="tel:+1-778-980-0645" className='bg-white-primary flex text-blue-primary justify-center gap-3 px-7 py-3 rounded-full'>
                                    <Phone color='#5A5CF3' />
                                    (778) 980-0645
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                    </RemoveScroll>     
                )
            }
        </AnimatePresence>
    </nav>

)
}

export default Navbar





