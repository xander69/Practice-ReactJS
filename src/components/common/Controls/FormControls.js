import React from 'react'
import styles from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + (hasError ? ' ' + styles.error : '')}>
            <div>
                <textarea {...input} {...props} rows="1" cols="60"/>
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