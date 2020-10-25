import React from 'react';
import { isPropertySignature } from 'typescript';
import {BuilderControl} from './BuilderControl/BuilderControl'

const controls = [
    {lable:"Cheese", type: "Cheese"},
    {lable:"Meat", type:"Meat"},
    {lable:"Salad", type:"Salad"},
    {lable:"Bacon", type:"Bacon"},
]

interface BuilderControls {
    ingredientsAdded: (type:string) => void,
    ingredientsRemoved: (type:string) => void,
}

export const BuilderControls = ({ingredientsAdded, ingredientsRemoved}:BuilderControls) =>{

    return(
        <div>
            {controls.map(ctrl => 
                <BuilderControl
                    key={ctrl.lable} 
                    label={ctrl.lable}
                    add={() => ingredientsAdded(ctrl.type)}
                    remove={()=>ingredientsRemoved(ctrl.type)}
                ></BuilderControl>
            )}
    

        </div> 
    )
}