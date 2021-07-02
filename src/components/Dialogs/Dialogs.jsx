import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import AddMessageFormReduxForm from './DialogsForm';

const Dialogs = (props) => {   
    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((dialog, i) => {
        return (<DialogItem key={Math.random() + i} name={dialog.name} id={dialog.id}/>)
    })

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

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
               <AddMessageFormReduxForm onSubmit={addNewMessage}/>             
            </div>
        </div>
    )
}

export default Dialogs;








