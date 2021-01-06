import React from 'react'
import logo2 from './assets/sun-sunglass.svg'

function Footer() {
    return (
        <div className='container-fluid' id='footer'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-6 footer-content'>
                    Responsive web app built with <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>ReactJS</a> and <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer'>Bootstrap</a><br/>
                    Hosted on <a href='https://firebase.google.com/' target='_blank' rel='noreferrer'>Firebase</a><br/>
                    View source code on <a href='https://github.com/jeremyj-sun/jeremy-sun-website' target='_blank' rel='noreferrer'>GitHub</a><br/>
                    Designed and developed by Jeremy Sun <img id='footer-icon' style={{height: '1em'}}src={logo2}/>, 2021
                </div>
                <div className='col-md-2 footer-logo-wrapper'>
                    <img id='footer-logo' src={logo2} /> 
                </div>
                <div className='col-md-2'></div>
            </div>
            
        </div>
    )
}

export default Footer
