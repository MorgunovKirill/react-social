import React from 'react';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageCreator())
      };
  
    let updateTextArea = (body) => {
        let text = body.target.value;
        props.store.dispatch(updateNewMessageCreator(text));        
    };

    return (
        <Dialogs dialogsPage={state} addMessage={addMessage} updateTextArea={updateTextArea} />
    )
}

export default DialogsContainer;