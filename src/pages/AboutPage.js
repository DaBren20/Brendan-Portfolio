import React from 'react'
import Menu from '../components/Menu'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

const AboutPage = () => {
    return (
        <div className='aboutpage'>
            <Menu />
            <About />
            <hr />
            <Skills />
            <Footer />
        </div>
    )
}

export default AboutPage
