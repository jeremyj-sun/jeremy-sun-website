import React from 'react'

function ProjectHeader(props) {
    return (
        <div className='basic-header jumbotron jumbotron-fluid'>
            <h2 className='title-white'>{props.children}</h2>
        </div>
    )
}

export default ProjectHeader
