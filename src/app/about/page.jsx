import React from 'react'
import Banner from '../components/elements/Banner'
import OurSteps from '../components/elements/OurSteps'
import SectionDivider from '../components/SectionDivider'
import OurStory from '../components/elements/OurStory'

const AboutUsPage = () => {
  return (
    <>
      <Banner
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" // Replace with your desired image URL
        title="Our Story"
        buttonText="Know more about us"
      />
      <OurStory />
      <SectionDivider classNameS='my-1 h-8' />

      <OurSteps />
      <SectionDivider />

    </>
  )
}

export default AboutUsPage