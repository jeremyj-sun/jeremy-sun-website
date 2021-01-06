import React, { Component } from 'react'
import DefaultNav from './defaultNav.js'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MobileNav from './mobileNav.js';

//Top Nav (Sticky)

//Extract: nav-item
//Extract: dropdown
//Extract: dropdown-item (this component needs to be styled as well)
//Link between pages using react router

export class Nav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             screenWidth : window.innerWidth
        }
        window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({screenWidth : window.innerWidth})
    }

    render() {
        return (
            <span>
                {this.state.screenWidth > 767 ? <DefaultNav></DefaultNav> : <MobileNav></MobileNav>}
            </span>
        )
    }
}

export default Nav

/*
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Separated link</a>
*/
