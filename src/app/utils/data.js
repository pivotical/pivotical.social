import { BsBoxArrowInUpRight } from "react-icons/bs"
import { FaBuffer, FaCanadianMapleLeaf } from "react-icons/fa"
import { FcReading } from "react-icons/fc"

export const links = [
    {
        id: 1,
        name: 'home',
        link: '/'
    },
    {
        id: 2,
        name: 'Our Story',
        link: '/about'
    },
    {
        id: 3,
        name: 'Our Mission',
        link: '#OurMission'
    },
    {
        id: 4,
        name: 'Our Services',
        link: '#services'
    },
    {
        id: 5,
        name: 'Team',
        link: '#ourteam'
    },
    




]
export const footerlinks = [
    {
        id: 1,
        section: 'Explore More',
        sectionlinks: [
            {
                id: 112,
                href: '/',
                name: 'Home'
            },
            {
                id: 113,
                href: 'about',
                name: 'Our Story'
            },
            {
                id: 114,
                href: '#OurMission',
                name: 'Our Mission'
            },
            {
                id: 115,
                href: 'about',
                name: 'Our Team'
            }, 
            {
                id: 116,
                name: 'Our Services',
                href: '/#services'
            },
            {
                id: 117,
                href: '/#ContactUs',
                name: 'Contact Us'
            },
        ]
    },
    {
        id: 1,
        section: 'More',
        sectionlinks: [
            {
                id: 12345,
                href: 'footerlinkssss',
                name: 'Personal Digital Branding'
            },
        ]
    },

]


export const ourMethods = [
    {
        id: 12345,
        title: "Learn",
        description: "We dive deep to learn our client's precise needs and expectations.",
        hashTags:"#CustomerObsession #Ownership",
        icon: <FcReading size={30} className="w-10 font-extrabold text-2xl text-black" />
        
    },
    {
        id: 45678,
        title: "Create",
        description: "We then use our own resources(for eg.initial test Ads nd) to cra pioneering solutions intricately designed to create a profound impact on the digital landscape that can generate unparalleled buzz across the internet and social media platforms.",
        hashTags:"#InventandSimplify #EarnTrust #Frugality",
        icon: <FaBuffer size={30} className="w-10 font-extrabold text-2xl text-black" />
    },
    {
        id: 345678,
        title: "Innovate",
        description: "That's when we leverage data-driven insights, conducting comprehensive analyti to drive tailored ongoing innovation, spearheading our position to be the best marketing campaign that remains unrivaled, even bythe most sophisticated algorithms.",
        hashTags:"#BiasforAction #ThinkBIG #DeliverResults",
        icon: <FaCanadianMapleLeaf size={30} className="w-10 font-extrabold text-2xl text-black" />
    },
    
]

export const serviceList=[
"Personal Digital Branding",
 "Business Digital Branding",
 "Digital Marketing",
 "Data Analytics",
 "Web-Development",
 "Education(Courses, Workshops, and Bootcamps)"
]