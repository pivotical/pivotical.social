'use client'
import React from 'react'
import ScrollCarousel from 'scroll-carousel-react';
import 'node_modules/scroll-carousel/dist/scroll.carousel.min.css';
import FeaturePic from '../../../public/sign-post.png'
import Image from 'next/image';
import MainHeading from './headings/MainHeading';


const OurClients = () => {
    return (
        <main id='clients' className=' relative flex items-center  w-full h-auto md:pt-4 scroll-mt-28'>
            <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-3 pt-0 w-full">
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-4  flex flex-col items-center  self-center px-4 lg:px-0">
                        <MainHeading text='Our Clients' className='!text-3xl md:!text-4xl !text-center font-bold lg:px-72' />
                        <p className='mt-4 mb-16 text-base md:text-lg md:text-center font-light  lg:px-36'>
                            We offera range of social media marketing services to help you grow your online presence.From content creation to audience engagement,we've got you covered.
                        </p>
                       
                            <ScrollCarousel
                                autoplay
                                autoplaySpeed={5}
                                speed={4}
                                onReady={() => console.log('I am ready')}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                                    <div key={item} className='shadow-lg rounded-2xl bg-slate-100 h-32 w-44 flex items-center justify-center'>
                                        <Image src={FeaturePic}
                                            className='h-36 rounded w-full object-cover object-center'
                                            quality={100}
                                            priority={true}
                                            alt="Idea of Pivotical" />
                                    </div>
                                ))}
                            </ScrollCarousel>
                       

                    </div>
                </div>
            </div>
        </main>

    )
}

export default OurClients