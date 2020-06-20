import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('order sum')
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
        return (<li key={igkey}>
                     <span style={{textTransform: 'capitalize'}}> {igkey} : {this.props.ingredients[igkey]}</span>
            </li>)
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                {ingredientSummary}
                </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContined}>Continue</Button>
            </Aux>
        )
    }
   

    
};

export default OrderSummary;