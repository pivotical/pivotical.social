import Image from 'next/image'
import React from 'react'

const LandingStep = ({ image, title, description,hastags }) => {
    return (
        <div class="max-w-[400px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center ">
            <Image src={image} class="max-w-[245px] mx-auto hover:rounded-lg hover:shadow-xl hover:scale-105 transition shadow-text-brandcolor" alt="" />
            <h1 class="text-3xl text-textcolor font-bold">{title}</h1>
            <div className='min-h-[13rem]  '>
            <p  class="text-lg  pb-2 md:pb-2 text-brandcolor leading-relaxed">
                {hastags}
            </p>
            <p class="text-base text-textcolor leading-relaxed hover:scale-105 transition">
                {description}
            </p>
            
            </div>
        </div>
        )
}

export default LandingStep