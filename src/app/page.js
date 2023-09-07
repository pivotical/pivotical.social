import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import FeatureTop from './components/FeatureTop'
import HeroSection from './components/HeroSection'
import OurMethod from './components/OurMethod'
import SectionDivider from './components/SectionDivider'
import dynamic from 'next/dynamic';
import OurSteps from './components/elements/OurSteps'
import Services from './components/Services'


const OurClients = dynamic(() => import('./components/OurClients'), { ssr: false });


export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />


      <FeatureTop />
      <SectionDivider />

      <AboutUs />
      <SectionDivider />

      {/* <OurMethod /> */}
      <OurSteps/>
      <SectionDivider />

      <OurClients/>
      <SectionDivider />

      <Services/>
      <SectionDivider />
      
      <ContactUs/>
      <SectionDivider />

    </>
  )
}
