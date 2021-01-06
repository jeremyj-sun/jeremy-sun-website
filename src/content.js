import React from 'react'

function Content(props) {
    return (
        <div className="container-fluid content-1">
            <div className="container content-2">
                <b><h5 className="content-header">{props.title ? props.title : null }</h5></b>
                <div className="content-body">{props.children}</div>
            </div>
        </div>
    )
}

export default Content
