import React from "react";
import styles from "./FormsControls.module.css"


export const TextArea = ({ props, meta, input}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
            <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({type, meta, input}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} type={type}  />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}