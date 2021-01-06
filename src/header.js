import React from 'react';
import logo from './assets/sun-smile.svg'
import Background from './assets/header-background.jpg'

//Home page header
function Header() {
    return (
  
    <div className="jumbotron jumbotron-fluid" style={{marginBottom: '0rem', backgroundImage: `url(${Background})`}}>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-2">
                <img id="logo" className="img-fluid logo-media" style={{alignSelf: 'center'}} src={logo} alt="smiling sun" />
            </div>
            <div id="welcome-wrapper" className="col-md-9">
                    <h3 className="title-white welcome-message"><strong>Hi there! I'm</strong></h3>
                    <h1 className="title-black"><strong><span id='name'>Jeremy Sun</span></strong></h1>
                    <h3 className="title-white welcome-message"><strong>Welcome to my website!</strong></h3>
            </div>
        </div>
    </div>
    
    );
  }

  export default Header;
