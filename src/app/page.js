import AboutUs from './components/AboutUs'
import FeatureTop from './components/FeatureTop'
import HeroSection from './components/HeroSection'
import OurMethod from './components/OurMethod'
import SectionDivider from './components/SectionDivider'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      
      <FeatureTop />
      <SectionDivider />

      <AboutUs />
      <SectionDivider />

      <OurMethod />
      <SectionDivider />

    </>
  )
}
