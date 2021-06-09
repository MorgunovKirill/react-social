import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/state'


const Dialogs = (props) => {
    
    let newPostElement = React.createRef();

    let addMessage = () => {
      props.dispatch(addMessageActionCreator())
    };

    let updateTextArea = (evt) => {
      let text = evt.target.value;
      props.dispatch(updateNewMessageActionCreator(text));        
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
               <textarea onChange={updateTextArea} className={classes.textArea} ref={newPostElement} value={props.dialogsPage.newMessage}/>
               <button onClick={addMessage} className={classes.button} >Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs;








