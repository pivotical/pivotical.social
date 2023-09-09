import React from 'react'
import { AiOutlineContacts } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import MainHeading from './headings/MainHeading';
import Image from 'next/image';
import Link from 'next/link';
import HeroPic from '../../../public/LandingImage.png';
import Button from './buttons/Button';

const HeroSection = () => {
    return (
        <main id='home' className=' relative flex items-center text-dark w-full h-auto md:pt-2 mt-28 scroll-mt-28'>
            <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-1 pt-0 w-full">
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-16 md:w-1/2 flex flex-col items-center md:items-start self-center md:self-start px-4 md:px-0">
                        <MainHeading text='A Fusion of Creativity and Data for Your Digital Branding and Marketing Success.' className='!text-4xl z-50 md:z-50 md:!text-6xl !text-center md:!text-left font-bold  ' />

                        <div className='flex items-center justify-center md:items-center md:ml-36 md:pl-10 mt-24'>
                            <Link href={"#ContactUs"}>
                                <Button
                                    icon={<AiOutlineContacts size={24} className="w-6 ml-1" />}
                                    classnames={`hover:text-black  hover:bg-white hover:scale-110  `}
                                    label="Contact Us"
                                >
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className=" hidden  mt-8 md:w-1/2 md:flex items-center justify-center ">
                        <Image src={HeroPic}
                            quality={100}
                            priority={true}
                            alt="Idea of Pivotical" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeroSection