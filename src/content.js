import React from 'react'

function Content(props) {
    return (
        <div className="container-fluid content-1">
            <div className="container content-2">
                <b><h5 className="content-header-wrapper" style={{display: props.title ? 'block' : 'none'}}>
                    <div className="content-header">
                        {props.title ? props.title : null }
                    </div>
                </h5></b>
                <div className="content-body">{props.children}</div>
            </div>
        </div>
    )
}

export default Content
