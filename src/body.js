import React from 'react'
import Content from './content.js'
import DefaultButton from './defaultButton.js'
import SoundCloud from './soundcloud.js'
import sun from './assets/sun-sunglass.svg'
import tank from './assets/tank.jpg'
import cloud from './assets/soundcloud.png'
import musescore from './assets/musescore.png'

export default function Body() {
    return (
        <div id="body-wrapper" className="container-fluid">
            <Content id="aboutme" title="About Me">

                <p>Hi there! I'm a Computer Science student at the University of Waterloo seeking a challenging internship opportunity!</p>
                <p> 👨‍💻 I love to automate things, and I believe strongly in DevOps and SRE best practices — particularly the processes and tools used to deliver services at a high velocity and maintain their reliability.</p>
                <p> 💻 I've done plenty of web development as well — some of my highlights are featured as <a className='card-link card-link2' href='/projects'>Projects</a> on this website!</p>
                <p>In my free time, I enjoy chilling to classic rock, playing chess ♞, reading about military history 📕, playing piano 🎹, folding origami 💮 and composing music 🎧!</p>
                <p>Feel free to contact me at <a className='card-link card-link2' href="mailto:j338sun@uwaterloo.ca">j338sun@uwaterloo.ca</a>.</p>
                <p>There's plenty to explore on this website, and as always ... <b>Have fun! </b> <img id='about-me-icon' src={sun} alt='sun'/></p>
                <DefaultButton href='/projects'>View All Projects</DefaultButton>
                    
            </Content>

            <Content id="music" title="My Music">
                <div className="row">
                <SoundCloud url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1513782316&color=%23247ca5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    <SoundCloud url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1513784461&color=%23247ca5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <DefaultButton href='https://soundcloud.com/jeremyj-sun'><img src={cloud} width="25px" height="25px" alt="soundcloud_logo" /> SoundCloud</DefaultButton>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <DefaultButton href='https://musescore.com/user/11016756'><img src={musescore} width="30px" height="30px" alt="musescore_logo" /> MuseScore </DefaultButton>
                    </div>
                </div>
            </Content>

            <Content id="origamitank">
                <img className='default-image img-fluid' src={tank} alt='tank' />
                <div className='defualt-caption-wrapper'><div className='default-caption'>Origami Leapord 2 MBT</div></div>
            </Content>
        </div>
    )
}
