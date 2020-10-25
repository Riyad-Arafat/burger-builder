import React, {Fragment} from 'react';


interface BuilderControl {
    label: string,
    add: () => void,
    remove: () => void,
}

export const BuilderControl = ({label, add, remove}:BuilderControl) => {

    return (
        <Fragment>
            <div className="sadasd">{label}</div>
            <button onClick={remove}>Less</button>
            <button onClick={add}>More</button>
        </Fragment>

    )
}