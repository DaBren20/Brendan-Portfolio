import React from 'react'
import Card from './Card'
import LongCard from './LongCard'
import shopcart from '../assets/shopcart.png'
import Ubergains from '../assets/Ubergains.png'

const Projects = () => {
    return (
        <div className='projects'>
            <LongCard name="ShopCart" img={shopcart} tools="Tools: React/React Router • ExpressJS • NodeJS • MongoDB • Bootstrap *Deployed on Netlify*" alt="Shopcart" description="This is a mock shop website that is made using the MERN stack. All product items are pulled from a mongoDB database. The product items are displayed using props and state. Items can be viewed by bestseller and by category as well." link="https://sleepy-noyce-290ab9.netlify.app" />
            <LongCard name="UberGains" img={Ubergains} tools="Tools: NodeJS • ExpressJS • Handlebars • MongoDB • Bootstrap *Deployed on Heroku* " alt="UberGains" description="This is a mock food delivery website that uses nodeJS as it's backend and Handlebars and bootstrap as the front end. This website also supports account creation and login capabilities. Admin accounts can create, remove, update, and delete products from the mongoDB database." link="https://brendanassignment3-5.herokuapp.com/" />
        </div>
    )
}

export default Projects
