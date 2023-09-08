import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'

const OurTeam = () => {
    return (
        <div id="ourteam" class="py-20 bg-gray-50  scroll-mt-28">
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2>
                    <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
                </div>
                <div class="grid gap-8 items-center md:grid-cols-4">
                    <div class="space-y-3 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
                        <div>
                            <h4 class="text-2xl">Hentoni Doe</h4>
                            <span class="block text-sm text-gray-500">CEO-Founder</span>
                        </div>
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                            <Link href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <BsLinkedin class=" text-indigo-500 mx-auto mt-2 "/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                <FaTwitter class="mdi mdi-twitter text-blue-300 mx-auto mt-2"/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                <BsInstagram class="mdi mdi-instagram text-orange-400 mx-auto mt-2"/>
                            </Link>
                        </div>
                    </div>
                    <div class="space-y-3 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
                        <div>
                            <h4 class="text-2xl">Hentoni Doe</h4>
                            <span class="block text-sm text-gray-500">CEO-Founder</span>
                        </div>
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                            <Link href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <BsLinkedin class=" text-indigo-500 mx-auto mt-2 "/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                <FaTwitter class="mdi mdi-twitter text-blue-300 mx-auto mt-2"/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                <BsInstagram class="mdi mdi-instagram text-orange-400 mx-auto mt-2"/>
                            </Link>
                        </div>
                    </div>
                    <div class="space-y-3 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
                        <div>
                            <h4 class="text-2xl">Hentoni Doe</h4>
                            <span class="block text-sm text-gray-500">CEO-Founder</span>
                        </div>
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                            <Link href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <BsLinkedin class=" text-indigo-500 mx-auto mt-2 "/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                <FaTwitter class="mdi mdi-twitter text-blue-300 mx-auto mt-2"/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                <BsInstagram class="mdi mdi-instagram text-orange-400 mx-auto mt-2"/>
                            </Link>
                        </div>
                    </div>

                    <div class="space-y-3 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 class="text-2xl">Anabelle Doe</h4>
                            <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                        </div>
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                            <Link href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                <BsLinkedin class=" text-indigo-500 mx-auto mt-2 "/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                <FaTwitter class="mdi mdi-twitter text-blue-300 mx-auto mt-2"/>
                            </Link>

                            <Link href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                <BsInstagram class="mdi mdi-instagram text-orange-400 mx-auto mt-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam