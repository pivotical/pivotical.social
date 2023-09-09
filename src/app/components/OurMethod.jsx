import React from 'react'
import MainHeading from './headings/MainHeading'
import { ourMethods } from '../utils/data'
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const OurMethod = () => {
    return (


        <main id='about' className=' relative flex items-center  w-full h-auto md:pt-4 scroll-mt-28'>
            <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-3 pt-0 w-full">
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-4  flex flex-col items-center  self-center px-4 lg:px-0">
                        <MainHeading text='Our Mission' className='!text-3xl md:!text-4xl !text-center font-bold lg:px-72' />
                        <p className=' mt-2 text-base md:text-lg md:text-center font-light  lg:px-36'>
                                Learn     Create     Innovate
                        </p>
                        <p className='text-base md:text-lg md:text-center font-light  lg:px-36'>
                        #CreativityUnleashed  #BusinessInnovation  #DigitalSupremacy
                        </p>
                        <section class="text-gray-600">
                            <div class="container px-5 py-6 mx-auto">
                                <div class="flex flex-wrap -m-4">
                                    {
                                        ourMethods.map(({ icon, title, description,hashTags, id }) => (
                                            <div class="p-4 lg:w-1/3 " key={id}>
                                                <div class="h-full flex flex-col items-center  justify-start bg-gradient-to-r from-slate-100 to-slate-300 bg-opacity-75 px-8 pt-16 pb-24  rounded-lg overflow-hidden text-center relative shadow-lg hover:from-zinc-100 hover:to-zinc-400 transition hover:scale-105 ">
                                                    <div>
                                                        {icon}
                                                    </div>
                                                    <h1 class=" sm:text-4xl text-xl font-bold text-gray-900 mb-4">{title}</h1>
                                                    <p class="leading-relaxed mb-3 text-base">{description}</p>
                                                    <p class="leading-relaxed mb-3 text-base text-indigo-500">{hashTags}</p>

                                                    
                                                </div>
                                            </div>

                                        ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default OurMethod