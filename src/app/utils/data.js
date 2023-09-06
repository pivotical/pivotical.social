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
        name: 'about',
        link: '/about'
    },


]
export const footerlinks = [
    {
        id: 1,
        section: 'Resources',
        sectionlinks: [
            {
                id: 112,
                href: 'footerlinkssss',
                name: 'footerlinkssss'
            },
            {
                id: 113,
                href: 'about',
                name: 'footerlinkssss'
            },
            {
                id: 134,
                href: 'about',
                name: 'footerlinkssss'
            },
        ]
    },
    {
        id: 1,
        section: 'SocialMedia',
        sectionlinks: [
            {
                id: 12345,
                href: 'footerlinkssss',
                name: 'footerlinkssss'
            },
            {
                id: 5678,
                href: 'about',
                name: 'footerlinkssss'
            },
            {
                id: 345678,
                href: 'about',
                name: 'footerlinkssss'
            },
        ]
    },

]


export const ourMethods = [
    {
        id: 12345,
        title: "Raclette Blueberry Nextious Level",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        icon: <FaBuffer size={30} className="w-10 font-extrabold text-2xl text-black" />
    },
    {
        id: 45678,
        title: "Raclette Blueberry Nextious Level",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        icon: <FcReading size={30} className="w-10 font-extrabold text-2xl text-black" />
    },
    {
        id: 345678,
        title: "Raclette Blueberry Nextious Level",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
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