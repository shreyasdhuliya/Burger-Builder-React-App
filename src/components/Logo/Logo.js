import React from 'react';

import './logo.css'

import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={burgerLogo}/>
    </div>
);

export default logo;