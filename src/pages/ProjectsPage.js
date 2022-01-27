import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import { createSearchParams } from 'react-router-dom'

const ProjectsPage = () => {
    return (
        <div>
            <Menu></Menu>
                <body>
                    <h1 style={{textAlign: "center"}}>My Projects</h1>

                    <Projects />
                    <Footer />
                </body>

        </div>
    )
}

export default ProjectsPage
