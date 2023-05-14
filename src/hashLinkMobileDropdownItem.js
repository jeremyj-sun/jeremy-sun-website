import React from 'react'
import { HashLink } from 'react-router-hash-link'

function HashLinkMobileDropdownItem(props) {
    return (
        <div>
            <HashLink smooth className={props.class} to={props.link} style={{textAlign: 'center'}}>
                {props.logo ? <img src={props.logo} width="20px" height="20px" alt={props.alt} /> : null}
                
                <span className='dropdown-label' style={{fontWeight: (props.bold && props.bold === 'true') ? 'bold' : 'normal'}}> {props.label}</span>
            </HashLink>
        </div>
    )
}

export default HashLinkMobileDropdownItem
