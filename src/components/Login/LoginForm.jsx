import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createField, Input } from '../UI/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import classes from './LoginForm.module.css';

const LoginForm = ({handleSubmit, error}) => {
 
    return (
            <form onSubmit={handleSubmit}>
                { createField("Login", "email", [required], Input) }              
                { createField("Password", "password", [required], Input, {type: "password"}) }  
                { createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}               
                {error 
                ? <div className={classes.formSummaryError}> {error} </div>
                : null
                }
                <div>
                    <button type={"submit"}>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;