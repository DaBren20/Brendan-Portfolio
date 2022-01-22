import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Cover from '../components/Cover';

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
