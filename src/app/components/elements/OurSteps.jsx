import Image from 'next/image'
import React from 'react'
import ArrowPic from '../../../../public/arrow.png'
import StepsPic2 from '../../../../public/step-2.png'
import LandingStep from './LandingStep'
import MainHeading from '../headings/MainHeading'

const OurSteps = () => {
    return (
        <section  id="OurMission" class="relative max-w-full  sm:mx-4 xl:mx-10 shadow-md sm:rounded-2xl overflow-hidden bg-gray-100">
            <div class="w-full py-16 flex flex-col  items-center">
                <MainHeading text='Our Mission' className='text-4xl !text-center font-bold  ' />
                <p className='my-4 text-base text-center md:text-lg font-light'>
                    Learn Create Innovate
                </p>

                <div class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8">
                    <LandingStep image={StepsPic2} title={"Learn"} description={"We dive deep to research and understand our client’s exact needs and expectations."} hastags={"#CustomerObsession #Ownership"} />
                    <Image
                        src={ArrowPic}
                        class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
                        alt=""
                    />
                    <LandingStep image={StepsPic2} title={"Create"} description={"We allocate resources (e.g., initial test Ads fund) to develop cutting-edge solutions meticulously tailored to make a significant mark on the digital landscape, generating unprecedented buzz across the internet and social media platforms."} hastags={" #CreativityUnleashed #ThinkBIG"} />

                    <Image
                        src={ArrowPic}
                        class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
                        alt=""
                    />
                    <LandingStep image={StepsPic2} title={"Innovate "} description={"We harness data-driven insights, employing in-depth analytics to fuel tailored ongoing innovation, solidifying our position as the premier marketing campaign that surpasses even the most advanced algorithms. "} hastags={"#BusinessInnovation"} />

                </div>
            </div>
        </section>
    )
}

export default OurSteps