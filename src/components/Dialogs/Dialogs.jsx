import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogs = [
        {name: "Dima", id:"1"},
        {name: "Andrey", id:"2"},
        {name: "Sveta", id:"3"},
        {name: "Misha", id:"4"},
        {name: "Valera", id:"5"},
    ];

    let messages = [
        {message: "Hi", id:"1"},
        {message: "How are you?", id:"2"},
        {message: "Yo", id:"3"},   
    ];

    const dialogsElements = dialogs.map((dialog, i) => {
        return (<DialogItem key={Math.random() + i} name={dialog.name} id={dialog.id}/>)
    })

    const messagesElements = messages.map((message, i) => <Message key={Math.random() + i} message={message.message}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElements}   
            </div>
            <div className={classes.messages}>
               {messagesElements}   
            </div>
        </div>
    )
}

export default Dialogs;








