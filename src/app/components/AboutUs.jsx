import React from 'react'
import MainHeading from './headings/MainHeading'
import Button from './buttons/Button'
import Link from 'next/link'
import { AiOutlineContacts } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import AboutUsPic from '../../../public/aboutus.jpg';
import ServiceCards from './elements/ServiceCards';


const AboutUs = () => {
    return (
        <main id='about' className=' relative flex items-center  w-full h-auto md:pt-4 scroll-mt-28'>
            <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-3 pt-0 w-full">
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-4  flex flex-col items-center  self-center px-4 lg:px-0">
                        {/* <MainHeading text='About Us' className=' !text-4xl md:!text-5xl !text-center  font-bold md:px-36 mb-14' /> */}
                        <MainHeading text='" Discover the Power of Social Media Marketing for your Business "' className=' !text-3xl md:!text-4xl !text-center font-semibold lg:px-72' />
                        <p className='my-4 text-base md:text-lg md:text-center font-light  lg:px-36'>
                            We offera range of social media marketing services to help you grow your online presence.From content creation to audience engagement,we've got you covered.
                            We offera range of social media marketing services to help you grow your online presence.From content creation to audience engagement,we've got you covered.
                        </p>
                        <div className='w-full flex items-center justify-center  mt-2'>
                            <div class="grid gap-4 md:grid-cols-2 px-8">
                                <ServiceCards />
                                <ServiceCards />
                                <ServiceCards />
                                <ServiceCards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs