import React, {Fragment} from 'react';


interface BuilderControlProps {
    label: string,
    add: () => void,
    remove: () => void,
    disabled: boolean ,
}

export const BuilderControl = React.memo(({label, add, remove, disabled}:BuilderControlProps) => {

    return (
        <Fragment>
            <div className="label">{label}</div>
            <button onClick={remove} disabled={disabled}>Less</button>
            <button onClick={add}>More</button>
        </Fragment>

    )
})