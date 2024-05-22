import React, { Component } from 'react'
import NavDropdown from './navDropdown.js'
import menu from './assets/list.svg'
import DropdownItem from './dropdownItem.js'
import NavItem from './navItem.js'
import MobileDropdownItem from './mobileDropdownItem.js'
import HashLinkMobileDropdownItem from './hashLinkMobileDropdownItem.js'

import sunSmile from "./assets/sun-smile.svg"
import gitHub from './assets/github.svg'
import linkedIn from './assets/linkedin.svg'
import resume from './assets/resume.svg'
import code from './assets/monitor.svg'
import headphone from './assets/headphone.png'

export class MobileNav extends Component {
    render() {
        return (
            <ul className="nav nav-tabs nav-fill mobile-nav" >
                <NavDropdown label='' logo={menu}>
                    <MobileDropdownItem class='dropdown-item' link='/' logo={sunSmile} alt='smiling-sun' label='Home' target="_self"></MobileDropdownItem>
                    <MobileDropdownItem class='dropdown-item' link="https://github.com/jeremyj-sun" logo={gitHub} alt='gitHub' label='GitHub' target="_blank"></MobileDropdownItem>
                    <MobileDropdownItem class='dropdown-item' link="https://www.linkedin.com/in/jeremy-sun/" logo={linkedIn} alt='linkedIn' label='LinkedIn' target="_blank"></MobileDropdownItem>
                    <MobileDropdownItem class='dropdown-item' link='/files/Jeremy_Sun_Resume.pdf' logo={resume} alt='resume' label='Resume' target="_blank"></MobileDropdownItem>
                    <HashLinkMobileDropdownItem class='dropdown-item' link='/#music' logo={headphone} alt='music' label='Music'></HashLinkMobileDropdownItem>
                    
                        <div class="dropdown-divider"></div>
                        <p className='nav-subtitle'><img src={code} width="20px" height="20px" /> Projects</p>
                        <div class="dropdown-divider"></div>
                        <MobileDropdownItem class='dropdown-item'link='/projects' label='All Projects' target="_self" bold='true'></MobileDropdownItem>
                        <div class="dropdown-divider"></div>
                        <MobileDropdownItem class='dropdown-item'link='https://cs492-project-rosy.vercel.app/' label='AImposter' target="_blank"></MobileDropdownItem>
                        <MobileDropdownItem class='dropdown-item'link='https://hey-is-it-friday-yet.web.app/friday.html' label='Is it Friday yet?' target="_blank"></MobileDropdownItem>
                        <MobileDropdownItem class='dropdown-item' link='https://panzer-chess.web.app/board.html' label='Chess with Tanks!' target="_blank"></MobileDropdownItem>
                    
                </NavDropdown>
            </ul>
        )
    }
}

export default MobileNav
