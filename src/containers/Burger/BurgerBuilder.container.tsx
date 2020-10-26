import React, {Component, Fragment} from 'react';
import { BuilderControls } from './BuilderControls/BuilderControls';
import { Burger } from './Burger'
import { IngredienType } from '../../types/commomEnum';
import {DisabledInfo, Ingredients } from '../../types/commonInterface';
import {Modal} from '../../components/UI/Modal/Modal';
import {OrderSummary} from '../OrderSummary/OrderSummary'
import '../../assets/Burger/Burger.container.css'


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
        isOrderOpen: false,
        totalPrice: 0,
        purchasable: false,

    }

    updatePurchase = (ingredients:Ingredients) => {
        const sum = Object.keys(ingredients)
        .map(iKey => {
            return ingredients[iKey];
        }).reduce((sum, el) => {
            return sum + el
        },0)
        this.setState({purchasable: sum > 0});
    }

    addIngredients = (type: string, ingredients:Ingredients = this.state.ingredients) =>{
        const oldCount = ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredient:Ingredients = {...this.state.ingredients};
        updateIngredient[type]=updateCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients: updateIngredient, totalPrice: newPrice});
        this.updatePurchase(updateIngredient);
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
            this.updatePurchase(updateIngredient);
        }
        
    }


    render()
    {
        let ingr:Ingredients = {...this.state.ingredients};
        const disabledInfo:DisabledInfo ={}
        for(let key in ingr ){
            disabledInfo[key] = ingr[key] <= 0
        }
        return(
            <Fragment>
                <Modal open={this.state.isOrderOpen}>
                    <OrderSummary label="Order Summary" ingredients={this.state.ingredients} />
                    <button 
                    onClick={()=> this.setState({isOrderOpen: !this.state.isOrderOpen})}
                    >Cancel</button>
                </Modal>
                <div className="Builder-Conatiner">
                    <Burger
                        ingredients={this.state.ingredients} 
                    />
                    <div className="Contorls-Container">
                        <div><b>{this.state.totalPrice.toFixed(2)}$</b></div>
                        <BuilderControls 
                        ingredientsAdded={this.addIngredients}
                        ingredientsRemoved={this.removeIngredients}
                        disabled={disabledInfo}
                        ></BuilderControls>

                        <button disabled={!this.state.purchasable}
                        onClick={()=> this.setState({isOrderOpen: !this.state.isOrderOpen})}
                        >OREDR NOW!</button>
                    </div>
                    
                    

                </div>
                
            </Fragment>
        )    
    }
}

export default BurgerBuilder;