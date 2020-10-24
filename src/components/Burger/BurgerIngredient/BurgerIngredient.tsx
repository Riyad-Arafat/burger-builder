
import React from 'react';

import classes from './BurgerIngredient.css';

interface burgerIngredient {
    type : String;
    calsses: any
}

export const burgerIngredient = ({type} :burgerIngredient) => {

    let ingredint = null;
    switch (type) {
        case 'bread-bottom':
            ingredint = (<div className={classes.BreadBottom}></div>);
            break;
        case 'bread-top':
            ingredint = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingredint = (<div className={classes.Meat}></div>);
            break;
        case 'cheese':
            ingredint = (<div className={classes.Chease}></div>);
            break;
        case 'bacon':
            ingredint = (<div className={classes.Bacon}></div>);
            break;
        case 'salad':
            ingredint = (<div className={classes.Salad}></div>);
            break;
        default:
            ingredint = null;
            break;
    }

}