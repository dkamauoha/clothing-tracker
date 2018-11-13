import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

//Styles
import './Landing.css';

//Images
import tshirts from '../../images/tshirts.jpg';

class Landing extends Component {
    state = {

    };

    render () {
        return (
            <div className='landing__display-container'>
                <Parallax
                  blur={1}
                  bgImage={tshirts}
                  bgHeight='auto'
                  bgImageAlt=''  
                >
                    <div style={{height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h3 className='landing__title'>Welcome to Clothing Tracker</h3>
                    </div>
                </Parallax>
                {/* <img src={tshirts} alt=''/> */}
            </div>
        )
    }
}

export default Landing;