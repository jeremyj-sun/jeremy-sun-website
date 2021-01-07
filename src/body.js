import React from 'react'
import Content from './content.js'
import DefaultButton from './defaultButton.js'

export default function Body() {
    return (
        <div id="body-wrapper" className="container-fluid">
            <Content title="About Me">
                <p>I'm a Computer Science student at the University of Waterloo seeking a challenging internship opportunity.<br/>
                I continue to explore a variety of new technologies and fields that depend on computer software!<br/>
                Some of my web development highlights are featured as <a className='card-link card-link2' href='/projects'>Projects</a> on this website.<br/>
                I also enjoy chilling to classic rock and working as a part-time tutor. <br/></p>
                

                <p>Feel free to contact me at <a className='card-link card-link2' href="mailto:j338sun@uwaterloo.ca">j338sun@uwaterloo.ca</a>.</p>
                <p>And as always ... <b>Have fun! </b></p>
                <DefaultButton href='/projects'>View All Projects</DefaultButton>
                
                    
            </Content>
        </div>
    )
}
