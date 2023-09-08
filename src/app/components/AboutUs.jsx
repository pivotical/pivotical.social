import React from 'react'
import MainHeading from './headings/MainHeading'
import Button from './buttons/Button'



const AboutUs = () => {
    return (
        <main
            class="md:py-16 lg:py-24"
            id="id='about'">
          
                <div
                    class="mx-auto w-5/6 h-56 bg-textcolor group hover:bg-white py-12 shadow-inner rounded-lg hover:border-2  hover:border-textcolor
                     md:w-11/12 "
                >
                    <div className="w-full mt-0 md:mt-4  flex flex-col   items-center  self-center px-4">
                        <div className='w-full mx-auto py-2 flex items-center justify-center md:justify-start overflow-hidden'>
                            <h1
                                className={`inline-block w-full  capitalize !text-4xl md:!text-5xl !text-center font-bold lg:px-72`}

                            >
                                <span className='text-white group-hover:text-textcolor '>
                                    Pillars of our Success
                                </span>

                            </h1>
                        </div>
                        {/* <MainHeading text='Pillars of our Success' className=' !text-4xl md:!text-5xl !text-center font-bold lg:px-72 ' /> */}
                        <p className='my-4 text-lg md:text-lg text-center text-white font-light  lg:px-36 group-hover:text-brandcolor transition hover:scale-105'>
                            We "Pivot", and "-ical(meaning: of or pertaining to)" refer to the fact that we are guided by a growth mindset and the right tone.
                        </p>
                    </div>
            </div>
        </main>

    )
}

export default AboutUs
{/* <main id='about' className='relative flex items-center  w-full h-auto md:pt-4  scroll-mt-28'>
            <div className="inline-block z-0   p-8 md:px-16 md:pt-3 pt-0 w-full">
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-4  flex flex-col items-center  self-center px-4 lg:px-0">
                     <MainHeading text='About Us' className=' !text-4xl md:!text-5xl !text-center  font-bold md:px-36 mb-14' />
                        <MainHeading text='Pillars of our Success' className=' !text-4xl md:!text-5xl !text-center font-bold lg:px-72' />
                        <p className='my-4 text-lg md:text-lg text-center font-light  lg:px-36 hover:text-brandcolor transition hover:scale-105'>
                        We "Pivot", and "-ical(meaning: of or pertaining to)" refer to the fact that we are guided by a growth mindset and the right tone. 
                        </p>
                    </div >
                </div >
            </div >
        </main > */}
