import Image from 'next/image'
import React from 'react'
import MainHeading from '../headings/MainHeading'
import Link from 'next/link'
import { AiOutlineContacts } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import Button from '../buttons/Button';
import HeroPic from '../../../../public/sign-post.png';


const OurStory = () => {
    return (
        <main id='ourstory' className=' relative flex items-center text-dark w-full h-auto md:pt-2 scroll-mt-28'>
            <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-1 pt-0 w-full">
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-16 md:w-1/2 flex flex-col items-center md:items-start self-center md:self-start px-4 md:px-12">
                        <MainHeading text='Our Story' className='text-4xl !text-center md:!text-left font-bold mt-4 md:mt-0 ' />
                        <div className='flex flex-col items-center justify-center md:items-start '>
                            <p className='my-4 text-base text-center md:text-lg md:text-left font-light'>
                                A Symphony of Artificial, Analytical, and Human Intelligence. At Pivotical, our story is all about you.
                            </p>
                            <p className='mb-4 text-base text-center md:text-lg md:text-left font-light'>
                                We are more than just a company; we are the architects of stories, the impact creators, and the navigators of digital terrain. Our tale is one of innovation, where data-driven brilliance converges with creative artistry.
                            </p>
                            <p className='mb-4 text-base text-center md:text-lg md:text-left font-light'>
                                Founded by Abhishek K. Das, also the co-founder and CEO of rentspace.io - (a PropTech and all things rental service aggregator company), what began as a brainchild to have an in-house digital branding and marketing department has further evolved into an independent company with a diverse clientele, both at home and abroad.
                            </p>
                            <p className='mb-4 text-base text-center md:text-lg md:text-left font-light'>
                                We use data-driven insights to shape your digital journey. We create impactful marketing strategies to make the campaigns resonate and engage with your audience, thus giving us enough insights to turn them into actions that drive real results and further elevate your brand.
                            </p>
                            <p className='mb-4 text-base text-center md:text-lg md:text-left font-light'>
                                Your success is our motivation, and together, we'll shape your business growth trajectory.
                            </p>
                        </div>
                    </div>
                    <div className=" hidden w-full mt-8 md:w-1/2 md:flex items-center justify-center  ">
                        <Image src={HeroPic}
                            quality={100}
                            priority={true}
                            alt="Idea of Pivotical" />
                    </div>
                </div>
            </div>
        </main>)
}

export default OurStory