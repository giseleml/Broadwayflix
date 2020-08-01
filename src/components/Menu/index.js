import React from 'react'; 
import logo from '../../assets/img/logo.png'
import './styles.css'

import ButtonLink from '../ButtonLink'

function Menu () {
    return (
        <nav className='Menu'>
            <a href="/">
                <img src={logo} alt="Broadwayflix" className='Logo' />
            </a>
            <ButtonLink className='ButtonLink' href="/">
                Post a video
            </ButtonLink>
        </nav>
    );
};

export default Menu;