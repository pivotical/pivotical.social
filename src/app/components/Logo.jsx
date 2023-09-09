import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png';

const Logo = () => {
  return (
    <div className='h-auto w-16'>
        <Image src={logo} priority={true} quality={100}/>
    </div>
  )
}

export default Logo