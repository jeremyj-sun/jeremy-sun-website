import React from 'react'

import Nav from './nav.js'
import ProjectHeader from './projectHeader.js'
import ProjectBody from './projectBody.js'
import Footer from './footer.js'

function Projects() {
    return (
        <div>
            <ProjectHeader>Projects</ProjectHeader>
            <Nav></Nav>
            <ProjectBody></ProjectBody>
            <Footer></Footer>
        </div>
    )
}

export default Projects
