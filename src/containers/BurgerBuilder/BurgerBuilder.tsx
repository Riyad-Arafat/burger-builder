import React, {Component, Fragment} from 'react';
import { Burger } from '../../components/Burger/Burger'
class BurgerBuilder extends Component {

    state = {
        ingredients:{
            Cheese :2 ,
            Meat :2,
            Salad :2 ,
            Bacon :2 ,
        },

    }
    render()
    {
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
            </Fragment>
        )    
    }
}

export default BurgerBuilder;