import React from 'react'
import styles from './FormControls.module.css'

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + (hasError ? ' ' + styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <div className={styles.error}>
                <span>
                    {meta.error}
                </span>
            </div>
            }
        </div>
    )
}

export const Textarea = (props) => <FormControl {...props}>
    <textarea {...props.input} {...props} rows="1" cols="60"/>
</FormControl>

export const Input = (props) => <FormControl {...props}>
    <input {...props.input} {...props}/>
</FormControl>