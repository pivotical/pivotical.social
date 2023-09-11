import React from 'react'
import MainHeading from './headings/MainHeading'
import ServiceCards from './elements/ServiceCards'
import Image from 'next/image'
import FeaturePic from '../../../public/FeatureTop.png'

export default function FeatureTop() {
  return (
    <main id="FeatureTop" class=" relative flex items-center  w-full h-auto md:pt-4  scroll-mt-28" >
      <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-3 pt-0 w-full">
        <div className='flex flex-col  md:flex-row items-center justify-between w-full'>

          <div class=" h-auto  md:w-1/2 md:pl-20" >
            <Image src={FeaturePic}
              quality={100}
              width={500}
              priority={true}
              alt="Idea of Pivotical" />
          </div>

          <div class=" h-auto md:w-1/2" >
            <div>
              <MainHeading text='Discover the power of Social Media marketing for your business.'
                className='!text-3xl md:!text-5xl !text-center md:!text-left font-bold' />

              <p className='my-4 text-base text-center md:text-lg md:text-left font-normal'>
                Our social media marketing service helps business and individual reach their target audiance, increace brand visibility, drive engagement.
              </p>
            </div>

            <div class="w-full flex items-center justify-center  mt-2" >
              <div class="grid gap-4 md:grid-cols-2 mt-6">
                <ServiceCards heading={"Increase Reach"} content={"Expand your online presence and connect with potential customers through stratigic and social media campain"} />
                <ServiceCards heading={"Drive Engagement"} content={"Create compelling content that sparks converstaion and builds a loyal community."} />
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}
