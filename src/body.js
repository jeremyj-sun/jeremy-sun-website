import React from 'react'
import Content from './content.js'
import DefaultButton from './defaultButton.js'
import sun from './assets/sun-sunglass.svg'
import tank from './assets/tank.jpg'

export default function Body() {
    return (
        <div id="body-wrapper" className="container-fluid">
            <Content title="About Me">
                <p>I'm a Computer Science student at the University of Waterloo seeking a challenging internship opportunity!<br/><br/>
                I continue to explore a variety of new technologies and fields that depend on computer software!
                Some of my web development highlights are featured as <a className='card-link card-link2' href='/projects'>Projects</a> on this website.
                <br></br><br></br>I also enjoy chilling to classic rock, playing chess, reading about military history, playing piano, folding origami and working as a part-time tutor. <br/></p>
                

                <p>Feel free to contact me at <a className='card-link card-link2' href="mailto:j338sun@uwaterloo.ca">j338sun@uwaterloo.ca</a>.</p>
                <p>There's plenty to explore on this website, and as always ... <b>Have fun! </b> <img id='about-me-icon' src={sun} alt='sun'/></p>
                <DefaultButton href='/projects'>View All Projects</DefaultButton>
                
                    
            </Content>
            <Content>
                <img className='default-image img-fluid' src={tank} alt='tank' />
                <div className='defualt-caption-wrapper'><div className='default-caption'>Origami Leapord 2 MBT</div></div>
            </Content>
        </div>
    )
}
