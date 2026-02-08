import React from 'react'
import { Hero } from './sections/Hero'
import { ShowcaseSection } from './sections/ShowcaseSection'
import FeatureCards from './sections/FeatureCards'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero />
            <ShowcaseSection />
            <FeatureCards/>
        </>
    )
}

export default App