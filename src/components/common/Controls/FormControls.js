import React from 'react'
import styles from './FormControls.module.css'

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && (meta.error || meta.submitError)
    return (
        <span className={styles.formControl + (hasError ? ' ' + styles.error : '')}>
            {props.children}
            {hasError && <span className={styles.error}>
                    {(meta.error || meta.submitError)}
                </span>
            }
        </span>
    )
}

export const Textarea = (props) => <FormControl {...props}>
    <textarea {...props.input} {...props} rows="1" cols="60"/>
</FormControl>

export const Input = (props) => <FormControl {...props}>
    <input {...props.input} {...props}/>
</FormControl>