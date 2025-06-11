    import Link from 'next/link'
    import React from 'react'
    import MainButton from './MainButton'
    import { Phone } from 'lucide-react'


    const Navbar = () => {
    return (    
        <nav className="bg-blue-primary w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 relative">
        <div className="max-w-screen-xl relative flex items-center justify-between mx-auto p-4">
            
            {/* Left - Logo */}
            <a href="/" className="flex items-center space-x-3 z-10">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
            </a>

            {/* Center - Menu Links */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
            <ul className="flex space-x-8 font-medium text-white">
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/policies" className="hover:underline">Policies</Link></li>
            </ul>
            </div>

            {/* Right - Button */}
            <div className="flex items-center space-x-3 z-10">
            <button className='bg-white px-7 py-3 rounded-full text-blue-primary flex gap-3 items-center justify-center shadow-lg'>
                <Phone color='#5A5CF3' />
                Book Now
            </button>
            </div>
        </div>
        </nav>

    )
    }

    export default Navbar





