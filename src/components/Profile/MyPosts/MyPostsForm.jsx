import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from '../../UI/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
 
    return (
            <form onSubmit={props.handleSubmit}>               
                <Field name="mypost" placeholder="your news" validate={[required, maxLength10]} component={Textarea}/>
                <button>Send</button>         
            </form>
    )
}

const MyPostsReduxForm = reduxForm({
    form: 'addmyposts'
})(MyPostsForm);

export default MyPostsReduxForm;