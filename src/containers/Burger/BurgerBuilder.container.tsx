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
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'store/store'
import { setIngredient, updateTotalPrice } from 'store/modules/ingredients/ingredientsActions';
import '../../assets/Burger/Burger.container.css'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      color: theme.palette.text.primary
    },
    dialog:{
      color: theme.palette.text.secondary,

    }
  }),
);

export const BurgerBuilder = React.memo(() => {

    const classes = useStyles();
    const {ingredients} = useSelector((state:RootState) => state.ingr);
    const {totalPrice}   = useSelector((state:RootState) => state.ingr);
    const dispatch = useDispatch();

    const state = useSelector((state:RootState)=> state)
    const [purchasble, setPurchasable]  = useState(false);
    const [open, setOpen]= useState(false);
    const [isLoaded, setIsLoaded]   = useState(false)
    const [disabledInfo, setDisabledInfo]  =  useState<DisabledInfo>({})
    

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
        dispatch(setIngredient("add", type, ingredients));
        updatePurchase();
        dispatch(updateTotalPrice("add",totalPrice, type));
        disabled(ingredients);
    }

    const removeIngredients = (type: string) =>{
        const oldCount = ingredients[type];
        if(oldCount !== 0){
            dispatch(setIngredient("remove", type, ingredients));
            dispatch(updateTotalPrice("remove",totalPrice, type))
            updatePurchase();
            disabled(ingredients);
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
                        color="primary"
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
