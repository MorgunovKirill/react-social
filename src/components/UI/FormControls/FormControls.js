import React from "react"
import classes from "./FormControls.module.css"
import { Field } from 'redux-form';

const FormControl = ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            <span>{hasError && error}</span>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field name={name}
         placeholder={placeholder}
         validate={validators}
         component={component}
         {...props} />
         {text}
    </div>
)
