import React from 'react'
import { MdAttachEmail } from 'react-icons/md';
import { AiOutlineContacts } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import MainHeading from './headings/MainHeading';
import Image from 'next/image';
import Link from 'next/link';
import HeroPic from '../../../public/LandingImage.png';
import Button from './buttons/Button';

const HeroSection = () => {
    return (
        <main id='home' className=' relative flex items-center text-dark w-full h-auto md:pt-4 scroll-mt-28'>
            <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-3 pt-0 w-full">
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-4 md:w-1/2 flex flex-col items-center md:items-start self-center md:self-start px-4 md:px-0 ">
                        <MainHeading text='Boost Your Social Media Presence Today' className='!text-4xl md:!text-6xl !text-center md:!text-left font-bold' />
                        <p className='my-4 text-base md:text-lg md:text-left font-light'>
                            We offera range of social media marketing services to help you grow your online presence.From content creation to audience engagement,we've got you covered.
                            We offera range of social media marketing services to help you grow your online presence.From content creation to audience engagement,we've got you covered.
                            We offera range of social media marketing services to help you grow your online presence.From content creation to audience engagement,we've got you covered.
                        </p>
                        <div className='flex items-center justify-center md:items-start mt-2'>

                            <Link href={""}>
                                <Button
                                    icon={<AiOutlineContacts size={24} className="w-6 ml-1" />}
                                    classnames={`hover:text-black hover:bg-white hover:scale-110  `}
                                    label="Contact Us"
                                >
                                </Button>
                            </Link>
                            <Link href={""} className='ml-5'>
                                <Button
                                    outline
                                    classnames={`hover:text-white hover:bg-black hover:scale-110`}
                                    icon={<FiArrowUpRight size={24} className="w-6 ml-1" />}
                                    label="Know More"
                                >
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
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