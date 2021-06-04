import React from 'react';
import classes from './Message.module.css';


const Message = (props) => {  
    
    
    return (
        <React.Fragment>
            {props.sender === 'own' 
            ? <div className={classes.message + ' ' + classes.messageOwn}>{props.message}</div> 
            : <div className={classes.message + ' ' + classes.messageOther}>{props.message}</div> 
            }      
        </React.Fragment> 
    )
}

export default Message;

