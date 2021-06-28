import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {   
    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((dialog, i) => {
        return (<DialogItem key={Math.random() + i} name={dialog.name} id={dialog.id}/>)
    })

    const messagesElements = state.messages.map((message, i) => <Message key={Math.random() + i} message={message.message} sender={message.sender}/>);

    if (!props.isAuth) {
        return <Redirect to={"/login"} />
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElements}   
            </div>
            <div className={classes.messages}>
               {messagesElements}
               <textarea onChange={props.updateTextArea} className={classes.textArea}  value={state.newMessage}/>
               <button onClick={props.addMessage} className={classes.button} >Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs;








