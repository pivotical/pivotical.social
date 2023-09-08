import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { teamlist } from '../utils/data'
import MainHeading from './headings/MainHeading'

const OurTeam = () => {
    return (

        <div id="ourteam" className="bg-bgcolor scroll-mt-28 text-textcolor">
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                    <MainHeading text='Meet Our Team' className='!text-4xl md:!text-5xl  !text-center font-bold  ' />

                    <p className='my-4 text-lg md:text-lg text-center font-light  lg:px-36 hover:text-brandcolor transition hover:scale-105 '>
                         to the fact that we are guided by a growth mindset and the right tone.
                    </p>
                </div>
                <div className="grid gap-8 items-center md:grid-cols-4">
                    {teamlist.map(({ name, position, image, social }, index) => (
                        <div className="space-y-3 text-center hover:-translate-y-2 transform transition duration-75 ease-in-out " key={index}>
                            <img
                                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src={image}
                                alt={name}
                                loading="lazy"
                                width="640"
                                height="805"
                            />
                            <div>
                                <h4 className="text-2xl">{name}</h4>
                                <span className="block text-sm text-gray-500">{position}</span>
                            </div>
                            <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                                <Link href={social.linkedin} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                    <BsLinkedin className="text-indigo-500 mx-auto mt-2" />
                                </Link>

                                <Link href={social.twitter} className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                    <FaTwitter className="mdi mdi-twitter text-blue-300 mx-auto mt-2" />
                                </Link>

                                <Link href={social.instagram} className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                    <BsInstagram className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default OurTeam