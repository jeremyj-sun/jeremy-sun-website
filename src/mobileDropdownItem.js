import React from 'react'

function MobileDropdownItem(props) {
    return (
        <div>
            <a className={props.class} href={props.link} target={props.target} rel="noreferrer" 
            style={{textAlign: 'center'}}>
                {props.logo ? <img src={props.logo} width="20px" height="20px" alt={props.alt} /> : null}
                
                <span style={{fontWeight: (props.bold && props.bold === 'true') ? 'bold' : 'normal'}}>{props.label}</span></a>
        </div>
    )
}

export default MobileDropdownItem
