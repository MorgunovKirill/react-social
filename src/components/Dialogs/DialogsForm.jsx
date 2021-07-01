import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Dialogs.module.css';

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessageBody" className={classes.textArea} placeholder="type text" component="textarea"/>         
            <button className={classes.button} >Отправить сообщение</button>
        </form>
    )
}

const AddMessageFormReduxForm = reduxForm({
    form: 'addmessage'
})(AddMessageForm);

export default AddMessageFormReduxForm;