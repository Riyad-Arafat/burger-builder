import React, {Component, Fragment} from 'react';
import { BuilderControls } from '../../components/Burger/BuilderControls/BuilderControls';
import { Burger } from '../../components/Burger/Burger'
import { Ingredient } from '../../components/Burger/Types/Types';

interface Ingredients {
    [key: string]: number;
  }

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            Cheese :0 ,
            Meat :1,
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
        let updateCount = oldCount;
        if(updateCount !== 0){
            updateCount = updateCount - 1;
        }
        const updateIngredient:Ingredients = {...this.state.ingredients};
        updateIngredient[type]=updateCount;
        this.setState({ingredients: updateIngredient});
    }


    render()
    {
        return(
            <Fragment>
                <Burger
                    ingredients={this.state.ingredients} 
                />
                <BuilderControls 
                ingredientsAdded={this.addIngredients}
                ingredientsRemoved={this.removeIngredients}
                ></BuilderControls>
            </Fragment>
        )    
    }
}

export default BurgerBuilder;