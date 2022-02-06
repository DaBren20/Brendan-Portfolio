import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

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
