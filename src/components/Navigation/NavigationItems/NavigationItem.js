import React from 'react';
import {NavLink} from 'react-router-dom'

import './Navigation.css';
import { checkPropTypes } from 'prop-types';

const navigationItems = (props) => (
    <li className="NavigationItem">
        <NavLink to={props.link} 
        activeClassName="active">
            {props.children}
        </NavLink>
    </li>
)

export default navigationItems;