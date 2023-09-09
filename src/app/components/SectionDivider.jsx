import React from 'react'

const SectionDivider = ({
    classNameS = "my-2 h-16",
}) => {
    return (
        <div
            className={`bg-gray-200 ${classNameS} w-1 rounded-full hidden sm:block `}
        ></div>
    )
}

export default SectionDivider
