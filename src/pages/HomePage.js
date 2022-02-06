import React from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';

const HomePage = () => {
    return (
        <div className='home'>
            <header>
                <Menu></Menu>
            </header>

            <Hero></Hero>
            <Footer></Footer>   
        </div>
    )
}

export default HomePage
