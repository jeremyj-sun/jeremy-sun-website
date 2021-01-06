import React from 'react'
import sunSpinner from './assets/sun-loader.svg'


function Loader(props) {
    return (
        <figure>
            <img src={sunSpinner} id='loader'/>
            <figcaption id='loaderCaption'>{props.caption}</figcaption>
        </figure>
    )
}

export default Loader
