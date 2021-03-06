import { Fragment } from 'react'
import ReactDom, { createPortal } from 'react-dom'
import classes from './Modal.module.css'
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCloseModal}/>
};
const ModalOverlay = props => {
    return <div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>
    </div>
        
    
}
const portalElement = document.getElementById ('modal')
function Modal(props) {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}
export default Modal