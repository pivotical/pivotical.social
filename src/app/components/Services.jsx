import React from 'react'
import { serviceList } from '../utils/data'
import MainHeading from './headings/MainHeading'

export default function Services() {
  return (

    <>
      <div
        id="services"
        className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-bgcolor scroll-mt-10"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">

          <header className="text-center mx-auto mb-12 lg:px-20">
            <MainHeading text='Our Solutions' className='!text-4xl md:!text-5xl  !text-center font-bold mb-6 ' />
            <p className="text-brandcolor leading-relaxed  font-semibold  text-lg mx-auto pb-2 hover:text-brandcolor transition hover:scale-105">
              Save time managing advertising &amp; Content for your business.
            </p>
          </header>

          <div className="flex flex-wrap flex-row -mx-4 text-center">

            {serviceList.map((service) => (
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp "
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 shadow-extracolor shadow-sm border-b border-gray-100 transform transition duration-300 ease-in-out text-textcolor hover:text-white  hover:bg-primarycolor hover:-translate-y-2">
                  <div className="inline-block  mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      fill="currentColor"
                      className="bi bi-badge-ad"
                      viewBox="0 0 16 16"
                    >
                      <path d={service.path}></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold ">
                    {service.title}
                  </h3>
                  <p className="">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </>

  )
}
