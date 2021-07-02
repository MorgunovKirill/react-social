import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Dialogs.module.css';
import {required, maxLengthCreator} from '../../utils/validators/validators'
import { Textarea } from '../UI/FormControls/FormControls';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessageBody" className={classes.textArea} validate={[required, maxLength50]} placeholder="type text" component={Textarea}/>         
            <button className={classes.button} >Отправить сообщение</button>
        </form>
    )
}

const AddMessageFormReduxForm = reduxForm({
    form: 'addmessage'
})(AddMessageForm);

export default AddMessageFormReduxForm;