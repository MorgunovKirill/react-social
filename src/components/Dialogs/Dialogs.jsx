import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer'


const Dialogs = (props) => {
    
    let addMessage = () => {
      props.dispatch(addMessageCreator())
    };

    let updateTextArea = (evt) => {
      let text = evt.target.value;
      props.dispatch(updateNewMessageCreator(text));        
    };
  

    const dialogsElements = props.dialogsPage.dialogs.map((dialog, i) => {
        return (<DialogItem key={Math.random() + i} name={dialog.name} id={dialog.id}/>)
    })

    const messagesElements = props.dialogsPage.messages.map((message, i) => <Message key={Math.random() + i} message={message.message} sender={message.sender}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElements}   
            </div>
            <div className={classes.messages}>
               {messagesElements}
               <textarea onChange={updateTextArea} className={classes.textArea}  value={props.dialogsPage.newMessage}/>
               <button onClick={addMessage} className={classes.button} >Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs;








