import React from 'react'
import sunSmile from "./assets/sun-smile.svg"
import gitHub from './assets/github.svg'
import linkedIn from './assets/linkedin.svg'
import resume from './assets/resume.svg'
import code from './assets/monitor.svg'

import NavItem from './navItem.js'
import NavDropdown from './navDropdown.js'
import DropdownItem from './dropdownItem.js'

function DefaultNav() {
    return (
        <ul class="nav nav-tabs nav-fill default-nav">
        <NavItem link='/' logo={sunSmile} alt='smiling-sun' label='Home' target="_self"></NavItem>
        <NavItem link="https://github.com/jeremyj-sun" logo={gitHub} alt='gitHub' label='GitHub' target="_blank"></NavItem>
        <NavItem link="https://www.linkedin.com/in/jeremy-sun/" logo={linkedIn} alt='linkedIn' label='LinkedIn' target="_blank"></NavItem>
        <NavItem link='#' logo={resume} alt='resume' label='Resume' target="_blank"></NavItem>
        <NavDropdown label='Projects' logo={code}>
                    <div class="dropdown-divider" style={{marginTop: '0'}}></div>
                    <DropdownItem link='/projects' target='_self' bold='true' label='All Projects'></DropdownItem>
                    <div class="dropdown-divider"></div>
                    <DropdownItem link='https://hey-is-it-friday-yet.web.app/friday.html'  target='_blank' label='Is it Friday yet?'></DropdownItem>
                    <DropdownItem link='https://panzer-chess.web.app/board.html' target='_blank' label='Chess with Tanks!'></DropdownItem>
        </NavDropdown>
        </ul>
    )
}

export default DefaultNav
