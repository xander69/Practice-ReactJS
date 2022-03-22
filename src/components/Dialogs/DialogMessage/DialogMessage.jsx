import React from 'react';
import s from './DialogMessage.module.css'

const DialogMessage = (props) => {
    return <div className={s.dialogMessage}>
        {props.message}
    </div>
}

export default DialogMessage;