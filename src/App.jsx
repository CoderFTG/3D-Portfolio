import React from 'react'
import { Hero } from './sections/Hero'
import { ShowcaseSection } from './sections/ShowcaseSection'
import FeatureCards from './sections/FeatureCards'
import Navbar from './components/Navbar'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero />
            <ShowcaseSection />
            <FeatureCards/>
            <ExperienceSection/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App