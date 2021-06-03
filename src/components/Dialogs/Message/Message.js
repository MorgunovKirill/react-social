import React from 'react';
import classes from './Message.module.css';


const Message = (props) => {  
console.log("🚀 ~ file: Message.js ~ line 6 ~ Message ~ props", props)
    
    
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

