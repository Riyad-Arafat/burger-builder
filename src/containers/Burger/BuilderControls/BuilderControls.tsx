import React, { useEffect } from 'react';
import {DisabledInfo} from '../../../types/commonInterface';
import {BuilderControl} from './BuilderControl/BuilderControl'

const controls = [
    {lable:"Cheese"},
    {lable:"Meat"},
    {lable:"Salad"},
    {lable:"Bacon"},
]

interface BuilderControlsProps {
    ingredientsAdded: (type:string) => void,
    ingredientsRemoved: (type:string) => void,
    disabled: DisabledInfo;
}

export const BuilderControls = React.memo(
    ({
        ingredientsAdded,
        ingredientsRemoved,
        disabled
    }:BuilderControlsProps) =>{

    return(
        <div>
            {controls.map(ctrl => 
                <BuilderControl
                    key={ctrl.lable} 
                    label={ctrl.lable}
                    add={() => ingredientsAdded(ctrl.lable)}
                    remove={()=>ingredientsRemoved(ctrl.lable)}
                    disabled ={disabled[ctrl.lable]}
                ></BuilderControl>
            )}
    

        </div> 
    )
})