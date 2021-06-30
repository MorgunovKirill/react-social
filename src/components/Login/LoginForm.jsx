import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
 
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"login"} placeholder={"login"} component={"input"} />
                </div>
                <div>
                    <Field name={"password"} placeholder={"password"} component={"input"} />
                </div>
                <div>
                    <Field name={"rememberMe"} type={"checkbox"} component={"input"} />
                </div>
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