import React from 'react'

function DropdownItem(props) {
    return (
        <div>
            <a class="dropdown-item" target={props.target} rel='noreferrer' href={props.link} 
            style={{textAlign: 'center'}}>
            <span style={{fontWeight: (props.bold && props.bold === 'true') ? 'bold' : 'normal'}}>{props.label}</span></a>
        </div>
    )
}

export default DropdownItem
