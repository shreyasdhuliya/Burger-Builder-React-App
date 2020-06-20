import React from 'react';
import {withRouter} from 'react-router-dom'

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    console.log("*********************************")
    console.log(props)
    let ingredientslist = Object.keys(props.ingredients)
                    .map(inkey => {
                         return [...Array(props.ingredients[inkey])].map((_, i) => {
                            return  <BurgerIngredient key={inkey + i} type={inkey} />
                        })
                    })
                    .reduce((arr,el) => {
                        return arr.concat(el)   
                    }, []);

        if(ingredientslist.length === 0){
            ingredientslist = <p>Please start adding ingredients</p>
        }

    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {ingredientslist}
            <BurgerIngredient type="bread-bottom" />


        </div>
    )
}

export default withRouter(Burger);