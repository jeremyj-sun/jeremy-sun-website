import React from 'react'

function DefaultButton(props) {
    return (
             <div className='default-button-wrapper-1'>
                    <br/>
                    <div className='default-button-wrapper-2'>
                        <button type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/projects';
                            }} 
                            className='btn btn-primary default-button'>
                                <span className='button-text'>{props.children}</span>
                            </button>
                    </div>
                    <br/>
            </div>   
    )
}

export default DefaultButton

