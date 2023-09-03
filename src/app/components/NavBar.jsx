"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { links } from '../utils/data'
import Link from 'next/link'
import Button from './buttons/Button'
import { AiOutlineContacts } from 'react-icons/ai'
import { FiArrowUpRight } from 'react-icons/fi'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    return (
        <header className='z-[999] relative'>
            <div className='fixed top-0 px-4 flex justify-between items-center w-full h-16 border border-white border-opacity-40 bg-white
            bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] text-gray-950 font-semibold '>
                <div >
                    <h2 className='text-3xl  ml-2'>
                        Logo
                    </h2>
                </div>
                <ul className='hidden md:flex'>
                    {links.map(({ link, id, name }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize font-semibold text-gray-950 hover:scale-105 duration-200  hover:text-gray-500'> <Link href={link}>{name}</Link></li>
                    ))}
                </ul>
                <div className='w-auto hidden md:flex'>
                <Button
                
                    icon={<FiArrowUpRight size={24} className="w-6 ml-1" />}
                    classnames={`hover:text-black hover:bg-white hover:scale-110  `}
                    label="Lets Talk"
                >
                </Button>
                </div>
                
                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black md:hidden'>
                    {nav ? <FaTimes className=' hover:text-gray-500' size={30} /> : <FaBars className=' hover:text-gray-500' size={30} />}
                </div>
                {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-800 text-black'>
                    {links.map(({ link, name, id }) => (
                        <li key={link} className='px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200 hover:text-gray-500'><Link onClick={() => setNav(false)} href={link}>{name}</Link></li>
                    ))}
                    <li className='px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200 hover:text-gray-500'><Link onClick={() => setNav(false)} href="#contact">Lets Talk</Link></li>
                </ul>}

            </div>
        </header >
    )
}

export default NavBar
