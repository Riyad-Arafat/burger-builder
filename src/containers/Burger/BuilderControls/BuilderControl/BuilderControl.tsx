import React, {Fragment} from 'react';


interface BuilderControl {
    label: string,
    add: () => void,
    remove: () => void,
    disabled?: boolean ,
}

export const BuilderControl = ({label, add, remove, disabled}:BuilderControl) => {

    return (
        <Fragment>
            <div className="sadasd">{label}</div>
            <button onClick={remove} disabled={disabled}>Less</button>
            <button onClick={add}>More</button>
        </Fragment>

    )
}