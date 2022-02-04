import React from 'react'
import Pdf from '../assets/pdf/Brendan_Polius_Prosper_Resume_2022.pdf'


const Hero = () => {
    return (
        <div className='hero'>
            <div>
                <h1>Welcome to my Portfolio!</h1>
            </div>
            <h3>Brendan Polius Prosper</h3>
            <p>Full-stack developer</p>
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/brendan-polius-prosper-b4bb59225/" role="button"><i className="bi bi-linkedin"></i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/DaBren20" role="button"><i className="bi bi-github"></i></a> 
            <br />
            <br />
            <br />
            <h4>Click here to download my resume</h4>
            <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                <button type="submit" className="btn btn-primary btn-lg">Resume</button>
            </a>    
        </div>
    )
}

export default Hero
