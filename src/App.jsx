import React from 'react'
import { Hero } from './sections/Hero'
import { ShowcaseSection } from './sections/ShowcaseSection'
import FeatureCards from './sections/FeatureCards'

const App = () => {
    return (
        <>
            <Hero />
            <ShowcaseSection />
            <FeatureCards/>
        </>
    )
}

export default App