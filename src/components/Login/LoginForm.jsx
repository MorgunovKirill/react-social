import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../UI/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import classes from './LoginForm.module.css';

const LoginForm = (props) => {
 
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"email"} placeholder={"login"} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field name={"password"} type={"password"} placeholder={"password"} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field name={"rememberMe"} type={"checkbox"} component={Input} />
                </div>
                {props.error 
                ? <div className={classes.formSummaryError}> {props.error} </div>
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