import React from 'react'
import ProjectCard from './projectCard.js'
import sun from './assets/sun-smile.png'
import friday from './assets/is-it-friday-yet-logo.jpg'
import chess from './assets/chess-with-tanks-logo-01.jpg'
import github from './assets/github-large-01.svg'
import incognito from './assets/incognito-sun-01.svg'
import story from './assets/storyPlusPlusProject.jpg'
import aimposter from './assets/AImposter_700x700_black.png'
import uwintrabot from './assets/uw-intra-bot.webp'

function ProjectBody() {
    return (
        <div className='container-fluid project-body'>
            <div className='container' style={{maxWidth: '1400px'}}>
                <div className='row'>
                    <div className='col-lg-4 card-wrapper'>
                        <ProjectCard id='1'  title='AImposter' href='https://cs492-project-rosy.vercel.app/' image={aimposter} alt='AImposter' external='true'>
                            <p><b>Can you spot the AI imposter?</b></p>
                            <p>This game is harder than you think!</p>
                            <p><a className='card-link' target='_blank' href="https://github.com/jeremyj-sun/AImposter">View source code on GitHub</a></p>
                        </ProjectCard>
                    </div>
                    <div className='col-lg-4 card-wrapper'>
                        <ProjectCard id='2'  title='UWIntraBot' image={uwintrabot} alt='uw-intra-bot'>
                            <p><b>This Discord bot scrapes intramural game information from <a className='card-link' target='_blank' href="https://warrior.uwaterloo.ca/">warrior.uwaterloo.ca </a> and automatically schedules server events.</b></p>
                            <p><a className='card-link' target='_blank' href="https://discord.com/developers/docs/resources/guild-scheduled-event">Behind the scenes (Discord Developer Portal)</a></p>
                            <p><a className='card-link' target='_blank' href="https://github.com/jeremyj-sun/uw-intra-bot">View source code on GitHub</a></p>
                        </ProjectCard>
                    </div>
                    <div className='col-lg-4 card-wrapper'>
                        <ProjectCard id='3'  title='Story++' image={story} alt='story++'>
                            <p><a className='card-link' target='_blank' href="https://devpost.com/software/story-levhaz"><b>Hack the North 2020++ Devpost</b></a></p>
                            <p>In only 36 hours, our team successfully represented interactive stories as graphs that can be saved, loaded, and dynamically traversed on a browser. It was a great learning experience! :)</p>
                            <p><b>More than just stories!</b></p>
                            <p>Story++ is a platform for easily creating, sharing and reading choose-your-adventure stories.</p>
                            
                            
                            <p><a className='card-link' target='_blank' href="https://github.com/jeremyj-sun/choose-your-adventure">View source code on GitHub</a></p>
                        </ProjectCard>
                    </div>
                    <div className='col-lg-4 card-wrapper'>
                        <ProjectCard id='4' title='Is it Friday yet?' href='https://hey-is-it-friday-yet.web.app/friday.html' image={friday} alt='friday' external='true'>
                        <p><b>Ever feeling down during the week?</b></p>
                        <p>
                        Well no need to worry, because Friday is not as far away as you think it is!
                        Whether you are working or just chilling, feel free to relax, drink some tea, and get ready to count down to Friday in style!
                        </p>
                        <p><a className='card-link' target='_blank' href="https://github.com/jeremyj-sun/Is-it-Friday-yet">View source code on GitHub</a></p>
                        </ProjectCard>
                    </div>
                    <div className='col-lg-4 card-wrapper'>
                        <ProjectCard id='5' href='https://panzer-chess.web.app/board.html' title='Chess ... But with Tanks!' image={chess} alt='tank' external='true'>
                            <p><b>Exactly what it sounds like. Chess ... But with Tanks!</b></p>
                            <p>I have always enjoyed playing chess as a student. Oh yah, and I'm also a tank enthusiast.
                                What better way to practice JavaScript and make something fun at the same time! 
                            </p>
                            <p><b>Controls</b><br/>
                            Move pieces by clicking on the piece, followed by the destination square.
                            To deselect a piece, click the highlighted piece again. <br/>
                            <a target="_blank" rel="noreferrer" className='card-link' href='https://github.com/jeremyj-sun/chess-with-tanks#controls-and-rules'><b>View table of pieces</b></a> 
                            </p>
                            <p><b>This is an ongoing project.</b> Please give the application a moment to load all the chess pieces.
                                It is recommended to play on a Mac or PC. 
                                The game rules and AI have not been implemented yet, 
                                but here are the <a className='card-link' target='_blank' rel='noreferrer' href='https://en.wikipedia.org/wiki/Rules_of_chess'>Rules of Chess</a> for now.</p>
                            <p>Have fun!</p>
                            <p><a className='card-link' target='_blank' href="https://github.com/jeremyj-sun/chess-with-tanks">View source code on GitHub</a></p>
                        </ProjectCard>
                    </div>
                    <div className='col-lg-4 card-wrapper'>
                        <ProjectCard id='6' href="https://github.com/jeremyj-sun" title='Other Projects on GitHub' image={github} alt='github' external='true'>
                        <ul className='project-list'>
                            <li className='project-list-li'>
                                <b><a className='card-link' target='_blank' rel='noreferrer' href="https://github.com/jeremyj-sun/jeremy-sun-website">This Website!</a></b>
                            </li>
                            <li className='project-list-li'>
                                <b><a className='card-link' target='_blank' rel='noreferrer' href="https://github.com/jeremyj-sun/Computer-E-Commerce-Site/tree/master/Computer-E-Commerce-Site">Full-stack Java, Apache, and MySQL E-commerce application</a></b>
                            </li>
                            <li className='project-list-li'>
                                <b><a className='card-link' target='_blank' rel='noreferrer' href="https://github.com/jeremyj-sun/Educational-Game-Math-and-English/blob/master/turingGame/Kampf%20Gruppe%20Steiner%20Education.t">Math and English Game in Turing</a></b>
                            </li>
                        </ul>
                        </ProjectCard>
                    </div>
                    {/* <div className='col-lg-4 card-wrapper'>
                        <ProjectCard id='5' title='???' image={incognito} alt='incognito'>
                        <p><b>Greetings... I am Incognito Sun...</b></p>
                        <p>Our spy network has uncovered intelligence that a massive database of tanks is being prepared...</p>
                        <p>That's all for now...</p>
                        </ProjectCard>
                    </div> */}
                </div>
            </div>
        </div>
        
    )
}

export default ProjectBody
