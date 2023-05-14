import React from 'react'

function SoundCloud(props) {
    const embedUrl = props.url
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="embed-responsive embed-responsive-1by1 soundcloud">
                <iframe width="350" height="350" scrolling="no" frameborder="no" allow="autoplay" src={embedUrl}></iframe>
            </div>
        </div>
    )
}

export default SoundCloud
