import React, {Component, Fragment} from 'react';
import { BuilderControls } from '../../components/Burger/BuilderControls/BuilderControls';
import { Burger } from '../../components/Burger/Burger'
import { IngredienType } from '../../types/commomEnum';
import {DisabledInfo, Ingredients } from '../../types/commonInterface';



const INGREDIENTS_PRICE:Ingredients = {
    Cheese : 2,
    Meat : 3.5,
    Salad : 2.65,
    Bacon : 5.2,
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            Cheese :0 ,
            Meat :0,
            Salad :0 ,
            Bacon :0 ,
        },
        totalPrice: 0,

    }

    addIngredients = (type: string, ingredients:Ingredients = this.state.ingredients) =>{
        const oldCount = ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredient:Ingredients = {...this.state.ingredients};
        updateIngredient[type]=updateCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients: updateIngredient, totalPrice: newPrice});
    }

    removeIngredients = (type: string, ingredients:Ingredients = this.state.ingredients) =>{
        const oldCount = ingredients[type];
        if(oldCount !== 0){
            const updateCount = oldCount - 1;
            const updateIngredient:Ingredients = {...this.state.ingredients};
            updateIngredient[type]=updateCount;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENTS_PRICE[type];
            this.setState({ingredients: updateIngredient, totalPrice: newPrice});
            this.setState({ingredients: updateIngredient});
        }
        
    }


    render()
    {
        let ingr:Ingredients = {...this.state.ingredients};
        const disabledInfo:DisabledInfo ={}
        for(let key in ingr ){
            disabledInfo[key] = ingr[key] <= 0
        }
        console.log(disabledInfo)
        return(
            <Fragment>
                <Burger
                    ingredients={this.state.ingredients} 
                />
                <div>{this.state.totalPrice.toFixed(2)}$</div>
                <BuilderControls 
                ingredientsAdded={this.addIngredients}
                ingredientsRemoved={this.removeIngredients}
                disabled={disabledInfo}
                ></BuilderControls>
            </Fragment>
        )    
    }
}

export default BurgerBuilder;