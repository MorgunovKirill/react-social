import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../UI/FormControls/FormControls';
import { required } from '../../utils/validators/validators'

const LoginForm = (props) => {
 
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"login"} placeholder={"login"} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field name={"password"} placeholder={"password"} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field name={"rememberMe"} type={"checkbox"} component={Input} />
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