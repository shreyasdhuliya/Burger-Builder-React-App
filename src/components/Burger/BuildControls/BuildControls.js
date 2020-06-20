import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'},
];

const buildControls = (props) => {
return (
    <div className="BuildControls">
        <p> Curent Price : {props.price}</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)} 
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button onClick={props.ordered} disabled={!props.purchasable} className="OrderButton">Order Now</button>
    </div>
)
};

export default buildControls;
