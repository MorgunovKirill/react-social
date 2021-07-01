import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MyPostsForm = (props) => {
 
    return (
            <form onSubmit={props.handleSubmit}>               
                <Field name="mypost" placeholder="your news" component="textarea"/>
                <button>Send</button>         
            </form>
    )
}

const MyPostsReduxForm = reduxForm({
    form: 'addmyposts'
})(MyPostsForm);

export default MyPostsReduxForm;