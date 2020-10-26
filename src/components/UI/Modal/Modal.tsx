import React, {Fragment} from 'react';
import '../../../assets/Modal/Modal.css'

interface ModalProps{
    open: boolean,
    children: any
}

export const Modal = (props:ModalProps) =>{
  
    return(
    <Fragment>
        {props.open ? <div className='Modal'>{props.children}</div> :null}
    </Fragment>
    )   

}