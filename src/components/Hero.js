import React from 'react'
import Footer from './Footer'

const Hero = () => {
    return (
        <div className='hero'>
            <div>
                <h1>Welcome to my Portfolio!</h1>
            </div>
            <h3>Brendan Polius Prosper</h3>
            <p>Full-stack developer</p>
            <br />
            <br />
            <br />
            <h4>Click here to download my resume</h4>
            <button type="button" className="btn btn-primary btn-lg">Resume</button>
        </div>
    )
}

export default Hero
