import React, {useState, Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


import { BuilderControls } from './BuilderControls/BuilderControls';
import { Burger } from './Burger'

import {DisabledInfo, Ingredients } from '../../types/commonInterface';
import {OrderSummary} from '../OrderSummary/OrderSummary'
import '../../assets/Burger/Burger.container.css'


const INGREDIENTS_PRICE:Ingredients = {
    Cheese : 2,
    Meat : 3.5,
    Salad : 2.65,
    Bacon : 5.2,
}

export const BurgerBuilder = () => {

    const ingredientsvalues = {
        Cheese :0 ,
        Meat :0,
        Salad :0 ,
        Bacon :0 ,
    };

    const [ingredients, setIngredints] = useState<Ingredients>(ingredientsvalues);
    const [totalPrice, SetTotalPrice]   = useState(0);
    const [purchasble, setPurchasable]  = useState(false);
    const [open, setOpen]   = useState(false);
    const [isLoaded, setIsLoaded]   = useState(false)
    const [disabledInfo, setDisabledInfo]  =  useState<DisabledInfo>({})
    

    const updatePurchase = (ingredients:Ingredients) => {
        const sum = Object.keys(ingredients)
        .map(iKey => {
            return ingredients[iKey];
        }).reduce((sum, el) => {
            return sum + el
        },0)
        setPurchasable( sum > 0);
    }

    const addIngredients = (type: string) =>{
        const oldCount = ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredient = ingredients;
        updateIngredient[type] = updateCount;
        const oldPrice = totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];
        setIngredints(updateIngredient);
        SetTotalPrice(newPrice);
        updatePurchase(updateIngredient);
        disabled();
    }

    const removeIngredients = (type: string) =>{
        const oldCount = ingredients[type];
        if(oldCount !== 0){
            const updateCount = oldCount - 1;
            const updateIngredient:Ingredients = ingredients;
            updateIngredient[type]=updateCount;
            const oldPrice = totalPrice;
            const newPrice = oldPrice - INGREDIENTS_PRICE[type];
            setIngredints(updateIngredient);
            SetTotalPrice(newPrice);
            updatePurchase(updateIngredient);
            disabled();
        }
        
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    const disabled = () =>{
        const dis = disabledInfo;
        for(let key in ingredients ){
            dis[key] = ingredients[key] <= 0
        }
        setDisabledInfo(dis);
    }

    useEffect(()=>{
        disabled();
        setIsLoaded(true);
    },[])

    return(
        <Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <OrderSummary 
                        label="Order Summary" 
                        ingredients={ingredients} 
                        totalPrice={totalPrice}
                    />                
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={handleClose}
                        color="primary"
                        >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleClose}
                        color="primary"
                        >
                        <Link to="/checkout" >CheckOut</Link>
                    </Button>
                </DialogActions>
            </Dialog>
            {isLoaded ? 
                <div className="Builder-Conatiner">
                    <Burger
                        ingredients={ingredients} 
                    />
                    <div className="Contorls-Container">
                        <br/>
                        <div><b>{totalPrice.toFixed(2)}$</b></div>
                        <BuilderControls 
                        ingredientsAdded={addIngredients}
                        ingredientsRemoved={removeIngredients}
                        disabled={disabledInfo}
                        ></BuilderControls>
                        <br/>
                        <Button
                        disabled={!purchasble}
                        onClick={handleOpen}
                        color="primary" variant="contained" size="large"
                        >
                            OREDR NOW!
                        </Button>
                        
                    </div>
                </div>
            : null}
            
            
        </Fragment>
    )    

}
