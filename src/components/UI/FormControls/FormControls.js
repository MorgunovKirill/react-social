import React from "react"
import classes from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
             <textarea {...input} {...props} />
             <span>{hasError && meta.error}</span>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
             <input {...input} {...props} />
             <span>{hasError && meta.error}</span>
        </div>
    )
}