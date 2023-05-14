import React from 'react'
import { HashLink } from 'react-router-hash-link';

//HashLinkNavItem:
//props:
//link, logo, alt, label

function HashLinkNavItem(props) {
    return (
            <li class="nav-item">
                <HashLink smooth class="nav-link active" to={props.link}>
                    <img src={props.logo} width="25px" height="25px" alt={props.alt} /> {props.label}
                </HashLink>
            </li>
    )
}

export default HashLinkNavItem
