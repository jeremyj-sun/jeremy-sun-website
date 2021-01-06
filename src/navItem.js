import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Nav Item:
//props:
//link, logo, alt, label, target

/* Use mousedown as click may be an ambiguous event */
function NavItem(props) {
    return (
            <li class="nav-item">
            <a class="nav-link active" href={props.link} target={props.target} rel="noreferrer">
                <img src={props.logo} width="25px" height="25px" alt={props.alt} />{props.label}
            </a>
            </li>
    )
}

export default NavItem
