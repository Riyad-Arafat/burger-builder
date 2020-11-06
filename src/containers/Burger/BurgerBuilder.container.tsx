import React, {useState, Fragment, useEffect, useCallback,} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {createStyles, makeStyles, Theme} from '@material-ui/core';

import { BuilderControls } from './BuilderControls/BuilderControls';
import { Burger } from './Burger'
import {DisabledInfo, Ingredients } from '../../types/commonInterface';
import {OrderSummary} from '../OrderSummary/OrderSummary'
import '../../assets/Burger/Burger.container.css'
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'store/store'
import { setIngredient } from 'store/modules/ingredients/ingredientsActions';
import { IngredientsType } from 'store/modules/ingredients/ingredentsTypes';


const INGREDIENTS_PRICE:Ingredients = {
    Cheese : 2,
    Meat : 3.5,
    Salad : 2.65,
    Bacon : 5.2,
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      color: theme.palette.text.primary
    },
    dialog:{
      color: theme.palette.text.secondary
    }
  }),
);

export const BurgerBuilder = React.memo(() => {

    const ingredientsvalues = {
        Cheese :0 ,
        Meat :0,
        Salad :0 ,
        Bacon :0 ,
    };

    const classes = useStyles();
    const [totalPrice, SetTotalPrice]   = useState(0);
    const [purchasble, setPurchasable]  = useState(false);
    const [open, setOpen]= useState(false);
    const [isLoaded, setIsLoaded]   = useState(false)
    const [disabledInfo, setDisabledInfo]  =  useState<DisabledInfo>({})
    const state = useSelector((state:RootState) => state);
    const ingredients = useSelector((state:RootState) => state.ingredients);
    const dispatch = useDispatch();
    

    const updatePurchase = () => {
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
        dispatch(setIngredient(type, + updateCount))
        const updateIngredient = ingredients;
        updateIngredient[type] = updateCount;
        const oldPrice = totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];
        SetTotalPrice(newPrice);
        updatePurchase();
        disabled(updateIngredient);
    }

    const removeIngredients = (type: string) =>{
        const oldCount = ingredients[type];
        if(oldCount !== 0){
            const updateCount = oldCount - 1;
            dispatch(setIngredient(type, + updateCount))
            const updateIngredient = ingredients;
            updateIngredient[type] = updateCount;
            const oldPrice = totalPrice;
            const newPrice = oldPrice - INGREDIENTS_PRICE[type];
            SetTotalPrice(newPrice);
            updatePurchase();
            disabled(updateIngredient);
        }
        
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const disabled = useCallback((updateIngredient:Ingredients) =>{
        const dis = disabledInfo;
        for(let key in updateIngredient ){
            dis[key] = updateIngredient[key] <= 0 ;
        }
        setDisabledInfo(dis);
    },[setDisabledInfo])

    useEffect(()=>{
        disabled(ingredients)
        setIsLoaded(true);
    },[])

    return(
        <Fragment>
            <Dialog
                open={open}
                onClose={handleOpen}
            >
                <DialogContent className={classes.dialog}>
                    <OrderSummary 
                        label="Order Summary" 
                        ingredients={ingredients} 
                        totalPrice={totalPrice}
                    />                
                </DialogContent>
                <DialogActions>
                    <Button
                        color="secondary"
                        onClick={handleOpen}
                        >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleOpen}
                        color="secondary"
                        >
                        <Link to="/checkout" >CheckOut</Link>
                    </Button>
                </DialogActions>
            </Dialog>
            {isLoaded ? 
                <div className={`Builder-Conatiner ${classes.root}`}>
                    <Burger
                        ingredients={ingredients} 
                        totalPrice={totalPrice}
                    />
                    <div className="Contorls-Container">
                        <br/>
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

});
