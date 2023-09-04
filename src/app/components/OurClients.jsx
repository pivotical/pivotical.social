'use client'
import React from 'react'
import ScrollCarousel from 'scroll-carousel-react';
import 'node_modules/scroll-carousel/dist/scroll.carousel.min.css';
import FeaturePic from '../../../public/sign-post.png'
import Image from 'next/image';


const OurClients = () => {
    return (
        <ScrollCarousel
            autoplay
            autoplaySpeed={8}
            speed={7}
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
        </ScrollCarousel>)
}

export default OurClients