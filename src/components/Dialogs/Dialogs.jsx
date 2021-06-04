import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    const dialogsElements = props.state.dialogs.map((dialog, i) => {
        return (<DialogItem key={Math.random() + i} name={dialog.name} id={dialog.id}/>)
    })

    const messagesElements = props.state.messages.map((message, i) => <Message key={Math.random() + i} message={message.message} sender={message.sender}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElements}   
            </div>
            <div className={classes.messages}>
               {messagesElements}
               <textarea className={classes.textArea} ref={newPostElement}></textarea>   
               <button className={classes.button} onClick={ addPost }>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs;








