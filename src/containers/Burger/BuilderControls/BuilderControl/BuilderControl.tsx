import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


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
            <ButtonGroup color='primary' variant="contained" size="small" >
                <Button onClick={remove} disabled={disabled} >Less</Button>
                <Button onClick={add}>More</Button>
            </ButtonGroup>

        </Fragment>

    )
})