import DropdownItem from './dropdownItem.js'

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export class NavDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
             toggle: false
        };
    }
    
    
    click = (e) => {   
        if (this.state.toggle) {
            this.setState({toggle: false}) 
        }   else {
            this.setState({toggle: true})
        }
        //console.log(this.state.toggle)
    }
    
    /* Use mousedown as click may be an ambiguous event */
    render() {
        return (
        <li class="nav-item dropdown">
            <a onMouseDown={this.click}  className="nav-link active dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true"
                aria-expanded="false">
                    <img src={this.props.logo} width="25px" height="25px" alt="Projects"/><span style={{color: this.state.toggle ? '#247ca5' : '#495057'}}>{this.props.label}</span></a>
                <div class="dropdown-menu" >
                    {this.props.children}
                </div>
        </li> 
        )
    }
}

export default NavDropdown
