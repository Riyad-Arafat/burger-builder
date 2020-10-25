import React, {Component, Fragment} from 'react';
import { BuilderControls } from '../../components/Burger/BuilderControls/BuilderControls';
import { Burger } from '../../components/Burger/Burger'
import { IngredienType } from '../../types/commomEnum';
import {DisabledInfo, Ingredients } from '../../types/commonInterface';




class BurgerBuilder extends Component {

    state = {
        ingredients:{
            Cheese :0 ,
            Meat :0,
            Salad :0 ,
            Bacon :0 ,
        },

    }

    addIngredients = (type: string, ingredients:Ingredients = this.state.ingredients) =>{
        const oldCount = ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredient:Ingredients = {...this.state.ingredients};
        updateIngredient[type]=updateCount;
        this.setState({ingredients: updateIngredient});
    }

    removeIngredients = (type: string, ingredients:Ingredients = this.state.ingredients) =>{
        const oldCount = ingredients[type];
        if(oldCount !== 0){
            const updateCount = oldCount - 1;
            const updateIngredient:Ingredients = {...this.state.ingredients};
            updateIngredient[type]=updateCount;
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