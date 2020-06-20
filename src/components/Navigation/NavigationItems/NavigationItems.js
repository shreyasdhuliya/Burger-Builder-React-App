import React from 'react';

import './Navigation.css'
import NavigationItem from './NavigationItem'

const navigationItems = () => (
 <ul className="NavigationItems">
     <NavigationItem link="/" >Burger Builder </NavigationItem>
     <NavigationItem link="/orders">Orders </NavigationItem>
 </ul>
);

export default navigationItems;