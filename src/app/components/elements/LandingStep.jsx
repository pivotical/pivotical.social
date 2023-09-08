import Image from 'next/image'
import React from 'react'

const LandingStep = ({ image, title, description,hastags }) => {
    return (
        <div class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center ">
            <Image src={image} class="max-w-[245px] mx-auto hover:rounded-lg hover:shadow-xl hover:scale-105" alt="" />
            <h2 class="text-xl text-neutral-800 font-semibold">{title}</h2>
            <div className='max-h-28 md:max-h-20'>
            <p class="text-sm text-gray-700 leading-relaxed">
                {description}
            </p>
            <p class="text-sm text-blue-700 leading-relaxed">
                {hastags}
            </p>
            </div>
        </div>
        )
}

export default LandingStep