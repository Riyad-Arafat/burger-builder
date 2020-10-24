import React , {Fragment} from 'react';
import {Ingredient} from '../Types/Types';

import './BurgerIngredient.css';


const classes = {
    BreadBottom: 'BreadBottom',
    BreadTop: 'BreadTop',
    Seeds1: 'Seeds1',
    Seeds2: 'Seeds2',
    Meat: 'Meat',
    Cheese: 'Cheese',
    Salad: 'Salad',
    Bacon: 'Bacon',
}

interface burgerIngredientProps {
    type : String;
}
export class BurgerIngredient extends React.Component<burgerIngredientProps>  {
    
    render()
    {
        const type = this.props.type
        let  ingredint: null | JSX.Element = (null);
        const chose = (type:String) =>{
            switch (type) {
                case Ingredient.BreadBottom:
                    ingredint = (<div className={classes.BreadBottom}></div>);
                    break;
                case Ingredient.BreadTop:
                    ingredint = (
                        <div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>
                    );
                    break;
                case Ingredient.Meat:
                    ingredint = (<div className={classes.Meat}></div>);
                    break;
                case Ingredient.Cheese:
                    ingredint = (<div className={classes.Cheese}></div>);
                    break;
                case Ingredient.Bacon:
                    ingredint = (<div className={classes.Bacon}></div>);
                    break;
                case Ingredient.Salad:
                    ingredint = (<div className={classes.Salad}></div>);
                    break;
                default:
                    ingredint = (null)
                    break;
            }
        }
        chose(type);
        return(
    
            <Fragment>
                {ingredint}
            </Fragment> 
        )
    

    }
}
