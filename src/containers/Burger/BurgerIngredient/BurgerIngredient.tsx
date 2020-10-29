import React , {Fragment, useEffect, useState} from 'react';
import {IngredienType} from '../../../types/commomEnum';

import '../../../assets/Burger/BurgerIngredient.css';


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
export const BurgerIngredient = React.memo(({type}:burgerIngredientProps) =>  {

    const ingredintType = type;
    const [ingredint, setIngredint] = useState< null | JSX.Element>(null);


    const getIngredint = (type:String) =>{
        switch (type) {
            case IngredienType.BreadBottom:
                setIngredint(<div className={classes.BreadBottom}></div>);
                break;
            case IngredienType.BreadTop:
                setIngredint(
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case IngredienType.Meat:
                setIngredint(<div className={classes.Meat}></div>);
                break;
            case IngredienType.Cheese:
                setIngredint(<div className={classes.Cheese}></div>);
                break;
            case IngredienType.Bacon:
                setIngredint(<div className={classes.Bacon}></div>);
                break;
            case IngredienType.Salad:
                setIngredint(<div className={classes.Salad}></div>);
                break;
            default:
                setIngredint(null)
                break;
        }
    }


    useEffect(()=>{
        getIngredint(ingredintType)
    },[ingredintType]);

    return(    
        <Fragment>
            {ingredint}
        </Fragment> 
    )
})