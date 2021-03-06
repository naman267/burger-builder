import React from 'react'
import Auxillary from '../../../hoc/Auxillary'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal=(props)=>(
    <Auxillary>
        <Backdrop clicked={props.modalClosed} show={props.show}/>
        <div className={classes.Modal}
    style={{
        transform:props.show?'translateY(0)':'translateY(-100vh)',
        opacity:props.show?'1':'0'
    }}
    >
        {props.children}
    </div>
    </Auxillary>
    
)


export default modal