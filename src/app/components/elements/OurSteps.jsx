import Image from 'next/image'
import React from 'react'
import ArrowPic from '../../../../public/arrow.png'
import StepsPic2 from '../../../../public/step-2.png'
import LandingStep from './LandingStep'
import MainHeading from '../headings/MainHeading'

const OurSteps = () => {
    return (
        <section class="relative max-w-full sm:mx-4 xl:mx-10 shadow-md sm:rounded-2xl overflow-hidden bg-gray-100">
            <div class="w-full py-16 flex flex-col items-center">
                <MainHeading text='Our Mission' className='text-4xl !text-center font-bold  ' />
                <p className='my-4 text-base text-center md:text-lg font-light'>
                    A Symphony of Artificial, Analytical, and Human Intelligence. At Pivotical, our story is all about you.
                </p>

                <div class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8">
                    <LandingStep image={StepsPic2} title={"Learn"} description={"We dive deep to learn our client's precise needs and expectations."} hastags={"#Ownership"} />
                    <Image
                        src={ArrowPic}
                        class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
                        alt=""
                    />
                    <LandingStep image={StepsPic2} title={"Create  "} description={"We then craft pioneering solutions intricately designed to create a profound impact on the digital landscape that can generate unparalleled buzz across the internet and social media platforms."} hastags={" #CreativityUnleashed #ThinkBIG"} />

                    <Image
                        src={ArrowPic}
                        class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
                        alt=""
                    />
                    <LandingStep image={StepsPic2} title={"Innovate "} description={"That's when we leverage data-driven insights, conducting comprehensive analytics to drive tailored ongoing innovation, spearheading our position to be the best marketing campaign that remains unrivaled, even by the most sophisticated algorithms. "} hastags={"#BusinessInnovation"} />

                </div>
            </div>
        </section>
    )
}

export default OurSteps