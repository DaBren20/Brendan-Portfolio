import React from 'react'
import Skills from './Skills'

const About = () => {
    return (
        <div className="about">
            <div className='aboutTitle'>
                <h1>About Me:</h1>
                <img src='https://www.facebook.com/photo/?fbid=10159142206810311&set=a.10150294163695311' alt='Picture of me' />
            
            </div>
            <h5>My name is Brendan Polius Prosper</h5>
            <p style={{fontSize: 15}}>
                Hey how's it going. Welcome to my portfolio. I am a graduate from Seneca college and I have also graduated from George Brown college as well.
                I love technology and I am very passionate about tech hardware and software related fields. I have been coding for three years now and I have 
                found that I love web programming the most interesting and I have learned how to make web applications using the <b>MERN</b> stack. I love programming
                and I am always willing to learn more everyday. If you want to learn more about me please download my resume!  
            </p>
            <hr />
            <Skills />    
        </div>
    )
}

export default About
