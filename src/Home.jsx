import React from 'react'
import Hero from './page/Hero'
import AboutUsSection from './page/AboutUsSection'
import ZodiacGridSection from './page/ZodiacGridSection'
import ServicesSection from './page/ServicesSection'
import TestimonialsSection from './page/TestimonialsSection'
import BlogSection from './page/BlogSection'
import PricingSection from './page/PricingSection'
import Footer from './page/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutUsSection/>
        <ZodiacGridSection/>
        <ServicesSection/>
        <TestimonialsSection/>
        <BlogSection/>
        <PricingSection/>
        <Footer/>
    </div>
  )
}

export default Home