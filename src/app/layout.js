import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'

import { Inter } from 'next/font/google';

const font = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Pivotical',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${font.className} bg-bgcolor text-textcolor static`}>
        <div className="bg-[#fbe2e3]  absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
