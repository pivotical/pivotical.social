import React from 'react'

const MainHeading = ({ text,
    className }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center md:justify-start   overflow-hidden'>
            <h1
                className={`inline-block w-full text-dark  capitalize ${className}`}

            >
                <span >
                    {text}
                </span>

            </h1>
        </div>)
}

export default MainHeading